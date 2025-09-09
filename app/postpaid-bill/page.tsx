"use client"

import Link from "next/link"
import { ArrowLeft, Smartphone, Clock, Shield, Zap } from "lucide-react"

export default function PostpaidBillPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link
            href="/"
            className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors mr-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Smartphone className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Postpaid Bill Payment</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Pay your mobile postpaid bills instantly with PixelPay. No more waiting in queues or late payment charges.
          </p>
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* What is Postpaid */}
          <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What is Postpaid Bill Payment?</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Postpaid mobile services allow you to use your phone services first and pay for them later at the end of
              your billing cycle. Unlike prepaid services where you pay in advance, postpaid plans offer more
              flexibility and often better rates for heavy users.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              With PixelPay, you can easily pay your postpaid bills from all major telecom operators in India including
              Airtel, Jio, Vi (Vodafone Idea), and BSNL.
            </p>
          </section>

          {/* Benefits */}
          <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Benefits of Paying with PixelPay</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Instant Payment</h3>
                  <p className="text-gray-600 dark:text-gray-300">Pay your bills instantly 24/7 from anywhere</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Secure Transactions</h3>
                  <p className="text-gray-600 dark:text-gray-300">Bank-grade security for all your payments</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">No Extra Charges</h3>
                  <p className="text-gray-600 dark:text-gray-300">Pay exactly what you owe, no hidden fees</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">All Operators</h3>
                  <p className="text-gray-600 dark:text-gray-300">Support for all major telecom operators</p>
                </div>
              </div>
            </div>
          </section>

          {/* Supported Operators */}
          <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Supported Operators</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Airtel", "Jio", "Vi (Vodafone Idea)", "BSNL", "MTNL", "Tata Docomo", "Telenor", "Uninor"].map(
                (operator) => (
                  <div key={operator} className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4 text-center">
                    <p className="font-medium text-gray-900 dark:text-white">{operator}</p>
                  </div>
                ),
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
