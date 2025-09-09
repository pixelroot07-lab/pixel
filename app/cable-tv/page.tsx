"use client"

import Link from "next/link"
import { ArrowLeft, Tv, Zap, Shield, Users } from "lucide-react"

export default function CableTVPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link
            href="/"
            className="flex items-center text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 transition-colors mr-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Tv className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Cable TV Recharge</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Keep your entertainment going with instant cable TV recharges for all major operators across India.
          </p>
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* About Cable TV */}
          <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Cable TV Services</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Cable television provides access to hundreds of channels including entertainment, news, sports, movies,
              and educational content. Modern cable TV services offer high-definition viewing, interactive features, and
              on-demand content.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              With PixelPay, you can easily recharge your cable TV subscription for all major operators including Tata
              Sky, Dish TV, Videocon D2H, Sun Direct, and many local cable operators.
            </p>
          </section>

          {/* Features */}
          <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Why Choose Cable TV?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Tv className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Wide Channel Selection</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Access to hundreds of channels in multiple languages
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">HD Quality</h3>
                  <p className="text-gray-600 dark:text-gray-300">Crystal clear high-definition viewing experience</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Reliable Service</h3>
                  <p className="text-gray-600 dark:text-gray-300">Consistent signal quality and minimal downtime</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Family Entertainment</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Content suitable for all age groups and preferences
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Supported Operators */}
          <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Supported Cable TV Operators</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Tata Sky",
                "Dish TV",
                "Videocon D2H",
                "Sun Direct",
                "Airtel Digital TV",
                "Den Networks",
                "Hathway",
                "GTPL",
                "Siti Cable",
              ].map((operator) => (
                <div key={operator} className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4 text-center">
                  <p className="font-medium text-gray-900 dark:text-white">{operator}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
