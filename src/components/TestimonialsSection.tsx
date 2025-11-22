"use client"

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Homeowner',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      text: 'ORCHID transformed our vision into reality. Their attention to detail and commitment to quality is unmatched. Our dream home was completed on time and exceeded all expectations.',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Business Owner',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      text: 'The team at ORCHID handled our commercial project with utmost professionalism. Their innovative approach and transparent communication made the entire process seamless.',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Interior Designer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      text: 'Working with ORCHID was a pleasure. They understood our design requirements perfectly and delivered exceptional results. Their craftsmanship is truly world-class.',
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Real Estate Developer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      text: 'ORCHID has been our trusted partner for multiple projects. Their expertise in construction and project management is outstanding. Highly recommended!',
    },
  ]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orchid-100 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-orchid-100 text-orchid-700 rounded-full text-sm font-semibold mb-6">
            Testimonials
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients{' '}
            <span className="text-orchid-600">Say</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with ORCHID.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-5xl mx-auto">
          <Card className="relative p-8 md:p-12 rounded-3xl border-orchid-200 shadow-xl bg-gradient-to-br from-white to-orchid-50/30">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 w-16 h-16 bg-orchid-100 rounded-2xl flex items-center justify-center opacity-50">
              <Quote className="w-8 h-8 text-orchid-600" />
            </div>

            {/* Testimonial Content */}
            <div className="relative">
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                "{testimonials[activeIndex].text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-16 h-16 rounded-full object-cover ring-4 ring-orchid-100"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-gray-600">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-3 mt-8 md:absolute md:bottom-12 md:right-12 md:mt-0">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border-orchid-300 hover:bg-orchid-600 hover:text-white hover:border-orchid-600"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border-orchid-300 hover:bg-orchid-600 hover:text-white hover:border-orchid-600"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </Card>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-8 bg-orchid-600'
                    : 'bg-gray-300 hover:bg-orchid-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
