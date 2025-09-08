import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, MapPin, Clock, Thermometer, Eye, Wind } from 'lucide-react';
import { FishingReport } from '../types';

interface FeedCardProps {
  report: FishingReport;
}

export default function FeedCard({ report }: FeedCardProps) {
  const [liked, setLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return `${Math.floor(diffInHours / 24)}d ago`;
  };

  const getTierBadge = (tier: string) => {
    switch (tier) {
      case 'pro':
        return <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full font-medium">PRO GUIDE</span>;
      case 'premium':
        return <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium">PREMIUM</span>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src={report.user.avatar}
              alt={report.user.username}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-semibold text-gray-900">{report.user.username}</h3>
                {getTierBadge(report.user.tier)}
              </div>
              <div className="flex items-center space-x-1 text-sm text-gray-500">
                <MapPin className="w-3 h-3" />
                <span>{report.location.name}</span>
                <span>•</span>
                <Clock className="w-3 h-3" />
                <span>{formatTimeAgo(report.timestamp)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image */}
      {report.images && report.images.length > 0 && (
        <div className="relative">
          <img
            src={report.images[0]}
            alt="Fishing catch"
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm font-medium">
            {report.species}
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-4">
        <p className="text-gray-800 mb-4">{report.description}</p>

        {/* Conditions */}
        <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-2 text-sm">
            <Thermometer className="w-4 h-4 text-orange-500" />
            <span className="text-gray-600">{report.conditions.temperature}°F</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Eye className="w-4 h-4 text-blue-500" />
            <span className="text-gray-600 capitalize">{report.conditions.waterClarity}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Wind className="w-4 h-4 text-gray-500" />
            <span className="text-gray-600">{report.conditions.flowRate} cfs</span>
          </div>
          <div className="text-sm text-gray-600">
            <span className="font-medium">Gear:</span> {report.gear}
          </div>
        </div>

        {/* Strain Pairing */}
        {report.strainPairing && (
          <div className="mb-4 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-green-600 font-medium">🌿 Strain Pairing:</span>
              <span className="font-semibold text-green-800">{report.strainPairing.name}</span>
            </div>
            <p className="text-sm text-green-700">{report.strainPairing.reason}</p>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center space-x-6">
            <button
              onClick={() => setLiked(!liked)}
              className={`flex items-center space-x-2 transition-colors ${
                liked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
              }`}
            >
              <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
              <span className="text-sm font-medium">{report.likes + (liked ? 1 : 0)}</span>
            </button>
            <button
              onClick={() => setShowComments(!showComments)}
              className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm font-medium">{report.comments.length}</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Comments */}
        {showComments && report.comments.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
            {report.comments.map((comment) => (
              <div key={comment.id} className="flex space-x-3">
                <img
                  src={comment.user.avatar}
                  alt={comment.user.username}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="bg-gray-50 rounded-lg px-3 py-2">
                    <p className="font-medium text-sm text-gray-900">{comment.user.username}</p>
                    <p className="text-sm text-gray-700">{comment.content}</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{formatTimeAgo(comment.timestamp)}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}