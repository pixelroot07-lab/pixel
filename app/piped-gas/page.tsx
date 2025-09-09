import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function PipedGasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/" className="text-orange-600 hover:text-orange-800 transition-colors">
            ← Back to Home
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🔥</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Piped Gas Bill Payment</h1>
            <p className="text-gray-600 dark:text-gray-300">Convenient and secure piped gas bill payment solutions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="p-6 bg-white dark:bg-gray-800 shadow-xl">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">About Piped Gas Payment</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Pay your piped gas bills instantly with PixelPay. Our platform supports all major gas distribution
                companies across India, ensuring you never miss a payment deadline.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Instant bill payment processing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  24/7 payment availability
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Secure payment gateway
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  SMS and email confirmations
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-white dark:bg-gray-800 shadow-xl">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Supported Gas Providers</h2>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "Indraprastha Gas Limited (IGL)",
                  "Mahanagar Gas Limited (MGL)",
                  "Gujarat Gas Limited (GGL)",
                  "Adani Gas Limited (AGL)",
                  "Bhagyanagar Gas Limited (BGL)",
                  "Sabarmati Gas Limited (SGL)",
                ].map((provider, index) => (
                  <div key={index} className="flex items-center p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <span className="w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
                    <span className="text-gray-700 dark:text-gray-300">{provider}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <Card className="p-6 bg-white dark:bg-gray-800 shadow-xl mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Payment Benefits</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-orange-600 text-xl">⚡</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Instant Processing</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Bills are processed immediately with instant confirmation
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-orange-600 text-xl">🔒</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Secure Payments</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Bank-grade security with encrypted transactions
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-orange-600 text-xl">📱</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Mobile Friendly</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Pay from anywhere using your mobile device</p>
              </div>
            </div>
          </Card>

          <div className="text-center">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">Start Payment Process</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
