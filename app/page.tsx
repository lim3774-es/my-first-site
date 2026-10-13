import InteractiveDemo from "./components/InteractiveDemo";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-sky-100 via-sky-50 to-cyan-100 text-slate-900 selection:bg-orange-500 selection:text-white">
      {/* Background glow effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-gradient-to-tr from-sky-300/40 via-cyan-200/40 to-blue-300/30 blur-3xl opacity-80" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[500px] rounded-full bg-cyan-300/20 blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-sky-200/80 bg-white/75 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-8 sm:px-12 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-orange-500 to-amber-500 font-bold text-white shadow-md shadow-orange-500/30 text-lg">
              A
            </div>
            <div>
              <span className="font-extrabold tracking-tight text-slate-900 text-base">My First Site</span>
              <span className="ml-2.5 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-bold text-amber-800 border border-amber-300/60">
                Next.js
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-4 py-1.5 text-xs font-bold text-emerald-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            정상 작동 중 (Port 3000)
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col px-8 sm:px-12 md:px-16 py-16 sm:py-24">
        {/* Hero */}
        <section className="flex flex-col items-center justify-center text-center py-6 sm:py-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/80 bg-amber-50 px-4 py-1.5 text-xs font-bold text-amber-800 shadow-sm mb-10">
            <span>✨</span>
            <span>TypeScript + App Router + Tailwind CSS 완벽 설정 완료</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-orange-700 leading-tight drop-shadow-sm px-2">
            안녕하세요, 앤입니다
          </h1>

          {/* Anne Circle Frame */}
          <div className="relative my-10 sm:my-14 h-56 w-56 sm:h-64 sm:w-64 overflow-hidden rounded-full border-4 border-white shadow-2xl ring-4 ring-orange-400/30 transition-all hover:scale-105 bg-sky-200/50">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/anne.jpg"
              alt="앤"
              className="h-full w-full object-cover object-[15%_25%] scale-[1.3]"
            />
          </div>

          {/* Intro Text */}
          <p className="mx-auto mt-4 max-w-2xl text-lg sm:text-xl text-slate-700 font-medium leading-relaxed px-4">
            원하셨던 모든 기술 스택이 오류 없이 완벽하게 준비되었습니다.
            <br className="hidden sm:inline" />
            이제 빈 템플릿이 아닌 실제 동작하는 모던 웹 애플리케이션을 시작하실 수 있습니다.
          </p>
        </section>

        {/* Feature Cards */}
        <section className="mt-16 sm:mt-20 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="group rounded-2xl border border-sky-200 bg-white/80 p-7 transition-all hover:border-orange-400 hover:bg-white shadow-md hover:shadow-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-2xl text-orange-600 border border-orange-200 mb-5">
              📘
            </div>
            <h2 className="text-lg font-bold text-slate-900">TypeScript</h2>
            <p className="mt-2.5 text-sm text-slate-600 leading-relaxed font-medium">
              정적 타입 검사와 자동 완성 기능으로 런타임 오류 없이 안전하게 개발할 수 있습니다.
            </p>
            <span className="mt-5 inline-block text-xs font-mono font-semibold text-orange-700 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              tsconfig.json 설정됨
            </span>
          </div>

          <div className="group rounded-2xl border border-sky-200 bg-white/80 p-7 transition-all hover:border-amber-400 hover:bg-white shadow-md hover:shadow-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-2xl text-amber-600 border border-amber-200 mb-5">
              🗂️
            </div>
            <h2 className="text-lg font-bold text-slate-900">App Router</h2>
            <p className="mt-2.5 text-sm text-slate-600 leading-relaxed font-medium">
              최신 <code className="text-amber-700 font-bold bg-amber-50 px-1.5 py-0.5 rounded">app/</code> 디렉터리 기반 라우팅과 서버/클라이언트 컴포넌트를 지원합니다.
            </p>
            <span className="mt-5 inline-block text-xs font-mono font-semibold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              app/page.tsx 활성화
            </span>
          </div>

          <div className="group rounded-2xl border border-sky-200 bg-white/80 p-7 transition-all hover:border-orange-400 hover:bg-white shadow-md hover:shadow-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-2xl text-orange-600 border border-orange-200 mb-5">
              🎨
            </div>
            <h2 className="text-lg font-bold text-slate-900">Tailwind CSS</h2>
            <p className="mt-2.5 text-sm text-slate-600 leading-relaxed font-medium">
              유틸리티 클래스를 통해 별도의 CSS 작성 없이 아름답고 반응형인 UI를 바로 제작합니다.
            </p>
            <span className="mt-5 inline-block text-xs font-mono font-semibold text-orange-700 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              Tailwind v4 적용됨
            </span>
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="mt-14 sm:mt-16">
          <InteractiveDemo />
        </section>

        {/* Quick Guide Card */}
        <section className="mt-14 sm:mt-16 rounded-2xl border border-sky-200 bg-white/90 p-7 sm:p-8 shadow-lg">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-5">
            <span>💡</span> 다음 단계: 어떻게 수정하면 되나요?
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm">
            <div className="rounded-xl bg-sky-50/80 p-5 border border-sky-200">
              <span className="font-bold text-orange-600 text-base">1. 메인 화면 바꾸기</span>
              <p className="text-slate-600 mt-2 font-medium leading-relaxed">
                <code className="rounded bg-white px-2 py-0.5 text-xs text-slate-800 border border-sky-200 font-mono">app/page.tsx</code> 파일을 열어 원하는 텍스트나 컴포넌트로 수정해 보세요. 저장하면 브라우저에 바로 반영됩니다!
              </p>
            </div>

            <div className="rounded-xl bg-sky-50/80 p-5 border border-sky-200">
              <span className="font-bold text-amber-600 text-base">2. 새 페이지 만들기</span>
              <p className="text-slate-600 mt-2 font-medium leading-relaxed">
                <code className="rounded bg-white px-2 py-0.5 text-xs text-slate-800 border border-sky-200 font-mono">app/about/page.tsx</code> 파일을 생성하면 <code className="text-xs text-amber-700 font-bold font-mono">/about</code> 주소로 새 페이지가 열립니다.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-sky-200/80 bg-white/75 py-8 text-center text-xs text-slate-600 font-medium">
        <p>© 2026 My First Site · 여백과 비율이 정돈된 모던 레이아웃입니다.</p>
        <p style="color:#C84726;">[오늘 처음 인터넷에 사이트를 올렸어요!]</p>
      </footer>
    </div>
  );
}


