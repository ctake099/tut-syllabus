/* ==== metaRow.tsx  ── 短い値用 ==== */
export function MetaRow({ label, children }: { label: string; children: React.ReactNode }) {
    return (
      <p className="text-sm leading-6">
        <span className="inline-block w-28 font-semibold text-gray-600">{label}</span>
        {children || '―'}
      </p>
    );
  }
  
  /* ==== textRow.tsx ── 長文用 ==== */
  export function TextRow({ label, children }: { label: string; children: React.ReactNode }) {
    // children は string と仮定
    const text = typeof children === 'string' ? children : '';
    // 例：半角・全角の「第１回」「第２回」…で分割
    const lines = text.split(/(?=第[0-9０-９]+回)/u);
  
    return (
      <div className="space-y-1">
        <p className="font-semibold text-gray-600">{label}</p>
        <div className="text-sm leading-6">
          {lines.map((line, i) => (
            <p key={i} className="whitespace-pre-line">
              {line}
            </p>
          ))}
        </div>
      </div>
    );
  }