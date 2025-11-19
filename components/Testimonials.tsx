'use client';

import { Star, Quote } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Fashion Enthusiast',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    quote: 'RetailHub has completely changed how I shop online. The community reviews are genuine and helpful. I trust this platform more than any other!',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Tech Reviewer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    quote: 'As someone who reviews products professionally, RetailHub gives me the perfect platform to share my insights with a community that actually cares.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Home Decor Lover',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    quote: 'I love discovering trending products before they blow up everywhere else. The social discovery feature is absolutely genius!',
    rating: 5,
  },
  {
    name: 'David Thompson',
    role: 'Fitness Coach',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    quote: 'Finding quality fitness products used to take hours of research. Now I just check RetailHub and see what my community recommends. Simple!',
    rating: 5,
  },
  {
    name: 'Jessica Park',
    role: 'Beauty Blogger',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80',
    quote: 'The reward system for quality reviews is incredible. I am getting paid to do what I already love - sharing my honest opinions!',
    rating: 5,
  },
  {
    name: 'Alex Kumar',
    role: 'Gadget Expert',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
    quote: 'Best shopping community platform hands down. Real people, real reviews, real impact. This is the future of retail.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Loved by Thousands
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See what our community members are saying about their experience with RetailHub.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-white p-12 rounded-3xl shadow-xl max-w-4xl mx-auto">
                      <Quote className="h-12 w-12 text-blue-500 mb-6" />
                      <div className="flex mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-6 w-6 text-yellow-400 fill-yellow-400"
                          />
                        ))}
                      </div>
                      <p className="text-2xl text-gray-700 mb-8 leading-relaxed italic">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full mr-4 object-cover"
                        />
                        <div>
                          <div className="font-bold text-xl text-gray-900">
                            {testimonial.name}
                          </div>
                          <div className="text-gray-600">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-12 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'bg-blue-600 w-12'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">1M+</div>
              <div className="text-gray-600">Reviews Posted</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}