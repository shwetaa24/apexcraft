"use client"

import { Button } from '@/components/ui/button'
import { ArrowRight, Play } from 'lucide-react'

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center parallax"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-orchid-900/90 via-orchid-800/80 to-purple-900/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 fade-in">
            <span className="w-2 h-2 bg-orchid-400 rounded-full animate-pulse" />
            <span className="text-white text-sm font-medium">Premium Construction & Real Estate</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight fade-in" style={{ animationDelay: '0.1s' }}>
            Building Dreams<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orchid-300 to-purple-300">
              With Precision
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed fade-in" style={{ animationDelay: '0.2s' }}>
            Trusted construction partner delivering innovative architecture, quality engineering, 
            and long-lasting infrastructure for residential and commercial projects.
          </p>
         

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 fade-in" style={{ animationDelay: '0.4s' }}>
            {[
              { number: '25+', label: 'Years Experience' },
              { number: '200+', label: 'Projects Completed' },
              { number: '500+', label: 'Happy Clients' },
              { number: '50+', label: 'Active Sites' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}