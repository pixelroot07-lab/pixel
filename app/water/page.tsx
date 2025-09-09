import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function WaterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/" className="text-cyan-600 hover:text-cyan-800 transition-colors">
            ← Back to Home
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">💧</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Water Bill Payment</h1>
            <p className="text-gray-600 dark:text-gray-300">Convenient water bill payment for all major water boards</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="p-6 bg-white dark:bg-gray-800 shadow-xl">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">About Water Bill Payment</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Pay your water bills effortlessly with PixelPay. We support all major water boards and municipal
                corporations across India, ensuring you never face water supply disruption due to pending bills.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                  Quick bill fetch and payment
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                  Due date reminders
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                  Instant payment confirmation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                  Digital receipt storage
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-white dark:bg-gray-800 shadow-xl">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Supported Water Boards</h2>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "BWSSB (Bangalore Water Supply)",
                  "MCGM (Mumbai Water)",
                  "DJB (Delhi Jal Board)",
                  "CMWSSB (Chennai Water)",
                  "KWSSB (Kolkata Water)",
                  "HMWSSB (Hyderabad Water)",
                ].map((board, index) => (
                  <div key={index} className="flex items-center p-3 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg">
                    <span className="w-3 h-3 bg-cyan-500 rounded-full mr-3"></span>
                    <span className="text-gray-700 dark:text-gray-300">{board}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <Card className="p-6 bg-white dark:bg-gray-800 shadow-xl mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Payment Features</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-cyan-600 text-xl">⚡</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Instant Processing</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Bills are processed and updated immediately</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-cyan-600 text-xl">🔔</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Smart Alerts</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Get notified before due dates to avoid late fees
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-cyan-600 text-xl">📱</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Mobile Optimized</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Pay your water bills on-the-go from any device
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white dark:bg-gray-800 shadow-xl mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Service Coverage</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Major Cities Covered</h3>
                <div className="space-y-2">
                  {["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Pune", "Ahmedabad"].map(
                    (city, index) => (
                      <div key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                        <span className="text-gray-600 dark:text-gray-300">{city}</span>
                      </div>
                    ),
                  )}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Payment Methods</h3>
                <div className="space-y-2">
                  {["Credit/Debit Cards", "UPI Payments", "Net Banking", "Digital Wallets", "Bank Transfer"].map(
                    (method, index) => (
                      <div key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                        <span className="text-gray-600 dark:text-gray-300">{method}</span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </Card>

          <div className="text-center">
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3">Start Water Bill Payment</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
