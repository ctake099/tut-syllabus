'use client';

import { Copy } from 'lucide-react';
import { useState } from 'react';

export default function TimeTableBadge({ code }: { code: string }) {
  /* --- 状態 --- */
  const [copied, setCopied] = useState(false);
  const [hovered, setHovered] = useState(false);

  /* --- クリックでコピー --- */
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      /* 1.5 秒後に元に戻す */
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      console.error('クリップボードへのコピー失敗', e);
    }
  };

  return (
    <button
      type="button"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setCopied(false); }}
      onClick={handleCopy}
      className="relative flex items-center space-x-1 focus:outline-none"
    >
      {/* 時間割コード */}
      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs whitespace-nowrap">
        {code}
      </span>

      {/* コピーアイコン */}
      <Copy className="w-4 h-4 shrink-0 text-gray-500 hover:text-black" />

      {/* ホバー時だけ「コピーする」 */}
      {hovered && !copied && (
        <span className="pointer-events-none absolute -top-7 right-0 bg-black text-white text-xs px-2 py-0.5 rounded whitespace-nowrap">
          コピーする
        </span>
      )}

      {/* クリック後は 1.5 秒だけ「コピー完了」 */}
      {copied && (
        <span className="pointer-events-none absolute -top-7 right-0 bg-green-600 text-white text-xs px-2 py-0.5 rounded whitespace-nowrap">
          コピー完了
        </span>
      )}
    </button>
  );
}