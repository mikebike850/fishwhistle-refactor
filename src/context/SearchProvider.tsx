// src/context/SearchProvider.tsx
import { useState, type PropsWithChildren } from 'react';
import { SearchContext, type SearchContextValue } from './SearchContext';

export function SearchProvider({ children }: PropsWithChildren) {
  const [query, setQuery] = useState<string>('');

  const value: SearchContextValue = { query, setQuery };

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
}
