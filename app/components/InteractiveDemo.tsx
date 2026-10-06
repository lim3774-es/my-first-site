"use client";

import { useState } from "react";

export default function InteractiveDemo() {
  const [count, setCount] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npm run dev");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl border border-sky-200 bg-white/90 p-6 shadow-lg backdrop-blur-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-sky-100 pb-5">
        <div>
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-orange-500 animate-pulse" />
            인터랙티브 데모 (클라이언트 컴포넌트)
          </h3>
          <p className="text-sm text-slate-600 mt-1 font-medium">
            Next.js App Router와 React의 상태 관리(useState)가 실시간으로 동작합니다.
          </p>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-2 rounded-lg bg-orange-500 hover:bg-orange-600 active:scale-95 px-4 py-2 text-xs font-bold text-white transition-all shadow-md shadow-orange-500/20"
        >
          <span>{copied ? "✓ 복사 완료!" : "📋 npm run dev 복사"}</span>
        </button>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <div className="flex items-center rounded-xl bg-sky-50/80 p-2 border border-sky-200">
          <button
            onClick={() => setCount((prev) => prev - 1)}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-white hover:bg-sky-100 text-lg font-bold text-slate-800 transition-all shadow-sm active:scale-95 border border-sky-200"
            aria-label="감소"
          >
            -
          </button>
          <span className="w-16 text-center font-mono text-2xl font-black text-orange-600">
            {count}
          </span>
          <button
            onClick={() => setCount((prev) => prev + 1)}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-lg font-bold text-white transition-all shadow-md active:scale-95"
            aria-label="증가"
          >
            +
          </button>
        </div>

        <button
          onClick={() => setCount(0)}
          className="text-xs font-semibold text-slate-500 hover:text-orange-600 underline underline-offset-4 transition-colors"
        >
          초기화
        </button>

        <span className="text-xs font-medium text-amber-800 ml-auto bg-amber-50 border border-amber-200/80 px-3.5 py-1.5 rounded-full shadow-sm">
          현재 클릭 수: <strong className="text-orange-600 font-bold">{count}회</strong>
        </span>
      </div>
    </div>
  );
}

