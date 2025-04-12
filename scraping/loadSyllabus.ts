// scraping/lib/loadSyllabus.ts
import fs from "fs";
import path from "path";
import { LectureInfo } from "../types/lecture"; // ここを追加

export function loadDummySyllabus(limit = 20): LectureInfo[] {
  const dirPath = path.join(process.cwd(), "scraping/DummyDatas");
  const files = fs.readdirSync(dirPath).filter(file => file.endsWith(".json")).slice(0, limit);
  return files.map((file) => {
    const content = fs.readFileSync(path.join(dirPath, file), "utf-8");
    return JSON.parse(content) as LectureInfo;
  });
}