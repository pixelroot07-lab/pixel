"use client"

import Link from "next/link"
import { ArrowLeft, GraduationCap, BookOpen, Users, Award } from "lucide-react"

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link
            href="/"
            className="flex items-center text-violet-600 dark:text-violet-400 hover:text-violet-800 dark:hover:text-violet-300 transition-colors mr-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <GraduationCap className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Education Fee Payments</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Pay school fees, college tuition, course fees, and educational expenses securely online.
          </p>
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* About Education Payments */}
          <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Educational Fee Management</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Education is the foundation of personal and societal growth. Managing educational expenses efficiently is
              crucial for students and parents. Our platform simplifies the payment process for various educational
              institutions and learning programs.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              From school fees to professional course payments, we support a wide range of educational institutions
              including schools, colleges, universities, coaching centers, and online learning platforms.
            </p>
          </section>

          {/* Types of Educational Institutions */}
          <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Educational Institutions We Support
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Schools & Colleges</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Primary schools, high schools, colleges, universities
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Coaching Centers</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Competitive exam coaching, skill development centers
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Professional Courses</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Technical courses, certification programs, workshops
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Online Learning</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    E-learning platforms, online courses, digital education
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Types of Educational Payments */}
          <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Types of Educational Payments</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                <p className="text-gray-600 dark:text-gray-300">Tuition fees and semester charges</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                <p className="text-gray-600 dark:text-gray-300">Admission and registration fees</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                <p className="text-gray-600 dark:text-gray-300">Examination and certification fees</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                <p className="text-gray-600 dark:text-gray-300">Library and laboratory charges</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                <p className="text-gray-600 dark:text-gray-300">Hostel and accommodation fees</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                <p className="text-gray-600 dark:text-gray-300">Course materials and book charges</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                <p className="text-gray-600 dark:text-gray-300">Activity and sports fees</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
