import { readFile, readdir } from 'fs/promises';
import path from 'path';

type SubjectCodeEntry = {
  code: string;
  url: string;
  department: string;
};

async function loadSubjectCodes(): Promise<SubjectCodeEntry[]> {
  const raw = await readFile('./data/subject_codes.json', 'utf-8');
  return JSON.parse(raw) as SubjectCodeEntry[];
}

async function getExistingLectureCodes(): Promise<Set<string>> {
  const files = await readdir('./data/lectureData');
  return new Set(files.map(file => path.parse(file).name));
}

async function main() {
  const subjects = await loadSubjectCodes();
  const existingCodes = await getExistingLectureCodes();

  const missing = subjects.filter(subject => !existingCodes.has(subject.code));

  console.log(`見つかった不足コード ${missing.length} 件:`);
  missing.forEach(({ code, url }) => {
    console.log(`- ${code} → ${url}`);
  });
}

main().catch(console.error);