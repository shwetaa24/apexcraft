"use client"

import { Award, Users, Target, TrendingUp } from 'lucide-react'
import { Card } from '@/components/ui/card'

export default function AboutSection() {
  const stats = [
    { icon: Award, value: '15+', label: 'Years of Excellence', color: 'text-orchid-600' },
    { icon: Users, value: '200+', label: 'Completed Projects', color: 'text-purple-600' },
    { icon: Target, value: '500+', label: 'Happy Clients', color: 'text-orchid-600' },
    { icon: TrendingUp, value: '50+', label: 'Active Construction Sites', color: 'text-purple-600' },
  ]

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-orchid-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block px-4 py-2 bg-orchid-100 text-orchid-700 rounded-full text-sm font-semibold mb-6">
              Who We Are
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Building Excellence Since{' '}
              <span className="text-orchid-600">1999</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              ApexCraft Construction is a premier construction and real estate development company committed to delivering 
              world-class infrastructure and architectural excellence. With over two decades of experience, 
              we have established ourselves as a trusted partner for residential, commercial, and industrial projects.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our mission is to transform visions into reality through innovative design, quality craftsmanship, 
              and sustainable building practices. We believe in creating spaces that inspire, endure, and add 
              value to communities.
            </p>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop"
                  alt="Construction site"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop"
                  alt="Architecture"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Stats */}
          <div className="grid sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="p-8 bg-white border-orchid-100 hover:border-orchid-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 rounded-2xl"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-orchid-100 to-purple-100 flex items-center justify-center mb-4`}>
                  <stat.icon className={`w-7 h-7 ${stat.color}`} />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}