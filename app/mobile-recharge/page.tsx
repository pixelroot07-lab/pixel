import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function MobileRechargePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800 transition-colors">
            ← Back to Home
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">📱</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Mobile Recharge</h1>
            <p className="text-gray-600 dark:text-gray-300">Quick and easy mobile recharge for all operators</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-white dark:bg-gray-800 shadow-xl">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">About Mobile Recharge</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Stay connected with instant mobile recharges for all major telecom operators in India. Our platform
                offers seamless prepaid mobile recharge services with instant processing and confirmation.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Instant recharge processing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  24/7 service availability
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Secure payment gateway
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  SMS confirmation
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-white dark:bg-gray-800 shadow-xl">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Supported Operators</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="font-semibold text-blue-600 dark:text-blue-400">Jio</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Reliance Jio</div>
                </div>
                <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <div className="font-semibold text-red-600 dark:text-red-400">Airtel</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Bharti Airtel</div>
                </div>
                <div className="text-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="font-semibold text-purple-600 dark:text-purple-400">Vi</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Vodafone Idea</div>
                </div>
                <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="font-semibold text-green-600 dark:text-green-400">BSNL</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">State Network</div>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6 bg-white dark:bg-gray-800 shadow-xl mt-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Popular Recharge Plans</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="text-lg font-bold text-blue-600 dark:text-blue-400">₹99</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">1GB Data + Unlimited Calls</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">28 Days Validity</div>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="text-lg font-bold text-blue-600 dark:text-blue-400">₹199</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">1.5GB/Day + Unlimited Calls</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">28 Days Validity</div>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="text-lg font-bold text-blue-600 dark:text-blue-400">₹399</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">2.5GB/Day + Unlimited Calls</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">56 Days Validity</div>
              </div>
            </div>
          </Card>

          <div className="text-center mt-8">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">Start Recharge</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
