import React, { useState } from 'react';
import { Search, MapPin, Fish, Waves } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="block w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white shadow-sm"
          placeholder="Search by location, water source, fish type, or strain pairing..."
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-0 pr-4 flex items-center"
        >
          <div className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg transition-colors">
            Search
          </div>
        </button>
      </form>
      
      {/* Quick search suggestions */}
      <div className="mt-3 flex flex-wrap gap-2">
        <span className="text-sm text-gray-600">Popular:</span>
        {['Colorado River', 'Rainbow Trout', 'Blue Dream', 'Fly Fishing'].map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => {
              setQuery(suggestion);
              onSearch(suggestion);
            }}
            className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
}