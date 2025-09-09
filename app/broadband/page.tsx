"use client"

import Link from "next/link"
import { ArrowLeft, Wifi, Zap, Globe, Shield } from "lucide-react"

export default function BroadbandPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link
            href="/"
            className="flex items-center text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 transition-colors mr-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Wifi className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Broadband Bill Payment</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Pay your broadband internet bills instantly and stay connected with high-speed internet services.
          </p>
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* About Broadband */}
          <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Broadband Internet Services</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Broadband internet provides high-speed internet connectivity for homes and businesses. It enables fast
              downloading, streaming, video calling, online gaming, and seamless browsing experience across multiple
              devices simultaneously.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Modern broadband services offer various technologies including Fiber-to-the-Home (FTTH), DSL, and cable
              internet with speeds ranging from basic plans to ultra-high-speed gigabit connections.
            </p>
          </section>

          {/* Benefits */}
          <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Benefits of High-Speed Broadband</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">High-Speed Connectivity</h3>
                  <p className="text-gray-600 dark:text-gray-300">Lightning-fast internet speeds for all your needs</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Unlimited Usage</h3>
                  <p className="text-gray-600 dark:text-gray-300">No data caps or usage restrictions</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Reliable Connection</h3>
                  <p className="text-gray-600 dark:text-gray-300">Stable and consistent internet connectivity</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Wifi className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Multiple Device Support</h3>
                  <p className="text-gray-600 dark:text-gray-300">Connect all your devices simultaneously</p>
                </div>
              </div>
            </div>
          </section>

          {/* Supported Providers */}
          <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Supported Broadband Providers</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Jio Fiber",
                "Airtel Xstream",
                "BSNL Broadband",
                "ACT Fibernet",
                "Hathway",
                "Tikona",
                "YOU Broadband",
                "Spectranet",
                "Excitel",
              ].map((provider) => (
                <div key={provider} className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4 text-center">
                  <p className="font-medium text-gray-900 dark:text-white">{provider}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
