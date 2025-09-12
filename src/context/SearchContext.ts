// src/context/SearchContext.tsx
import { createContext, useContext } from 'react';

export type SearchContextValue = {
  query: string;
  setQuery: (q: string) => void;
};

export const SearchContext = createContext<SearchContextValue | null>(null);

export function useSearch(): SearchContextValue {
  const ctx = useContext(SearchContext);
  if (!ctx) throw new Error('useSearch must be used inside SearchProvider');
  return ctx;
}
