'use client';

import { TrendingUp, Users, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/85 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-2 mb-6">
            <TrendingUp className="h-6 w-6 text-blue-400" />
            <span className="text-blue-300 font-semibold tracking-wide uppercase text-sm">
              #1 Trending Platform
            </span>
          </div>

          <h1 className="text-7xl md:text-8xl font-bold text-white mb-8 leading-tight">
            Discover What's
            <span className="text-blue-400"> Trending</span>
          </h1>

          <p className="text-2xl text-blue-100 mb-12 leading-relaxed max-w-2xl">
            Join thousands of shoppers discovering, rating, and sharing the best products. Your voice shapes what's next.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#pricing"
              className="bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-500 transition-all duration-300 hover:shadow-2xl hover:scale-105 text-center"
            >
              Start Free Trial
            </a>
            <a
              href="#services"
              className="bg-white/10 backdrop-blur-sm text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 border-2 border-white/30 text-center"
            >
              Learn More
            </a>
          </div>

          <div className="flex flex-wrap gap-12">
            <div className="flex items-center space-x-3">
              <Users className="h-8 w-8 text-blue-400" />
              <div>
                <div className="text-3xl font-bold text-white">50K+</div>
                <div className="text-blue-200 text-sm">Active Users</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Star className="h-8 w-8 text-yellow-400" />
              <div>
                <div className="text-3xl font-bold text-white">4.9/5</div>
                <div className="text-blue-200 text-sm">User Rating</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <TrendingUp className="h-8 w-8 text-green-400" />
              <div>
                <div className="text-3xl font-bold text-white">1M+</div>
                <div className="text-blue-200 text-sm">Reviews Posted</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
}