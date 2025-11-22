"use client"

import { Shield, Clock, Users, DollarSign, Award, Zap } from 'lucide-react'

export default function WhyChooseUsSection() {
  const features = [
    {
      icon: Shield,
      title: 'Quality Materials',
      description: 'We use only premium, certified materials that ensure durability and longevity.',
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Committed to delivering projects on schedule without compromising quality.',
    },
    {
      icon: Users,
      title: 'Expert Engineers',
      description: 'Team of experienced professionals with decades of combined expertise.',
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'No hidden costs. Clear, upfront pricing with detailed project estimates.',
    },
    {
      icon: Award,
      title: 'Industry Certified',
      description: 'Fully licensed, insured, and certified with industry-leading standards.',
    },
    {
      icon: Zap,
      title: 'Innovative Solutions',
      description: 'Leveraging latest technology and sustainable building practices.',
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-orchid-900 via-purple-900 to-orchid-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6 border border-white/20">
            Why Choose ORCHID
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Your Trusted Construction{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orchid-300 to-purple-300">
              Partner
            </span>
          </h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            Experience the ORCHID difference with our commitment to excellence, innovation, and customer satisfaction.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-orchid-300/50 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orchid-400 to-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}