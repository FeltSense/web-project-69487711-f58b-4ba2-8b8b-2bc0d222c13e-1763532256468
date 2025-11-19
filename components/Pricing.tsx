'use client';

import { Check, Zap } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of smart shoppers discovering, rating, and sharing the best products.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-blue-500">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-6 px-8">
              <div className="flex items-center justify-center space-x-2">
                <Zap className="h-6 w-6" />
                <span className="text-sm font-semibold uppercase tracking-wider">Most Popular</span>
              </div>
            </div>

            <div className="p-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Premium Access</h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-6xl font-bold text-gray-900">$29</span>
                  <span className="text-2xl text-gray-600 ml-2">/month</span>
                </div>
                <p className="text-gray-600">Everything you need to become a power shopper</p>
              </div>

              <div className="mb-10">
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Unlimited product ratings & reviews',
                    'Priority social discovery feed',
                    'Early access to trending products',
                    'Download mobile app (iOS & Android)',
                    'Ad-free browsing experience',
                    'Exclusive community badge',
                    'Advanced analytics dashboard',
                    'VIP customer support',
                    'Monthly reward bonuses',
                    'Access to exclusive deals',
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <a
                  href="https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-12 py-5 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-2xl hover:scale-105"
                >
                  Start Your Free Trial
                </a>
                <p className="text-sm text-gray-500 mt-4">No credit card required • Cancel anytime</p>
              </div>

              <div className="mt-10 pt-10 border-t border-gray-200">
                <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Secure Payment</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>30-Day Money Back</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>24/7 Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Looking for Team Plans?</h3>
            <p className="text-xl mb-6 text-blue-100">
              Contact us for custom enterprise solutions and special pricing for teams.
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}