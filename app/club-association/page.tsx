"use client"

import Link from "next/link"
import { ArrowLeft, Users, Trophy, Calendar, Heart } from "lucide-react"

export default function ClubAssociationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link
            href="/"
            className="flex items-center text-pink-600 dark:text-pink-400 hover:text-pink-800 dark:hover:text-pink-300 transition-colors mr-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Club & Association Payments</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Pay your club memberships, association fees, and community charges conveniently online.
          </p>
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* About Club & Association */}
          <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Club & Association Services</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Clubs and associations play a vital role in community building, providing recreational facilities, social
              networking opportunities, and various services to their members. These organizations require regular
              membership fees and charges to maintain their facilities and services.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              With PixelPay, you can easily pay membership fees for sports clubs, residential societies, professional
              associations, hobby clubs, and community organizations without the hassle of cash transactions.
            </p>
          </section>

          {/* Types of Organizations */}
          <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Types of Organizations We Support</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Sports Clubs</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Golf clubs, tennis clubs, cricket clubs, fitness centers
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Residential Societies</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Housing societies, apartment complexes, gated communities
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Professional Associations</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Trade associations, professional bodies, business clubs
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Social & Hobby Clubs</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Book clubs, photography clubs, cultural associations
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Payment Types */}
          <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Types of Payments</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <p className="text-gray-600 dark:text-gray-300">Annual membership fees and renewals</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <p className="text-gray-600 dark:text-gray-300">Monthly maintenance charges</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <p className="text-gray-600 dark:text-gray-300">Event participation fees</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <p className="text-gray-600 dark:text-gray-300">Facility usage charges</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <p className="text-gray-600 dark:text-gray-300">Special assessments and development fees</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <p className="text-gray-600 dark:text-gray-300">Guest fees and visitor charges</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
