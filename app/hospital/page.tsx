"use client"

import Link from "next/link"
import { ArrowLeft, Heart, Stethoscope, Shield, Clock } from "lucide-react"

export default function HospitalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link
            href="/"
            className="flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 transition-colors mr-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Hospital Bill Payments</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Pay your medical bills, hospital charges, and healthcare expenses securely and conveniently.
          </p>
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* About Hospital Payments */}
          <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Healthcare Payment Solutions</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Healthcare expenses can be significant and often require immediate attention. Our platform provides a
              secure and convenient way to pay hospital bills, medical charges, and healthcare-related expenses without
              the stress of managing cash or checks.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We support payments for various healthcare providers including hospitals, clinics, diagnostic centers,
              pharmacies, and specialized medical facilities across the country.
            </p>
          </section>

          {/* Types of Healthcare Providers */}
          <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Healthcare Providers We Support</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Hospitals</h3>
                  <p className="text-gray-600 dark:text-gray-300">Multi-specialty hospitals, super-specialty centers</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Stethoscope className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Clinics</h3>
                  <p className="text-gray-600 dark:text-gray-300">Private clinics, specialty clinics, nursing homes</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Diagnostic Centers</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Pathology labs, imaging centers, health checkup centers
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Emergency Services</h3>
                  <p className="text-gray-600 dark:text-gray-300">Emergency rooms, ambulance services, urgent care</p>
                </div>
              </div>
            </div>
          </section>

          {/* Types of Medical Payments */}
          <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Types of Medical Payments</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <p className="text-gray-600 dark:text-gray-300">Hospital admission and room charges</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <p className="text-gray-600 dark:text-gray-300">Surgery and procedure fees</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <p className="text-gray-600 dark:text-gray-300">Consultation and doctor fees</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <p className="text-gray-600 dark:text-gray-300">Diagnostic tests and lab charges</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <p className="text-gray-600 dark:text-gray-300">Pharmacy and medicine bills</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <p className="text-gray-600 dark:text-gray-300">Physiotherapy and rehabilitation charges</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <p className="text-gray-600 dark:text-gray-300">Health insurance co-payments</p>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Benefits of Online Medical Bill Payment
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <p className="text-gray-600 dark:text-gray-300">Focus on recovery instead of payment hassles</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <p className="text-gray-600 dark:text-gray-300">Secure handling of sensitive medical information</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <p className="text-gray-600 dark:text-gray-300">Instant payment confirmation for faster discharge</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <p className="text-gray-600 dark:text-gray-300">Digital receipts for insurance claims</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
