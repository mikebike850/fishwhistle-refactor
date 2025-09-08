import { FishingReport, WaterData, FishingForecast, User } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    username: 'AngleMaster420',
    email: 'angle@example.com',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    tier: 'premium',
    joinedAt: new Date('2024-01-15')
  },
  {
    id: '2',
    username: 'StreamChaser',
    email: 'stream@example.com',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    tier: 'pro',
    joinedAt: new Date('2023-11-20')
  },
  {
    id: '3',
    username: 'CatchVibes',
    email: 'catch@example.com',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    tier: 'free',
    joinedAt: new Date('2024-02-10')
  }
];

export const mockReports: FishingReport[] = [
  {
    id: '1',
    userId: '1',
    user: mockUsers[0],
    location: {
      name: 'Colorado River',
      lat: 40.0583,
      lng: -105.2081
    },
    species: 'Rainbow Trout',
    gear: 'Fly Rod, Size 16 Adams',
    conditions: {
      weather: 'Partly Cloudy',
      temperature: 68,
      waterClarity: 'clear',
      flowRate: 450
    },
    strainPairing: {
      name: 'Blue Dream',
      reason: 'Perfect for those dreamy mountain vibes while waiting for the perfect cast 🎣'
    },
    images: ['https://images.pexels.com/photos/1123982/pexels-photo-1123982.jpeg?auto=compress&cs=tinysrgb&w=800'],
    description: 'Absolutely crushing it today! Water conditions are perfect and the fish are biting like crazy. Caught 6 rainbows in 2 hours.',
    timestamp: new Date('2024-01-20T10:30:00'),
    likes: 23,
    comments: [
      {
        id: '1',
        userId: '2',
        user: mockUsers[1],
        content: 'Dude, that spot is legendary! Nice catch! 🔥',
        timestamp: new Date('2024-01-20T11:15:00')
      }
    ]
  },
  {
    id: '2',
    userId: '2',
    user: mockUsers[1],
    location: {
      name: 'Snake River',
      lat: 43.4799,
      lng: -110.7624
    },
    species: 'Cutthroat Trout',
    gear: 'Spinning Rod, Rooster Tail',
    conditions: {
      weather: 'Sunny',
      temperature: 72,
      waterClarity: 'murky',
      flowRate: 320
    },
    strainPairing: {
      name: 'Green Crack',
      reason: 'High energy strain for those active fishing days when you need to stay alert 💚'
    },
    images: ['https://images.pexels.com/photos/1123982/pexels-photo-1123982.jpeg?auto=compress&cs=tinysrgb&w=800'],
    description: 'Guide trip today was epic! Clients landed some beautiful cutthroats. Water is a bit murky from recent rains but fish are still active.',
    timestamp: new Date('2024-01-19T14:45:00'),
    likes: 31,
    comments: []
  },
  {
    id: '3',
    userId: '3',
    user: mockUsers[2],
    location: {
      name: 'Yellowstone River',
      lat: 45.6870,
      lng: -110.9382
    },
    species: 'Brown Trout',
    gear: 'Fly Rod, Woolly Bugger',
    conditions: {
      weather: 'Overcast',
      temperature: 65,
      waterClarity: 'clear',
      flowRate: 280
    },
    description: 'First time at this spot and wow! The browns here are massive. Landed a 20-incher on my third cast.',
    timestamp: new Date('2024-01-18T16:20:00'),
    likes: 18,
    comments: [
      {
        id: '2',
        userId: '1',
        user: mockUsers[0],
        content: 'Welcome to the addiction! That spot never disappoints 😄',
        timestamp: new Date('2024-01-18T17:00:00')
      }
    ]
  }
];

export const mockWaterData: WaterData[] = [
  {
    location: 'Colorado River',
    temperature: 68,
    flowRate: 450,
    clarity: 'clear',
    barometricPressure: 30.15,
    lastUpdated: new Date()
  },
  {
    location: 'Snake River',
    temperature: 72,
    flowRate: 320,
    clarity: 'murky',
    barometricPressure: 29.98,
    lastUpdated: new Date()
  },
  {
    location: 'Yellowstone River',
    temperature: 65,
    flowRate: 280,
    clarity: 'clear',
    barometricPressure: 30.22,
    lastUpdated: new Date()
  }
];

export const mockForecasts: FishingForecast[] = [
  {
    location: 'Colorado River',
    date: new Date(Date.now() + 24 * 60 * 60 * 1000),
    score: 8.5,
    conditions: 'Excellent',
    recommendation: 'Prime time fishing! Early morning and evening will be hot.',
    strainPairing: {
      name: 'Sour Diesel',
      reason: 'Energizing sativa to keep you focused during those prime fishing hours ⚡'
    }
  },
  {
    location: 'Snake River',
    date: new Date(Date.now() + 24 * 60 * 60 * 1000),
    score: 6.2,
    conditions: 'Fair',
    recommendation: 'Decent conditions but try deeper water. Fish may be sluggish.',
    strainPairing: {
      name: 'Granddaddy Purple',
      reason: 'Chill indica for those slow bite days when patience is key 🟣'
    }
  },
  {
    location: 'Yellowstone River',
    date: new Date(Date.now() + 24 * 60 * 60 * 1000),
    score: 9.1,
    conditions: 'Outstanding',
    recommendation: 'Fire conditions! Get out there ASAP. All techniques working.',
    strainPairing: {
      name: 'Jack Herer',
      reason: 'Perfect hybrid for an epic day on the water - creative and focused 🎯'
    }
  }
];

export const strainPairings = [
  {
    name: 'Blue Dream',
    reason: 'Perfect for those dreamy mountain vibes while waiting for the perfect cast 🎣'
  },
  {
    name: 'Green Crack',
    reason: 'High energy strain for those active fishing days when you need to stay alert 💚'
  },
  {
    name: 'Sour Diesel',
    reason: 'Energizing sativa to keep you focused during those prime fishing hours ⚡'
  },
  {
    name: 'Granddaddy Purple',
    reason: 'Chill indica for those slow bite days when patience is key 🟣'
  },
  {
    name: 'Jack Herer',
    reason: 'Perfect hybrid for an epic day on the water - creative and focused 🎯'
  },
  {
    name: 'OG Kush',
    reason: 'Classic strain for classic fishing spots - never goes out of style 🌿'
  },
  {
    name: 'White Widow',
    reason: 'Clear-headed high perfect for reading water conditions like a pro 🕷️'
  },
  {
    name: 'Pineapple Express',
    reason: 'Tropical vibes for those sunny lake days when the fish are jumping 🍍'
  }
];