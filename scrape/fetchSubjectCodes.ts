import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";

// refer() を実際の URL に変換
function parseReferToUrl(onclick: string): { code: string; url: string; department: string } | null {
  const match = onclick.match(/refer\('(\d+)',\s*'([^']+)',\s*'([^']+)'\)/);
  if (!match) return null;
  const [, nendo, jscd, jcd] = match;
  return {
    code: `${jcd}`, // 時間割コードとして使える
    url: `https://kyo-web.teu.ac.jp/syllabus/${nendo}/${jscd}_${jcd}_ja_JP.html`,
    department: jscd // 所属コード（例：CS, BT など）
  };
}

// 待機関数
function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://kyo-web.teu.ac.jp/campussy/", {
    waitUntil: "domcontentloaded",
  });

  const frames = () => page.frames();
  const searchFrame = (await frames()).find(f => f.name() === "search");

  if (!searchFrame) {
    console.error("search フレームが見つかりませんでした");
    await browser.close();
    return;
  }

  await searchFrame.click('input[name="_eventId_search"]');
  console.log("検索ボタンをクリックしました");

  const results: { code: string; department: string; url: string }[] = [];

  while (true) {
    const resultFrame = (await frames()).find(f => f.name() === "result");
    if (!resultFrame) {
      console.error("result フレームが見つかりません");
      break;
    }

    try {
      await resultFrame.waitForSelector('a[onclick]', { timeout: 10000 });
    } catch {
      console.warn("リンクが見つかりませんでした。終了します。");
      break;
    }

    const entries = await resultFrame.$$eval('a[onclick]', anchors => {
      return anchors
        .map(a => a.getAttribute('onclick'))
        .filter(Boolean) as string[];
    });

    const pageData = entries
      .map(parseReferToUrl)
      .filter((item): item is { code: string; department: string; url: string } => item !== null);

    console.log(`ページから ${pageData.length} 件のデータを取得`);
    results.push(...pageData);

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

    await delay(1000);
  }

  const savePath = path.join("data", "subject_codes.json");
  fs.mkdirSync(path.dirname(savePath), { recursive: true });
  fs.writeFileSync(savePath, JSON.stringify(results, null, 2), "utf-8");

  console.log(`${results.length} 件のコード情報を '${savePath}' に保存しました`);
  await browser.close();
}

main().catch(console.error);