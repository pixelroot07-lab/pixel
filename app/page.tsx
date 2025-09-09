"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AnimatedCounter } from "@/components/animated-counter"
import { ThreeHeroAnimation } from "@/components/three-hero-animation"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Home() {
  const [user, setUser] = useState<{name: string, email: string} | null>(null)

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('user')
    setUser(null)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Header */}
      <header className="relative z-10 px-4 py-4 md:px-8 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 dark:from-slate-800 dark:via-blue-900 dark:to-indigo-900">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 animate-fade-in">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 dark:from-blue-500 dark:to-indigo-600 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-all duration-300">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <div>
              <span className="font-bold text-xl text-white">PIXELROOT</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: "Home", href: "#hero" },
              { name: "Services", href: "#services" },
              { name: "About", href: "#about-company" },
              { name: "Company Policy", href: "#terms-conditions" },
              { name: "FAQs", href: "#company-faqs" },
              { name: "Contact", href: "#contact-us" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.querySelector(item.href)
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                }}
                className="relative group text-white hover:text-cyan-200 dark:hover:text-blue-200 transition-colors duration-300 font-medium cursor-pointer"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-200 dark:bg-blue-200 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-white font-medium">Welcome, {user.name}</span>
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-cyan-200 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link href="/signup">
                  <Button
                    variant="outline"
                    className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-cyan-200 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                    suppressHydrationWarning
                  >
                    Sign Up
                  </Button>
                </Link>
                <Link href="/login">
                  <Button className="bg-gradient-to-r from-cyan-400 to-blue-500 dark:from-blue-500 dark:to-indigo-600 text-white hover:from-cyan-500 hover:to-blue-600 dark:hover:from-blue-600 dark:hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" suppressHydrationWarning>
                    Login
                  </Button>
                </Link>
              </>
            )}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 dark:from-slate-800 dark:via-blue-900 dark:to-indigo-900 px-4 py-16 md:px-8 md:py-24 overflow-hidden"
      >
        <ThreeHeroAnimation />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                <span className="text-yellow-300">
                  Simplify
                </span>
                <br />
                <span className="animate-fade-in-up delay-200">your digital</span>
                <br />
                <span className="text-green-400 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent animate-pulse">
                  payments
                </span>
              </h1>
              <p className="text-lg mb-8 text-purple-100 animate-fade-in-up delay-300 hover:text-white transition-colors duration-300">
                Experience lightning-fast recharges, seamless bill payments, and secure transactions - all in one
                powerful platform. Join millions who trust PixelPay for their everyday financial needs.
              </p>
              <div className="flex space-x-4 animate-fade-in-up delay-500">
                <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:rotate-1" suppressHydrationWarning>
                  Start Paying Smart
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 bg-transparent backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:-rotate-1"
                  suppressHydrationWarning
                >
                  Explore Features
                </Button>
              </div>
              <div className="mt-8 flex items-center space-x-6 animate-fade-in-up delay-700">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                    <span className="text-green-400 text-sm">✓</span>
                  </div>
                  <span className="text-sm text-purple-100">Instant Payments</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <span className="text-blue-400 text-sm">🔒</span>
                  </div>
                  <span className="text-sm text-purple-100">Bank-Grade Security</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center">
                    <span className="text-yellow-400 text-sm">⚡</span>
                  </div>
                  <span className="text-sm text-purple-100">24/7 Available</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center animate-fade-in-right">
              <div className="relative">
                <img
                  src="/image-removebg-preview (3).png"
                  alt="PixelPay Mobile App"
                  className="w-96 md:w-[500px] h-auto relative z-10 hover:scale-105 transition-transform duration-500 animate-float drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Operators */}
      <section className="py-16 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 animate-fade-in">Supported Operators</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-12 animate-fade-in delay-200">
            Recharge and pay many network providers
          </p>

          <div className="flex justify-center items-center space-x-8 flex-wrap gap-4">
            {[
              { name: "Jio", color: "bg-blue-600", delay: "delay-100" },
              { name: "Air", color: "bg-red-600", delay: "delay-200" },
              { name: "Vi", color: "bg-purple-600", delay: "delay-300" },
              { name: "BSNL", color: "bg-gray-800", delay: "delay-400" },
              { name: "Idea", color: "bg-pink-600", delay: "delay-500" },
            ].map((operator) => (
              <div
                key={operator.name}
                className={`w-16 h-16 ${operator.color} rounded-full flex items-center justify-center animate-fade-in-up ${operator.delay} hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg hover:shadow-xl`}
              >
                <span className="text-white font-bold">{operator.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 animate-fade-in">
              <span className="text-pink-500">Recharges</span> & <span className="text-blue-500">Bill Payments</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 animate-fade-in delay-200">
              Recharge and pay every bill in one place
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {[
              {
                name: "Mobile Recharge",
                icon: "📱",
                color: "bg-blue-100 dark:bg-blue-900/30",
                href: "/mobile-recharge",
              },
              { name: "DTH", icon: "📺", color: "bg-red-100 dark:bg-red-900/30", href: "/dth" },
              { name: "Electricity", icon: "💡", color: "bg-yellow-100 dark:bg-yellow-900/30", href: "/electricity" },
              {
                name: "Loan Repayment",
                icon: "💰",
                color: "bg-green-100 dark:bg-green-900/30",
                href: "/loan-repayment",
              },
              { name: "Piped Gas", icon: "🔥", color: "bg-orange-100 dark:bg-orange-900/30", href: "/piped-gas" },
              {
                name: "Postpaid Bill",
                icon: "📄",
                color: "bg-purple-100 dark:bg-purple-900/30",
                href: "/postpaid-bill",
              },
              {
                name: "Fastag Recharge",
                icon: "🚗",
                color: "bg-cyan-100 dark:bg-cyan-900/30",
                href: "/fastag-recharge",
              },
              { name: "Insurance", icon: "🛡️", color: "bg-pink-100 dark:bg-pink-900/30", href: "/insurance" },
              { name: "Cable TV", icon: "📺", color: "bg-red-100 dark:bg-red-900/30", href: "/cable-tv" },
              { name: "Broadband", icon: "🌐", color: "bg-blue-100 dark:bg-blue-900/30", href: "/broadband" },
              { name: "Water", icon: "💧", color: "bg-cyan-100 dark:bg-cyan-900/30", href: "/water" },
              { name: "Credit Card", icon: "💳", color: "bg-green-100 dark:bg-green-900/30", href: "/credit-card" },
              {
                name: "Municipal Tax",
                icon: "🏛️",
                color: "bg-purple-100 dark:bg-purple-900/30",
                href: "/municipal-tax",
              },
              {
                name: "Club & Association",
                icon: "⚽",
                color: "bg-green-100 dark:bg-green-900/30",
                href: "/club-association",
              },
              { name: "Education", icon: "🎓", color: "bg-blue-100 dark:bg-blue-900/30", href: "/education" },
              { name: "Hospital", icon: "🏥", color: "bg-red-100 dark:bg-red-900/30", href: "/hospital" },
            ].map((service, index) => (
              <Link key={index} href={service.href}>
                <Card
                  className={`p-4 text-center hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105 animate-fade-in-up bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div
                    className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mx-auto mb-3 transition-transform duration-300 hover:rotate-12`}
                  >
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{service.name}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section id="about-company" className="py-16 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                About <span className="text-blue-500">Company</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                PIXELPAY TECHNOLOGIES PRIVATE LIMITED is a Private incorporated Company in India. We provide the
                facility of our own technology that makes our customers happy. We provide all types of recharge and bill
                payment services. We provide our customers with the best service and the best offers for using our
                App/API for multiple platforms, all recharge and bill payment services.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our aim is to make recharge systems accessible to everyone. We offer standard recharge for all
                mobile/postpaid operator according to the client transaction, data, WhatsApp, SMS, Recharge, Bills,
                Payment, DTH and all other services. We provide our customers with the best service and the best offers
                for using our App/API for multiple.
              </p>
            </div>
            <div className="flex justify-center animate-fade-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-3xl blur-2xl animate-pulse"></div>
                <img
                  src="/image-1.png"
                  alt="Company Dashboard Interface"
                  className="w-96 md:w-[500px] h-auto relative z-10 hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms & Conditions Section */}
      <section id="terms-conditions" className="py-16 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img src="/image-2.png" alt="Terms and Conditions" className="w-96 md:w-[500px] h-auto" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Terms <span className="text-red-500">&</span>
                <br />
                <span className="text-blue-500">Conditions</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                By using Financial Services, you are agreeing to be bound by the following terms and conditions ("Terms
                of Service").
              </p>
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Eligibility</h3>
              <p className="text-gray-600 dark:text-gray-300">
                You must be at least 18 years old to use our services. By using our services, you represent and warrant
                that you meet this age requirement and have the legal capacity to enter into agreements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company FAQs */}
      <section id="company-faqs" className="py-16 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-3xl font-bold mb-6 text-red-500">Company FAQs</h2>
              <div className="mb-8">
                <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">
                  What is PIXELPAY TECHNOLOGIES PRIVATE LIMITED ?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We are extremely driven professionals working with a vision to deliver our best to enrich the customer
                  experience. In fact, PIXELPAY TECHNOLOGIES PRIVATE LIMITED works as multi-utility and 24*7 recharge
                  platform that leads recharge and bill payment service provider in India. We have been in the industry
                  for many years now and have built a robust platform that enables easy and secure payment options to be
                  customized for our free recharge which includes all types of mobile and DTH recharge.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="text-center animate-fade-in-up delay-100">
                  <div className="text-3xl font-bold text-blue-500 mb-2">
                    <AnimatedCounter end={1057} />
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">Happy Customers</div>
                </div>
                <div className="text-center animate-fade-in-up delay-200">
                  <div className="text-3xl font-bold text-green-500 mb-2">
                    <AnimatedCounter end={28} />
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">Total Services</div>
                </div>
                <div className="text-center animate-fade-in-up delay-300">
                  <div className="text-3xl font-bold text-purple-500 mb-2">
                    <AnimatedCounter end={869} />
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">Service Providers</div>
                </div>
                <div className="text-center animate-fade-in-up delay-400">
                  <div className="text-3xl font-bold text-orange-500 mb-2">
                    <AnimatedCounter end={901} />
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">Our Clients</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center animate-fade-in-right">
              <img
                src="/image-3.png"
                alt="Company Statistics Visualization"
                className="w-96 h-auto hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Feedback */}
      <section id="customers-feedback" className="py-16 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold text-red-500 mb-12 animate-fade-in">Customers Feedback</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                rating: 5,
                comment: "Excellent service! Quick recharges and bill payments. Very reliable platform.",
                location: "Mumbai",
              },
              {
                name: "Priya Sharma",
                rating: 5,
                comment: "Love the user interface. All services in one place. Highly recommended!",
                location: "Delhi",
              },
              {
                name: "Amit Singh",
                rating: 4,
                comment: "Great app for all utility payments. Customer support is very responsive.",
                location: "Bangalore",
              },
            ].map((feedback, index) => (
              <Card
                key={index}
                className={`p-6 bg-gray-50 dark:bg-slate-800 border-gray-200 dark:border-gray-700 animate-fade-in-up hover:shadow-lg transition-all duration-300`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-xl ${i < feedback.rating ? "text-yellow-400" : "text-gray-300"}`}>
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 italic">"{feedback.comment}"</p>
                <div className="text-center">
                  <p className="font-semibold text-gray-900 dark:text-white">{feedback.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{feedback.location}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recharge Operators Section */}
      <section id="recharge-operators" className="py-16 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">
              Recharge Operators
            </h2>
            <p className="text-gray-600 dark:text-gray-300 animate-fade-in delay-200">
              We support all major network operators across India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                name: "Jio", 
                color: "from-blue-500 to-blue-600", 
                plans: "Starting ₹10", 
                offers: "Extra Data",
                cardBg: "bg-gradient-to-br from-cyan-50 to-blue-100 dark:bg-gradient-to-br dark:from-cyan-900/30 dark:to-blue-900/30",
                borderColor: "border-cyan-200 dark:border-cyan-700 hover:border-cyan-400 dark:hover:border-cyan-500"
              },
              { 
                name: "Airtel", 
                color: "from-red-500 to-red-600", 
                plans: "Starting ₹19", 
                offers: "Free Calls",
                cardBg: "bg-gradient-to-br from-rose-50 to-pink-100 dark:bg-gradient-to-br dark:from-rose-900/30 dark:to-pink-900/30",
                borderColor: "border-rose-200 dark:border-rose-700 hover:border-rose-400 dark:hover:border-rose-500"
              },
              {
                name: "Vi (Vodafone Idea)",
                color: "from-purple-500 to-purple-600",
                plans: "Starting ₹15",
                offers: "SMS Pack",
                cardBg: "bg-gradient-to-br from-violet-50 to-purple-100 dark:bg-gradient-to-br dark:from-violet-900/30 dark:to-purple-900/30",
                borderColor: "border-violet-200 dark:border-violet-700 hover:border-violet-400 dark:hover:border-violet-500"
              },
              { 
                name: "BSNL", 
                color: "from-gray-600 to-gray-700", 
                plans: "Starting ₹12", 
                offers: "Long Validity",
                cardBg: "bg-gradient-to-br from-slate-50 to-gray-100 dark:bg-gradient-to-br dark:from-slate-900/30 dark:to-gray-900/30",
                borderColor: "border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500"
              },
            ].map((operator, index) => (
              <Card
                key={index}
                className={`p-8 ${operator.cardBg} border-2 ${operator.borderColor} hover:shadow-2xl transition-all duration-500 animate-fade-in-up hover:scale-110 hover:rotate-2 group cursor-pointer transform-gpu backdrop-blur-sm`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${operator.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-xl group-hover:shadow-2xl`}
                >
                  <span className="text-white font-bold text-2xl">{operator.name.charAt(0)}</span>
                </div>
                <h3 className="font-bold text-xl text-center mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-300">
                  {operator.name}
                </h3>
                <p className="text-center text-gray-600 dark:text-gray-300 mb-3 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-all duration-300 font-medium">
                  {operator.plans}
                </p>
                <p className="text-center text-sm text-green-600 dark:text-green-400 group-hover:text-green-700 dark:group-hover:text-green-300 transition-all duration-300 font-semibold bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full">
                  {operator.offers}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section
        id="contact-us"
        className="py-16 bg-gradient-to-br from-blue-200 via-indigo-300 to-purple-400 dark:bg-gradient-to-br dark:from-slate-700 dark:via-blue-800 dark:to-indigo-800 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">Contact Us</h2>
            <p className="text-gray-600 dark:text-gray-300 animate-fade-in delay-200">
              Get in touch with us for any queries or support
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in-left">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-400">📧</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Email</p>
                    <p className="text-gray-600 dark:text-gray-300">support@pixelpay.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <span className="text-green-600 dark:text-green-400">📞</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Phone</p>
                    <p className="text-gray-600 dark:text-gray-300">+91 9876543210</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 dark:text-purple-400">📍</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Address</p>
                    <p className="text-gray-600 dark:text-gray-300">Shop 113, 2nd FL, Sitaram, Nagar, Guntur- 522001,<br /> Andhra Pradesh</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-right">
              <Card className="p-6 bg-gray-50 dark:bg-slate-800 border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Send Message</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      suppressHydrationWarning
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      suppressHydrationWarning
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 hover:scale-105" suppressHydrationWarning>
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Footer Section */}
      <footer className="bg-gray-900 dark:bg-slate-950 text-white py-12 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="animate-fade-in-up">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <div>
                  <span className="font-bold text-xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    PIXELROOT
                  </span>
                  <div className="text-cyan-400 text-sm font-medium">INNOVATIONS PRIVATE LIMITED</div>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted partner for all utility payments and recharges. Fast, secure, and reliable.
              </p>
            </div>

            <div className="animate-fade-in-up delay-100">
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#hero" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about-company" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#terms-conditions" className="text-gray-400 hover:text-white transition-colors">
                    Company Policy
                  </a>
                </li>
                <li>
                  <a href="#company-faqs" className="text-gray-400 hover:text-white transition-colors">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#contact-us" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="animate-fade-in-up delay-200">
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/mobile-recharge" className="text-gray-400 hover:text-white transition-colors">
                    Mobile Recharge
                  </Link>
                </li>
                <li>
                  <Link href="/electricity" className="text-gray-400 hover:text-white transition-colors">
                    Bill Payments
                  </Link>
                </li>
                <li>
                  <Link href="/dth" className="text-gray-400 hover:text-white transition-colors">
                    DTH Recharge
                  </Link>
                </li>
                <li>
                  <Link href="/electricity" className="text-gray-400 hover:text-white transition-colors">
                    Electricity Bills
                  </Link>
                </li>
              </ul>
            </div>

            <div className="animate-fade-in-up delay-300">
              <h3 className="font-bold text-lg mb-4">Contact Info</h3>
              <div className="space-y-2">
                <p className="text-gray-400">📍 Shop 113, 2nd FL, Sitaram, Nagar, Guntur- 522001, Andhra Pradesh</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2025 PIXELROOT INNOVATIONS  PRIVATE  LIMITED. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Theme Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-white dark:bg-slate-800 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-slate-700">
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}
