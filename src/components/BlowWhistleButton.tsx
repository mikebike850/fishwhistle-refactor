import React, { useState } from 'react';
import { Wind, Sparkles } from 'lucide-react';

interface BlowWhistleButtonProps {
  onBlow: () => void;
}

export default function BlowWhistleButton({ onBlow }: BlowWhistleButtonProps) {
  const [isBlowing, setIsBlowing] = useState(false);

  const handleBlow = () => {
    setIsBlowing(true);
    onBlow();
    
    // Reset animation after 2 seconds
    setTimeout(() => {
      setIsBlowing(false);
    }, 2000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={handleBlow}
        disabled={isBlowing}
        className={`
          relative bg-gradient-to-r from-emerald-500 to-teal-600 text-white 
          rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300
          ${isBlowing ? 'animate-pulse scale-110' : 'hover:scale-105'}
          disabled:cursor-not-allowed
        `}
      >
        <div className="flex items-center space-x-2">
          <Wind className={`w-6 h-6 ${isBlowing ? 'animate-spin' : ''}`} />
          <span className="font-medium hidden sm:inline">
            {isBlowing ? 'Blowing...' : 'Blow the Whistle'}
          </span>
        </div>
        
        {/* Sparkle effects */}
        {isBlowing && (
          <div className="absolute inset-0 pointer-events-none">
            <Sparkles className="absolute -top-2 -right-2 w-4 h-4 text-yellow-300 animate-ping" />
            <Sparkles className="absolute -bottom-2 -left-2 w-4 h-4 text-yellow-300 animate-ping delay-300" />
            <Sparkles className="absolute -top-2 -left-2 w-4 h-4 text-yellow-300 animate-ping delay-700" />
          </div>
        )}
      </button>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
        Refresh all data with fresh vibes! 🎣
      </div>
    </div>
  );
}