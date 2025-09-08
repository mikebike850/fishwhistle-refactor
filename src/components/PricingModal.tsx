import React from 'react';
import { X, Check, Star, Crown, Zap } from 'lucide-react';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PricingModal({ isOpen, onClose }: PricingModalProps) {
  if (!isOpen) return null;

  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      icon: Zap,
      color: 'from-gray-400 to-gray-600',
      features: [
        'Limited water data access',
        'View social feed',
        'Basic weather info',
        'Ad-supported experience'
      ],
      limitations: [
        'No strain pairings',
        'Cannot post reports',
        'No push notifications'
      ]
    },
    {
      name: 'Premium',
      price: '$4.99',
      period: 'month',
      icon: Star,
      color: 'from-yellow-400 to-orange-500',
      popular: true,
      features: [
        'Full water data & forecasts',
        'Strain pairing suggestions',
        'Submit unlimited reports',
        'Ad-free experience',
        'Push notifications',
        'Gear partner discounts'
      ]
    },
    {
      name: 'Pro Guide',
      price: '$14.99',
      period: 'month',
      icon: Crown,
      color: 'from-purple-500 to-indigo-600',
      features: [
        'All Premium features',
        'Enhanced analytics & heatmaps',
        'Verified "Guide Reports"',
        'Feed visibility boost',
        'Early feature access',
        'Priority support'
      ]
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Choose Your Vibe</h2>
              <p className="text-gray-600 mt-1">Upgrade to unlock the full fishing experience 🎣</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => {
              const Icon = plan.icon;
              return (
                <div
                  key={plan.name}
                  className={`relative rounded-xl border-2 p-6 ${
                    plan.popular ? 'border-yellow-400 shadow-lg' : 'border-gray-200'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${plan.color} text-white mb-4`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                    <div className="mt-2">
                      <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                      {plan.period !== 'forever' && (
                        <span className="text-gray-600">/{plan.period}</span>
                      )}
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                    {plan.limitations?.map((limitation, index) => (
                      <li key={index} className="flex items-start space-x-3 opacity-60">
                        <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-500">{limitation}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:from-yellow-500 hover:to-orange-600'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {plan.name === 'Free' ? 'Current Plan' : 'Upgrade Now'}
                  </button>
                </div>
              );
            })}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              🌿 <strong>Pro Tip:</strong> All paid plans include our signature strain pairings to enhance your fishing vibes!
            </p>
            <p className="text-sm text-gray-500">
              Cancel anytime. No fishing stories required. 😄
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}