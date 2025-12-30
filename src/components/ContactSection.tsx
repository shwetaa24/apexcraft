"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Phone, Mail, MapPin, Clock, CheckCircle2, AlertCircle } from 'lucide-react'

const initialFormState = {
  name: '',
  phone: '',
  email: '',
  projectType: '',
  message: '',
}

export default function ContactSection() {
  const [formData, setFormData] = useState(initialFormState)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('idle')
    setErrorMessage('')
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const { error } = await response.json()
        throw new Error(error || 'Failed to submit request')
      }

      setStatus('success')
      setFormData(initialFormState)
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [

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
                    placeholder="+91 123445678"
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
                    placeholder="abc@gmail.com"
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

              <div className="space-y-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-orchid-600 hover:bg-orchid-700 text-white rounded-xl text-lg font-semibold disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </Button>

                <div aria-live="polite" className="min-h-12">
                  {status === 'success' && (
                    <Alert className="border-green-200 bg-green-50 text-green-800">
                      <CheckCircle2 className="text-green-600" />
                      <AlertDescription>Your consultation request has been submitted successfully. We will contact you shortly.</AlertDescription>
                    </Alert>
                  )}

                  {status === 'error' && (
                    <Alert variant="destructive" className="border-red-200 bg-red-50 text-red-800">
                      <AlertCircle className="text-red-600" />
                      <AlertDescription>{errorMessage}</AlertDescription>
                    </Alert>
                  )}
                </div>
              </div>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609846077!2d74.0433!3d16.7050!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0c0c0c0c0c0c1%3A0x3bc0c0c0c0c0c0c1!2sKolhapur%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location - Kolhapur, Maharashtra, India"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
