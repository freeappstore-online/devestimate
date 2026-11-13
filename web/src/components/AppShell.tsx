import type { ReactNode } from "react";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="app-shell min-h-0 flex min-w-0 flex-1 flex-col overflow-x-clip">
      <header className="app-shell__header border-b border-[var(--line)] bg-[var(--panel)] backdrop-blur-md">
        <div className="mx-auto flex w-full min-w-0 max-w-6xl items-start gap-3 px-3 py-2.5 sm:items-center sm:px-6 sm:py-4">
          <div className="min-w-0 flex-1">
            <h1 className="display-font truncate text-lg font-bold tracking-tight text-[var(--ink)] sm:text-2xl">
              DevEstimate
            </h1>
            <p className="mt-0.5 truncate text-[0.7rem] leading-snug text-[var(--muted)] sm:text-sm">
              Rule-based project estimator
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full min-w-0 max-w-6xl flex-1 px-3 py-4 sm:px-6 sm:py-6">
        {children}
      </main>
    </div>
  );
}
