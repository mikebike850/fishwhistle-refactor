import React from 'react';
import { Fish, Menu, User, Bell } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  onViewChange: (view: string) => void;
  onMenuToggle: () => void;
}

export default function Header({ currentView, onViewChange, onMenuToggle }: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Fish className="w-8 h-8 text-emerald-200" />
            <div>
              <h1 className="text-xl font-bold">The Fish Whistle</h1>
              <p className="text-xs text-emerald-200">Catch the vibe, catch the fish 🎣</p>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => onViewChange('feed')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentView === 'feed'
                  ? 'bg-emerald-700 text-white'
                  : 'text-emerald-100 hover:bg-emerald-600 hover:text-white'
              }`}
            >
              Feed
            </button>
            <button
              onClick={() => onViewChange('map')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentView === 'map'
                  ? 'bg-emerald-700 text-white'
                  : 'text-emerald-100 hover:bg-emerald-600 hover:text-white'
              }`}
            >
              Map
            </button>
            <button
              onClick={() => onViewChange('conditions')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentView === 'conditions'
                  ? 'bg-emerald-700 text-white'
                  : 'text-emerald-100 hover:bg-emerald-600 hover:text-white'
              }`}
            >
              Conditions
            </button>
            <button
              onClick={() => onViewChange('forecasts')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentView === 'forecasts'
                  ? 'bg-emerald-700 text-white'
                  : 'text-emerald-100 hover:bg-emerald-600 hover:text-white'
              }`}
            >
              Forecasts
            </button>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-emerald-600 transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-emerald-600 transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button
              onClick={onMenuToggle}
              className="md:hidden p-2 rounded-full hover:bg-emerald-600 transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}