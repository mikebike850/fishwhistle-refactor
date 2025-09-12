import type { PropsWithChildren } from 'react';
import SearchBar from './SearchBar';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-10 backdrop-blur bg-white/70 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
          <div className="text-xl font-bold text-brand-700">Fishwhistle</div>
          <div className="flex-1 max-w-xl">
            <SearchBar />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6">{children}</main>
    </div>
  );
}
