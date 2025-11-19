'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShoppingBag className={`h-8 w-8 ${
              isScrolled ? 'text-blue-600' : 'text-white'
            }`} />
            <span className={`text-2xl font-bold ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              RetailHub
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className={`transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
              }`}
            >
              Features
            </a>
            <a
              href="#testimonials"
              className={`transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
              }`}
            >
              Reviews
            </a>
            <a
              href="#pricing"
              className={`transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
              }`}
            >
              Pricing
            </a>
            <a
              href="#contact"
              className={`transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
              }`}
            >
              Contact
            </a>
            <a
              href="#pricing"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 hover:shadow-lg"
            >
              Get Started
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-gray-900' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-6 space-y-4">
            <a
              href="#services"
              className={`block ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#testimonials"
              className={`block ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Reviews
            </a>
            <a
              href="#pricing"
              className={`block ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#contact"
              className={`block ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="#pricing"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}