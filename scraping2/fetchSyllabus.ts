// scraping2/fetch.ts
import axios from 'axios';
import * as https from 'https';
import { constants } from 'crypto';
import * as cheerio from 'cheerio';

const url = 'https://kyo-web.teu.ac.jp/syllabus/2024/BT_11040B1_ja_JP.html';

const fetchHTML = async (url: string): Promise<cheerio.Root> => {
  const agent = new https.Agent({
    minVersion: 'TLSv1.2',
    rejectUnauthorized: false,
    secureOptions: constants.SSL_OP_LEGACY_SERVER_CONNECT,
  });

  const { data: html } = await axios.get(url, {
    httpsAgent: agent,
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
    },
  });

  return cheerio.load(html);
};

const main = async () => {
  try {
    const $ = await fetchHTML(url);
    const subjectName = $('th:contains("科目名")').next('td').text().trim();
    console.log('✅ 科目名:', subjectName);
  } catch (err) {
    console.error('❌ エラー:', err);
  }
};

main();