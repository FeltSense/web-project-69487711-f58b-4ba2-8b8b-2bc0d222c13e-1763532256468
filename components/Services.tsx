'use client';

import { Star, Compass, TrendingUp, Download, Users, Award } from 'lucide-react';

const features = [
  {
    icon: Star,
    title: 'Rate & Review',
    description: 'Share your honest opinions and help others make informed decisions. Your reviews shape the marketplace.',
    color: 'bg-yellow-500',
  },
  {
    icon: Compass,
    title: 'Social Discovery',
    description: 'Follow friends and influencers to discover products they love. Build your personal shopping community.',
    color: 'bg-blue-500',
  },
  {
    icon: TrendingUp,
    title: 'Trending Content',
    description: 'Stay ahead with real-time trending products and reviews. Never miss what everyone is talking about.',
    color: 'bg-green-500',
  },
  {
    icon: Download,
    title: 'Mobile App',
    description: 'Shop on the go with our powerful mobile app. Available on iOS and Android for seamless experiences.',
    color: 'bg-purple-500',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Join a vibrant community of shoppers. Engage in discussions, ask questions, and share insights.',
    color: 'bg-pink-500',
  },
  {
    icon: Award,
    title: 'Earn Rewards',
    description: 'Get rewarded for quality reviews and contributions. Unlock exclusive perks and early access to deals.',
    color: 'bg-orange-500',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Powerful features designed to transform how you discover, share, and shop for products you love.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}