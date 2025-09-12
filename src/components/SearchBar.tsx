import { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { useSearch } from '../context/SearchContext';

export default function SearchBar() {
  const { query, setQuery } = useSearch();
  const [value, setValue] = useState(query);

  useEffect(() => {
    setValue(query);
  }, [query]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuery(value.trim());
  };

  const onClear = () => {
    setValue('');
    setQuery('');
  };

  return (
    <form onSubmit={onSubmit} className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search locations, species, reports"
        className="w-full rounded-lg border border-gray-300 pl-9 pr-8 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-brand-400"
      />
      {value ? (
        <button
          type="button"
          onClick={onClear}
          aria-label="Clear search"
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600"
        >
          <X className="w-4 h-4" />
        </button>
      ) : null}
    </form>
  );
}
