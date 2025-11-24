import Navigation from '@/components/Navigation'
import ContactSection from '@/components/ContactSection'

export const metadata = {
  title: 'Contact Us - ORCHID Construction & Real Estate',
  description: 'Get in touch with ORCHID Construction for your construction and real estate needs. Book a free consultation today.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <ContactSection />
      </div>
    </div>
  )
}

