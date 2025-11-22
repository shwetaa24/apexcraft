"use client"

import { Building2, Briefcase, Palette, Wrench, ClipboardList } from 'lucide-react'
import { Card } from '@/components/ui/card'

export default function ServicesSection() {
  const services = [
    {
      icon: Building2,
      title: 'Residential Construction',
      description: 'Custom homes, villas, apartments, and residential complexes built with precision and care.',
      gradient: 'from-orchid-500 to-purple-600',
    },
    {
      icon: Briefcase,
      title: 'Commercial Projects',
      description: 'Office buildings, retail spaces, and commercial complexes designed for modern business needs.',
      gradient: 'from-purple-500 to-orchid-600',
    },
    {
      icon: Palette,
      title: 'Interior & Architectural Design',
      description: 'Innovative design solutions that blend aesthetics with functionality and sustainability.',
      gradient: 'from-orchid-600 to-purple-500',
    },
    {
      icon: Wrench,
      title: 'Renovation & Remodeling',
      description: 'Transform existing spaces with expert renovation and modernization services.',
      gradient: 'from-purple-600 to-orchid-500',
    },
    {
      icon: ClipboardList,
      title: 'Project Planning & Management',
      description: 'End-to-end project management ensuring timely delivery and budget compliance.',
      gradient: 'from-orchid-500 to-purple-600',
    },
  ]

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-orchid-100 text-orchid-700 rounded-full text-sm font-semibold mb-6">
            Our Services
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Construction{' '}
            <span className="text-orchid-600">Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            From concept to completion, we offer a full spectrum of construction and real estate services 
            tailored to your unique needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative p-8 bg-white border-gray-200 hover:border-orchid-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 rounded-2xl overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              {/* Icon */}
              <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orchid-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              {/* Hover Arrow */}
              <div className="mt-6 flex items-center text-orchid-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}