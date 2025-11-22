"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (234) 567-890',
      link: 'tel:+1234567890',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@orchid.construction',
      link: 'mailto:info@orchid.construction',
    },
    {
      icon: MapPin,
      title: 'Office Address',
      content: '123 Business Park, Suite 500, New York, NY 10001',
      link: '#',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon - Sat: 8:00 AM - 6:00 PM',
      link: '#',
    },
  ]

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-orchid-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-orchid-100 text-orchid-700 rounded-full text-sm font-semibold mb-6">
            Get In Touch
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Start Your Project{' '}
            <span className="text-orchid-600">Today</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Ready to bring your construction dreams to life? Contact us for a free consultation and project estimate.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 md:p-10 rounded-3xl border-orchid-200 shadow-xl bg-white">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Book a Consultation</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <Input
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12 rounded-xl border-orchid-200 focus:border-orchid-500"
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    placeholder="+1 (234) 567-890"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12 rounded-xl border-orchid-200 focus:border-orchid-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12 rounded-xl border-orchid-200 focus:border-orchid-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Type *
                </label>
                <Select
                  value={formData.projectType}
                  onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                >
                  <SelectTrigger className="h-12 rounded-xl border-orchid-200 focus:border-orchid-500">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residential">Residential Construction</SelectItem>
                    <SelectItem value="commercial">Commercial Projects</SelectItem>
                    <SelectItem value="interior">Interior Design</SelectItem>
                    <SelectItem value="renovation">Renovation & Remodeling</SelectItem>
                    <SelectItem value="planning">Project Planning</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Details
                </label>
                <Textarea
                  placeholder="Tell us about your project requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-32 rounded-xl border-orchid-200 focus:border-orchid-500"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-orchid-600 hover:bg-orchid-700 text-white rounded-xl text-lg font-semibold"
              >
                Submit Request
              </Button>
            </form>
          </Card>

          {/* Contact Info & Map */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="p-6 rounded-2xl border-orchid-200 hover:border-orchid-400 hover:shadow-lg transition-all duration-300 bg-white"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orchid-500 to-purple-600 flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-sm font-semibold text-gray-600 mb-1">{info.title}</h4>
                  <a
                    href={info.link}
                    className="text-gray-900 font-medium hover:text-orchid-600 transition-colors"
                  >
                    {info.content}
                  </a>
                </Card>
              ))}
            </div>

            {/* Embedded Map */}
            <Card className="rounded-3xl overflow-hidden border-orchid-200 shadow-xl h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
