import React from 'react';
import { MapPin, Thermometer, Droplets, Eye, Wind, TrendingUp } from 'lucide-react';
import { WaterData, FishingForecast } from '../types';

interface LocationConditionsProps {
  location: string;
  waterData: WaterData;
  forecast: FishingForecast;
}

export default function LocationConditions({ location, waterData, forecast }: LocationConditionsProps) {
  const getScoreColor = (score: number) => {
    if (score >= 8) return 'text-green-600 bg-green-100';
    if (score >= 6) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getFlowStatus = (flowRate: number) => {
    if (flowRate < 200) return { status: 'Low', color: 'text-red-500' };
    if (flowRate < 400) return { status: 'Normal', color: 'text-green-500' };
    return { status: 'High', color: 'text-orange-500' };
  };

  const flowStatus = getFlowStatus(waterData.flowRate);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <MapPin className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl font-bold text-gray-900">{location}</h2>
          <span className="text-sm text-gray-500">• Your area</span>
        </div>
        <div className={`rounded-full px-4 py-2 ${getScoreColor(forecast.score)}`}>
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4" />
            <span className="font-bold">{forecast.score}/10</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="text-center p-3 bg-orange-50 rounded-lg">
          <Thermometer className="w-6 h-6 text-orange-500 mx-auto mb-2" />
          <div className="text-lg font-semibold text-gray-900">{waterData.temperature}°F</div>
          <div className="text-sm text-gray-600">Temperature</div>
        </div>
        
        <div className="text-center p-3 bg-blue-50 rounded-lg">
          <Droplets className={`w-6 h-6 mx-auto mb-2 ${flowStatus.color}`} />
          <div className="text-lg font-semibold text-gray-900">{waterData.flowRate} cfs</div>
          <div className={`text-sm ${flowStatus.color}`}>{flowStatus.status} Flow</div>
        </div>
        
        <div className="text-center p-3 bg-cyan-50 rounded-lg">
          <Eye className="w-6 h-6 text-cyan-500 mx-auto mb-2" />
          <div className="text-lg font-semibold text-gray-900 capitalize">{waterData.clarity}</div>
          <div className="text-sm text-gray-600">Clarity</div>
        </div>
        
        <div className="text-center p-3 bg-purple-50 rounded-lg">
          <Wind className="w-6 h-6 text-purple-500 mx-auto mb-2" />
          <div className="text-lg font-semibold text-gray-900">{waterData.barometricPressure}"</div>
          <div className="text-sm text-gray-600">Pressure</div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-4 border border-emerald-200">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-emerald-800">Today's Forecast</h3>
          <span className="text-emerald-600 font-medium">{forecast.conditions}</span>
        </div>
        <p className="text-emerald-700 text-sm mb-3">{forecast.recommendation}</p>
        
        {forecast.strainPairing && (
          <div className="bg-white bg-opacity-50 rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-green-600 font-medium">🌿 Perfect Pairing:</span>
              <span className="font-semibold text-green-800">{forecast.strainPairing.name}</span>
            </div>
            <p className="text-sm text-green-700">{forecast.strainPairing.reason}</p>
          </div>
        )}
      </div>
    </div>
  );
}