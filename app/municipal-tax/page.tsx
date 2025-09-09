"use client"

import Link from "next/link"
import { ArrowLeft, Building2, FileText, Clock, Shield } from "lucide-react"

export default function MunicipalTaxPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link
            href="/"
            className="flex items-center text-amber-600 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 transition-colors mr-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Building2 className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Municipal Tax Payment</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Pay your municipal taxes and property taxes online with ease. Support your local government services.
          </p>
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* About Municipal Tax */}
          <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What are Municipal Taxes?</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Municipal taxes are levies imposed by local government bodies (municipalities, corporations, councils) to
              fund essential civic services and infrastructure development. These taxes are crucial for maintaining
              roads, water supply, sewerage systems, street lighting, and waste management.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              The most common types include property tax, water tax, sewerage tax, and various development charges.
              Timely payment of these taxes ensures continued provision of civic amenities and urban development.
            </p>
          </section>

          {/* Types of Municipal Taxes */}
          <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Types of Municipal Taxes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Property Tax</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Annual tax on residential and commercial properties
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Water Tax</h3>
                  <p className="text-gray-600 dark:text-gray-300">Charges for municipal water supply services</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Sewerage Tax</h3>
                  <p className="text-gray-600 dark:text-gray-300">Fees for sewerage and drainage maintenance</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Development Charges</h3>
                  <p className="text-gray-600 dark:text-gray-300">Fees for infrastructure development projects</p>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits of Online Payment */}
          <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Benefits of Online Municipal Tax Payment
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <p className="text-gray-600 dark:text-gray-300">Avoid long queues at municipal offices</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <p className="text-gray-600 dark:text-gray-300">24/7 payment facility from anywhere</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <p className="text-gray-600 dark:text-gray-300">Instant payment confirmation and receipts</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <p className="text-gray-600 dark:text-gray-300">Secure and encrypted transactions</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <p className="text-gray-600 dark:text-gray-300">Digital record keeping for future reference</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
