'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useMemo } from 'react';
import TextField    from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Checkbox     from '@mui/material/Checkbox';
import { SearchFormProps } from '@/types/lecture';



const DAYS   = ['月','火','水','木','金','土','日'] as const;
const PERIOD = ['1','2','3','4','5','6'] as const;

// 学部 or 研究科までを抽出するヘルパー
function extractGroup(label: string): string {
  const m = label.match(/^(.*?(学部|研究科))/);
  return m ? m[1] : label;
}

export default function SearchForm({ creditOpts, gradeOpts, depOpts }: SearchFormProps) {
  const q = useSearchParams();

  // ── 曜日＋時限 ──
  const initChecked = new Set<string>(q.getAll('period'));
  const [checked, setChecked] = useState(initChecked);
  const toggle = (day: string, slot: string) => {
    const key = `${day}-${slot}`;
    setChecked(prev => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  // ── テキスト／プルダウン ──
  const [subject,      setSubject]    = useState(q.get('subject')    ?? '');
  const [instructor,   setInstructor] = useState(q.get('instructor') ?? '');
  const [creditInput,  setCreditInput] = useState(q.get('credit')     ?? '');
  const [gradeInput,   setGradeInput]  = useState(q.get('grade')      ?? '');
  const [depInput,     setDepInput]    = useState(q.get('department') ?? '');

  // ★ depOpts から「学部／研究科」だけをユニーク抽出
  const depGroups = useMemo(
    () => Array.from(new Set(depOpts.map(extractGroup))),
    [depOpts]
  );

  return (
    <form method="GET" action="/" className="space-y-6">
      {/* 科目名 / 担当教員 */}
      <div className="grid gap-4 md:grid-cols-2">
        <TextField
          name="subject"
          label="科目名"
          size="small"
          value={subject}
          onChange={e => setSubject(e.target.value)}
        />
        <TextField
          name="instructor"
          label="担当教員"
          size="small"
          value={instructor}
          onChange={e => setInstructor(e.target.value)}
        />
      </div>

      {/* 単位数 / 学年 / 開講元 */}
      <div className="grid gap-4 md:grid-cols-3">
        {/* 単位数 */}
        <Autocomplete
          freeSolo
          options={creditOpts.map(String)}
          value={creditInput}
          onInputChange={(_, v) => setCreditInput(v)}
          renderInput={params => (
            <TextField {...params} name="credit" label="単位数" size="small" />
          )}
        />

        {/* 学年 */}
        <Autocomplete
          freeSolo
          options={gradeOpts.map(String)}
          value={gradeInput}
          onInputChange={(_, v) => setGradeInput(v)}
          renderInput={params => (
            <TextField {...params} name="grade" label="学年" size="small" />
          )}
        />

        {/* 開講元（親ラベルのみ） */}
        <Autocomplete
          freeSolo
          options={depGroups}
          value={depInput}
          onInputChange={(_, v) => setDepInput(v)}
          renderInput={params => (
            <TextField {...params} name="department" label="開講元" size="small" />
          )}
        />
      </div>

      {/* 曜日・時限 */}
      <div>
        <p className="font-medium mb-2">曜日・時限</p>
        <div className="overflow-x-auto">
          <table className="border-collapse">
            <thead>
              <tr>
                <th className="w-20"></th>
                {DAYS.map(d => (
                  <th key={d} className="w-10 text-center">{d}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PERIOD.map(slot => (
                <tr key={slot}>
                  <td className="pr-2 text-right">{slot}</td>
                  {DAYS.map(d => {
                    const key = `${d}-${slot}`;
                    return (
                      <td key={key} className="text-center">
                        <Checkbox
                          size="small"
                          checked={checked.has(key)}
                          onChange={() => toggle(d, slot)}
                        />
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* hidden inputs for period */}
      {[...checked].map(p => (
        <input key={p} type="hidden" name="period" value={p} />
      ))}

      {/* 検索ボタン */}
      <div className="text-right">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          検索
        </button>
      </div>
    </form>
  );
}