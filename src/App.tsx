import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import LocationConditions from './components/LocationConditions';
import AboutSection from './components/AboutSection';
import FeedCard from './components/FeedCard';
import WaterConditionsCard from './components/WaterConditionsCard';
import ForecastCard from './components/ForecastCard';
import BlowWhistleButton from './components/BlowWhistleButton';
import MobileMenu from './components/MobileMenu';
import PricingModal from './components/PricingModal';
import { mockReports, mockWaterData, mockForecasts } from './data/mockData';
import { MapPin, Waves, TrendingUp, Plus, Crown } from 'lucide-react';

function App() {
  const [currentView, setCurrentView] = useState('feed');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pricingModalOpen, setPricingModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleBlowWhistle = () => {
    // Simulate data refresh with some fun feedback
    console.log('🎣 Blowing the whistle! Fresh data incoming...');
    // In a real app, this would trigger API calls to refresh all data
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log('Searching for:', query);
    // In a real app, this would trigger search API calls
  };

  const renderContent = () => {
    switch (currentView) {
      case 'feed':
        return (
          <div className="space-y-8">
            {/* Hero Search Section */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-6">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Blow the Whistle</h1>
                <p className="text-emerald-100 text-lg">Find your perfect fishing spot with real-time data and good vibes</p>
              </div>
              <SearchBar onSearch={handleSearch} />
            </div>

            {/* Location-Based Conditions */}
            <LocationConditions 
              location="Colorado River"
              waterData={mockWaterData[0]}
              forecast={mockForecasts[0]}
            />

            {/* About Section */}
            <AboutSection />

            {/* Social Feed */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Community Feed</h2>
                <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors flex items-center space-x-2">
                  <Plus className="w-4 h-4" />
                  <span>New Report</span>
                </button>
              </div>
              <div className="text-center py-4">
                <p className="text-gray-600 mb-4">See what fellow anglers are catching in your area</p>
              </div>
            </div>

            <div className="grid gap-6">
              {mockReports.map((report) => (
                <FeedCard key={report.id} report={report} />
              ))}
            </div>
          </div>
        );

      case 'map':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Interactive Map</h2>
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <MapPin className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Map Coming Soon!</h3>
              <p className="text-gray-600 mb-4">
                We're working on an epic interactive map with real-time fishing hotspots, 
                color-coded activity levels, and strain pairings for each location.
              </p>
              <button 
                onClick={() => setPricingModalOpen(true)}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-200"
              >
                Get Early Access
              </button>
            </div>
          </div>
        );

      case 'conditions':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Water Conditions</h2>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Waves className="w-4 h-4" />
                <span>Live Data</span>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockWaterData.map((data, index) => (
                <WaterConditionsCard key={index} data={data} />
              ))}
            </div>
          </div>
        );

      case 'forecasts':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Fishing Forecasts</h2>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <TrendingUp className="w-4 h-4" />
                <span>AI Powered</span>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockForecasts.map((forecast, index) => (
                <ForecastCard key={index} forecast={forecast} />
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        currentView={currentView} 
        onViewChange={setCurrentView}
        onMenuToggle={() => setMobileMenuOpen(true)}
      />
      
      {/* Upgrade Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Crown className="w-5 h-5 text-yellow-300" />
              <span className="font-medium">
                Unlock strain pairings, unlimited reports, and ad-free experience!
              </span>
            </div>
            <button 
              onClick={() => setPricingModalOpen(true)}
              className="bg-white text-purple-600 px-4 py-1 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              Upgrade Now
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>

      <BlowWhistleButton onBlow={handleBlowWhistle} />
      
      <MobileMenu 
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        currentView={currentView}
        onViewChange={setCurrentView}
      />

      <PricingModal 
        isOpen={pricingModalOpen}
        onClose={() => setPricingModalOpen(false)}
      />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">The Fish Whistle</h3>
              <p className="text-gray-400">
                Catch the vibe, catch the fish. The ultimate fishing companion for the modern angler.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Features</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Real-time Reports</li>
                <li>Water Conditions</li>
                <li>AI Forecasts</li>
                <li>Strain Pairings</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Community</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Social Feed</li>
                <li>Guide Reports</li>
                <li>Catch Logs</li>
                <li>Photo Sharing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 The Fish Whistle. All rights reserved. 🎣</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;