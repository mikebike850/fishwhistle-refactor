import React from 'react';
import { Thermometer, Droplets, Eye, Gauge, Clock } from 'lucide-react';
import { WaterData } from '../types';

interface WaterConditionsCardProps {
  data: WaterData;
}

export default function WaterConditionsCard({ data }: WaterConditionsCardProps) {
  const getFlowStatus = (flowRate: number) => {
    if (flowRate < 200) return { status: 'Low', color: 'text-red-500', bg: 'bg-red-50' };
    if (flowRate < 400) return { status: 'Normal', color: 'text-green-500', bg: 'bg-green-50' };
    return { status: 'High', color: 'text-orange-500', bg: 'bg-orange-50' };
  };

  const getClarityColor = (clarity: string) => {
    switch (clarity) {
      case 'clear': return 'text-blue-500';
      case 'murky': return 'text-yellow-500';
      case 'muddy': return 'text-brown-500';
      default: return 'text-gray-500';
    }
  };

  const flowStatus = getFlowStatus(data.flowRate);

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{data.location}</h3>
        <div className="flex items-center space-x-1 text-sm text-gray-500">
          <Clock className="w-4 h-4" />
          <span>Updated {data.lastUpdated.toLocaleTimeString()}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Temperature */}
        <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
          <Thermometer className="w-6 h-6 text-orange-500" />
          <div>
            <p className="text-sm text-gray-600">Temperature</p>
            <p className="text-lg font-semibold text-gray-900">{data.temperature}°F</p>
          </div>
        </div>

        {/* Flow Rate */}
        <div className={`flex items-center space-x-3 p-3 rounded-lg ${flowStatus.bg}`}>
          <Droplets className={`w-6 h-6 ${flowStatus.color}`} />
          <div>
            <p className="text-sm text-gray-600">Flow Rate</p>
            <p className="text-lg font-semibold text-gray-900">{data.flowRate} cfs</p>
            <p className={`text-xs font-medium ${flowStatus.color}`}>{flowStatus.status}</p>
          </div>
        </div>

        {/* Water Clarity */}
        <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
          <Eye className={`w-6 h-6 ${getClarityColor(data.clarity)}`} />
          <div>
            <p className="text-sm text-gray-600">Clarity</p>
            <p className="text-lg font-semibold text-gray-900 capitalize">{data.clarity}</p>
          </div>
        </div>

        {/* Barometric Pressure */}
        <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
          <Gauge className="w-6 h-6 text-purple-500" />
          <div>
            <p className="text-sm text-gray-600">Pressure</p>
            <p className="text-lg font-semibold text-gray-900">{data.barometricPressure}"</p>
          </div>
        </div>
      </div>
    </div>
  );
}