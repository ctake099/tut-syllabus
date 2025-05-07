import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";

function parseReferToUrl(onclick: string): string | null {
    const match = onclick.match(/refer\('(\d+)',\s*'([^']+)',\s*'([^']+)'\)/);
    if (!match) return null;
    const [, nendo, jscd, jcd] = match;
    return `https://kyo-web.teu.ac.jp/syllabus/${nendo}/${jscd}_${jcd}_ja_JP.html`;
}

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("https://kyo-web.teu.ac.jp/campussy/", {
        waitUntil: "domcontentloaded",
    });

    let frames = await page.frames();
    const searchFrame = frames.find(f => f.name() === 'search');
    if (!searchFrame) {
        console.error("Search frame not found");
        await browser.close();
        return;
    }

    await searchFrame.click('input[name="_eventId_search"]');
    console.log("検索ボタンをクリックしました");

    const allUrls: string[] = [];

    while (true) {
        frames = await page.frames();
        const resultFrame = frames.find(f => f.name() === 'result');
        if (!resultFrame) {
            console.error("Result frame not found");
            break;
        }

        try {
            await resultFrame.waitForSelector('a[onclick]', { timeout: 10000 });
        } catch {
            console.warn("リンクが見つかりませんでした。終了します。");
            break;
        }

        const onclickValues = await resultFrame.$$eval('a[onclick]', anchors =>
            anchors.map(a => a.getAttribute('onclick')).filter(Boolean)
        );

        const urls = (onclickValues as string[])
            .map(parseReferToUrl)
            .filter((url): url is string => url !== null);

        console.log(`ページから ${urls.length} 件の URL を取得`);
        allUrls.push(...urls);

        // 次へがあるかチェック
        const hasNext = await resultFrame.evaluate(() => {
            const anchors = Array.from(document.querySelectorAll('a'));
            return anchors.some(a => a.textContent?.includes("次へ"));
        });

        if (!hasNext) {
            console.log("『次へ』リンクが見つかりません。すべてのページを処理しました。");
            break;
        }

        await resultFrame.evaluate(() => {
            const anchors = Array.from(document.querySelectorAll('a'));
            const next = anchors.find(a => a.textContent?.includes("次へ"));
            if (next) (next as HTMLElement).click();
        });

        console.log("➡ 次ページに遷移...");
        await delay(1000);
    }

    // ディレクトリを作って保存
    const savePath = path.join("data", "syllabus_urls.json");
    fs.mkdirSync(path.dirname(savePath), { recursive: true });
    fs.writeFileSync(savePath, JSON.stringify(allUrls, null, 2), "utf-8");
    console.log(`${allUrls.length} 件のURLを '${savePath}' に保存しました`);

    await browser.close();
}

main().catch(console.error);