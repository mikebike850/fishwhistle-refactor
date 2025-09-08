import React from 'react';
import { Fish, Waves, Leaf, Users, Zap, Heart } from 'lucide-react';

export default function AboutSection() {
  return (
    <div className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white rounded-xl shadow-lg p-8 mb-8">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <Fish className="w-10 h-10 text-emerald-200" />
          <h2 className="text-3xl font-bold">The Fish Whistle</h2>
          <Leaf className="w-8 h-8 text-green-300" />
        </div>
        <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
          Where fishing meets good vibes. We're not just about catching fish – we're about catching the perfect moment. 🎣✨
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="text-center">
          <div className="bg-white bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <Waves className="w-8 h-8 text-cyan-200" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Real-Time Intel</h3>
          <p className="text-emerald-100 text-sm">
            Live water conditions, weather data, and bite forecasts powered by AI and community reports.
          </p>
        </div>

        <div className="text-center">
          <div className="bg-white bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <Users className="w-8 h-8 text-blue-200" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Chill Community</h3>
          <p className="text-emerald-100 text-sm">
            Share your catches, swap stories, and connect with fellow anglers who appreciate the finer things in life.
          </p>
        </div>

        <div className="text-center">
          <div className="bg-white bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <Leaf className="w-8 h-8 text-green-200" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Strain Pairings</h3>
          <p className="text-emerald-100 text-sm">
            Our signature feature: perfectly curated strain recommendations for every fishing scenario. Because why not? 🌿
          </p>
        </div>
      </div>

      <div className="bg-white bg-opacity-10 rounded-lg p-6 text-center">
        <div className="flex items-center justify-center space-x-2 mb-3">
          <Zap className="w-5 h-5 text-yellow-300" />
          <h3 className="text-lg font-semibold">The Whistle Philosophy</h3>
          <Heart className="w-5 h-5 text-pink-300" />
        </div>
        <p className="text-emerald-100 leading-relaxed">
          Life's too short for bad fishing days and harsh vibes. We believe the best catches happen when you're relaxed, 
          informed, and in tune with nature. Whether you're a weekend warrior or a seasoned guide, we've got the data, 
          community, and good energy to make every trip legendary.
        </p>
        <div className="mt-4 text-emerald-200 text-sm italic">
          "Catch the vibe, catch the fish" – That's not just our motto, it's a way of life. 🎣💚
        </div>
      </div>
    </div>
  );
}