"use client"

import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/', hash: '#home' },
    { name: 'About', href: '/', hash: '#about' },
    { name: 'Services', href: '/', hash: '#services' },
    { name: 'Projects', href: '/', hash: '#projects' },
    { name: 'Testimonials', href: '/', hash: '#testimonials' },
    { name: 'Contact', href: '/contact', hash: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orchid-500 to-orchid-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">O</span>
              </div>
              <span className="text-2xl font-bold text-orchid-900">ApexCraft Construction</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const href = pathname === '/' && link.hash ? link.hash : link.href
              return (
                <Link
                  key={link.name}
                  href={href}
                  className={`text-sm font-medium transition-colors hover:text-orchid-600 ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+917218834640" className={`flex items-center gap-2 text-sm font-medium ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}>
              <Phone className="w-4 h-4" />
              <span>+91 7218834640</span>
            </a>
            <Link href="/contact">
              <Button className="bg-orchid-600 hover:bg-orchid-700 text-white">
                Book Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const href = pathname === '/' && link.hash ? link.hash : link.href
                return (
                  <Link
                    key={link.name}
                    href={href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-700 hover:text-orchid-600 font-medium px-4 py-2"
                  >
                    {link.name}
                  </Link>
                )
              })}
              <div className="px-4 pt-2 border-t border-gray-200">
                <a href="tel:+917218834640" className="flex items-center gap-2 text-gray-700 mb-4">
                  <Phone className="w-4 h-4" />
                  <span>+91 7218834640</span>
                </a>
                <Link href="/contact" className="block" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-orchid-600 hover:bg-orchid-700 text-white">
                    Book Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}