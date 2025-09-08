import React from 'react';
import { TrendingUp, Calendar, Star } from 'lucide-react';
import { FishingForecast } from '../types';

interface ForecastCardProps {
  forecast: FishingForecast;
}

export default function ForecastCard({ forecast }: ForecastCardProps) {
  const getScoreColor = (score: number) => {
    if (score >= 8) return 'text-green-600 bg-green-100';
    if (score >= 6) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getConditionEmoji = (conditions: string) => {
    switch (conditions.toLowerCase()) {
      case 'outstanding': return '🔥';
      case 'excellent': return '⭐';
      case 'good': return '👍';
      case 'fair': return '👌';
      default: return '🎣';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{forecast.location}</h3>
        <div className="flex items-center space-x-1 text-sm text-gray-500">
          <Calendar className="w-4 h-4" />
          <span>{forecast.date.toLocaleDateString()}</span>
        </div>
      </div>

      {/* Score */}
      <div className="flex items-center justify-center mb-6">
        <div className={`rounded-full p-4 ${getScoreColor(forecast.score)}`}>
          <div className="text-center">
            <div className="text-3xl font-bold">{forecast.score}</div>
            <div className="text-sm font-medium">Score</div>
          </div>
        </div>
      </div>

      {/* Conditions */}
      <div className="text-center mb-4">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <span className="text-2xl">{getConditionEmoji(forecast.conditions)}</span>
          <span className="text-xl font-semibold text-gray-900">{forecast.conditions}</span>
        </div>
        <p className="text-gray-600">{forecast.recommendation}</p>
      </div>

      {/* Strain Pairing */}
      {forecast.strainPairing && (
        <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-green-600 font-medium">🌿 Perfect Pairing:</span>
            <span className="font-semibold text-green-800">{forecast.strainPairing.name}</span>
          </div>
          <p className="text-sm text-green-700">{forecast.strainPairing.reason}</p>
        </div>
      )}

      {/* Action Button */}
      <button className="w-full mt-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 px-4 rounded-lg font-medium hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 flex items-center justify-center space-x-2">
        <TrendingUp className="w-5 h-5" />
        <span>Get Detailed Forecast</span>
      </button>
    </div>
  );
}