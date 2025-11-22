"use client"

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, ArrowUpRight } from 'lucide-react'

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = ['all', 'residential', 'commercial', 'interior', 'renovation']

  const projects = [
    {
      id: 1,
      title: 'Luxury Villa Estate',
      location: 'Beverly Hills, CA',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop',
      description: 'Modern luxury villa with contemporary design',
    },
    {
      id: 2,
      title: 'Corporate Office Tower',
      location: 'New York, NY',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
      description: '40-story commercial complex',
    },
    {
      id: 3,
      title: 'Penthouse Interior',
      location: 'Miami, FL',
      category: 'interior',
      image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=800&auto=format&fit=crop',
      description: 'Elegant penthouse interior design',
    },
    {
      id: 4,
      title: 'Shopping Mall Complex',
      location: 'Los Angeles, CA',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1555529669-2269763671c0?q=80&w=800&auto=format&fit=crop',
      description: 'Modern retail and entertainment center',
    },
    {
      id: 5,
      title: 'Heritage Home Restoration',
      location: 'Boston, MA',
      category: 'renovation',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop',
      description: 'Historic property renovation and modernization',
    },
    {
      id: 6,
      title: 'Apartment Complex',
      location: 'Seattle, WA',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop',
      description: '200-unit luxury apartment development',
    },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-orchid-50/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-4 py-2 bg-orchid-100 text-orchid-700 rounded-full text-sm font-semibold mb-6">
            Our Portfolio
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="text-orchid-600">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Explore our portfolio of successfully delivered projects across residential, commercial, and industrial sectors.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? 'default' : 'outline'}
              onClick={() => setActiveFilter(filter)}
              className={`capitalize rounded-full px-6 ${
                activeFilter === filter
                  ? 'bg-orchid-600 hover:bg-orchid-700 text-white'
                  : 'border-orchid-300 text-orchid-700 hover:bg-orchid-50'
              }`}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group relative overflow-hidden rounded-2xl border-gray-200 hover:border-orchid-300 transition-all duration-300 hover:shadow-2xl cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <div className="flex items-center text-gray-200 text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {project.location}
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-orchid-600 transition-colors">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600">{project.description}</p>
                <div className="mt-4 inline-block px-3 py-1 bg-orchid-100 text-orchid-700 rounded-full text-xs font-semibold capitalize">
                  {project.category}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-2 border-orchid-600 text-orchid-700 hover:bg-orchid-600 hover:text-white px-8 py-6 rounded-full"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
