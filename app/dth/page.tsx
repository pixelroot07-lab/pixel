import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function DTHPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/" className="text-red-600 hover:text-red-800 transition-colors">
            ← Back to Home
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">📺</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">DTH Recharge</h1>
            <p className="text-gray-600 dark:text-gray-300">Recharge your DTH connection instantly</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-white dark:bg-gray-800 shadow-xl">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">About DTH Recharge</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Never miss your favorite shows with our instant DTH recharge service. We support all major DTH operators
                across India with secure and fast payment processing for uninterrupted entertainment.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Instant activation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  All DTH operators supported
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Secure transactions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  24/7 customer support
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-white dark:bg-gray-800 shadow-xl">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Supported DTH Operators</h2>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs font-bold">TS</span>
                  </div>
                  <div>
                    <div className="font-semibold text-red-600 dark:text-red-400">Tata Sky</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Leading DTH provider</div>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs font-bold">AD</span>
                  </div>
                  <div>
                    <div className="font-semibold text-blue-600 dark:text-blue-400">Airtel Digital TV</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Digital entertainment</div>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs font-bold">DT</span>
                  </div>
                  <div>
                    <div className="font-semibold text-orange-600 dark:text-orange-400">Dish TV</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Premium channels</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6 bg-white dark:bg-gray-800 shadow-xl mt-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Popular DTH Plans</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="text-lg font-bold text-red-600 dark:text-red-400">₹299</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Basic Pack</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">100+ Channels, 30 Days</div>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="text-lg font-bold text-red-600 dark:text-red-400">₹499</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Family Pack</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">200+ Channels, 30 Days</div>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="text-lg font-bold text-red-600 dark:text-red-400">₹999</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Premium Pack</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">300+ Channels, 30 Days</div>
              </div>
            </div>
          </Card>

          <div className="text-center mt-8">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">Start DTH Recharge</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
