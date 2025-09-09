"use client"

import Link from "next/link"
import { ArrowLeft, Car, MapPin, CreditCard, Clock } from "lucide-react"

export default function FastagRechargePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link
            href="/"
            className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors mr-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Car className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">FASTag Recharge</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Recharge your FASTag instantly and enjoy seamless toll payments across India's highways.
          </p>
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* What is FASTag */}
          <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What is FASTag?</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              FASTag is a revolutionary electronic toll collection system that uses Radio Frequency Identification
              (RFID) technology. It's a prepaid tag that enables automatic deduction of toll charges and lets you pass
              through toll plazas without stopping.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Issued by various banks and authorized agencies, FASTag is mandatory for all vehicles and provides a
              convenient, cashless way to pay tolls on national highways.
            </p>
          </section>

          {/* Benefits */}
          <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Benefits of FASTag</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Time Saving</h3>
                  <p className="text-gray-600 dark:text-gray-300">No more waiting in long queues at toll plazas</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Cashless Payment</h3>
                  <p className="text-gray-600 dark:text-gray-300">Completely digital and contactless transactions</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Wide Acceptance</h3>
                  <p className="text-gray-600 dark:text-gray-300">Valid across all toll plazas in India</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Car className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Fuel Savings</h3>
                  <p className="text-gray-600 dark:text-gray-300">Reduce fuel consumption by avoiding stops</p>
                </div>
              </div>
            </div>
          </section>

          {/* Supported Banks */}
          <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Supported FASTag Issuers</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "ICICI Bank",
                "HDFC Bank",
                "Axis Bank",
                "SBI",
                "Paytm Payments Bank",
                "Kotak Mahindra Bank",
                "IDFC First Bank",
                "Federal Bank",
                "Equitas Bank",
              ].map((bank) => (
                <div key={bank} className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4 text-center">
                  <p className="font-medium text-gray-900 dark:text-white">{bank}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
