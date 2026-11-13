import type { ReactNode } from "react";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-0 flex flex-1 flex-col">
      <header className="border-b border-[var(--line)] bg-[var(--panel)] backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
          <div className="min-w-0 flex-1">
            <h1 className="display-font text-xl font-bold tracking-tight text-[var(--ink)] sm:text-2xl">
              DevEstimate
            </h1>
            <p className="mt-0.5 text-xs leading-snug text-[var(--muted)] sm:text-sm">
              Rule-based project estimator
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-4 sm:px-6 sm:py-6">
        {children}
      </main>
    </div>
  );
}
