import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function ElectricityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/" className="text-yellow-600 hover:text-yellow-800 transition-colors">
            ← Back to Home
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">💡</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Electricity Bill Payment</h1>
            <p className="text-gray-600 dark:text-gray-300">Pay your electricity bill quickly and securely</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-white dark:bg-gray-800 shadow-xl">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                About Electricity Bill Payment
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Pay your electricity bills online with ease and convenience. Our platform supports all major state
                electricity boards across India, ensuring your power supply remains uninterrupted with timely payments.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  Instant bill payment processing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  All state electricity boards supported
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  Auto bill fetch feature
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  Payment confirmation via SMS/Email
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-white dark:bg-gray-800 shadow-xl">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Supported Electricity Boards</h2>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs font-bold">MS</span>
                  </div>
                  <div>
                    <div className="font-semibold text-yellow-600 dark:text-yellow-400">MSEB</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Maharashtra State Electricity Board</div>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs font-bold">TN</span>
                  </div>
                  <div>
                    <div className="font-semibold text-orange-600 dark:text-orange-400">TNEB</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Tamil Nadu Electricity Board</div>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs font-bold">KS</span>
                  </div>
                  <div>
                    <div className="font-semibold text-green-600 dark:text-green-400">KSEB</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Kerala State Electricity Board</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6 bg-white dark:bg-gray-800 shadow-xl mt-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Payment Benefits</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-yellow-600 dark:text-yellow-400 text-xl">⚡</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Instant Processing</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Bills are processed instantly with immediate confirmation
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-yellow-600 dark:text-yellow-400 text-xl">🔒</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Secure Payments</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Bank-grade security for all your transactions
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-yellow-600 dark:text-yellow-400 text-xl">📱</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Mobile Friendly</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Pay bills anytime, anywhere from your mobile device
                </p>
              </div>
            </div>
          </Card>

          <div className="text-center mt-8">
            <Button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3">Pay Electricity Bill</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
