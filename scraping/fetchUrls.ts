// @ts-ignore
const puppeteer = require("puppeteer");
const fs = require("fs");

// 遅延関数
function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// refer() を実際の URL に変換する関数
function parseReferToUrl(onclick: string): string | null {
    const match = onclick.match(/refer\('(\d+)',\s*'([^']+)',\s*'([^']+)'\)/);
    if (!match) return null;
    const [, nendo, jscd, jcd] = match;
    return `https://kyo-web.teu.ac.jp/syllabus/${nendo}/${jscd}_${jcd}_ja_JP.html`;
}

async function main() {
    try {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        await page.goto("https://kyo-web.teu.ac.jp/campussy/", {
            waitUntil: 'domcontentloaded',
        });

        let frames = page.frames();
        const frameNames = frames.map(f => f.name());
        console.log("フレーム名一覧:", frameNames);

        const searchFrame = frames.find(f => f.name() === 'search');
        if (!searchFrame) {
            console.error("search フレームが見つかりませんでした。");
            await browser.close();
            return;
        }

        // 検索ボタンをクリック
        await searchFrame.click('input[name="_eventId_search"]');
        console.log("検索ボタンをクリックしました");

        await delay(2000); // result フレームの更新待ち

        const allUrls: string[] = [];

        while (true) {
            frames = page.frames();
            const resultFrame = frames.find(f => f.name() === 'result');
            if (!resultFrame) {
                console.error("result フレームが見つかりません。");
                break;
            }

            try {
                await resultFrame.waitForSelector('a[onclick]', { timeout: 10000 });
            } catch {
                console.warn("リンクが見つかりませんでした。終了します。");
                break;
            }

            // このページの onclick 属性取得
            const onclickValues = await resultFrame.$$eval('a[onclick]', anchors =>
                anchors.map(a => a.getAttribute('onclick')).filter(Boolean)
            );

            const urls = (onclickValues as string[])
                .map(parseReferToUrl)
                .filter((url): url is string => url !== null);

            console.log(`📄 ページから ${urls.length} 件の URL を取得`);
            allUrls.push(...urls);

            // 次ページへ
            const hasNext = await resultFrame.evaluate(() => {
                const anchors = Array.from(document.querySelectorAll('a'));
                return anchors.some(a => a.textContent?.includes("次へ"));
            });

            if (!hasNext) {
                console.log("『次へ』リンクが見つかりません。終了します。");
                break;
            }

            await resultFrame.evaluate(() => {
                const anchors = Array.from(document.querySelectorAll('a'));
                const next = anchors.find(a => a.textContent?.includes("次へ"));
                if (next) (next as HTMLElement).click();
            });

            console.log("➡ 次ページに遷移...");
            await delay(3000);
        }

        // ✅ JSON ファイルに保存
        const filePath = "syllabus_urls.json";
        fs.writeFileSync(filePath, JSON.stringify(allUrls, null, 2), "utf-8");
        console.log(`✅ URL リストを '${filePath}' に保存しました (${allUrls.length} 件)`);

        await browser.close();
    } catch (error) {
        console.error("Error in main:", error);
    }
}

main();
