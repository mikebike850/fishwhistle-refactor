import React from 'react';
import { X, Home, Map, Thermometer, TrendingUp, User, Settings } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentView: string;
  onViewChange: (view: string) => void;
}

export default function MobileMenu({ isOpen, onClose, currentView, onViewChange }: MobileMenuProps) {
  if (!isOpen) return null;

  const menuItems = [
    { id: 'feed', label: 'Feed', icon: Home },
    { id: 'map', label: 'Map', icon: Map },
    { id: 'conditions', label: 'Conditions', icon: Thermometer },
    { id: 'forecasts', label: 'Forecasts', icon: TrendingUp },
  ];

  const handleItemClick = (view: string) => {
    onViewChange(view);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      {/* Menu */}
      <div className="fixed inset-y-0 right-0 w-64 bg-white shadow-xl">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <nav className="p-4">
          <div className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    currentView === item.id
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
          
          <div className="mt-8 pt-8 border-t space-y-2">
            <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left text-gray-700 hover:bg-gray-100 transition-colors">
              <User className="w-5 h-5" />
              <span className="font-medium">Profile</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left text-gray-700 hover:bg-gray-100 transition-colors">
              <Settings className="w-5 h-5" />
              <span className="font-medium">Settings</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}