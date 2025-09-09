import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function InsurancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/" className="text-green-600 hover:text-green-800 transition-colors">
            ← Back to Home
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🛡️</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Insurance Premium Payment</h1>
            <p className="text-gray-600 dark:text-gray-300">
              Secure and convenient insurance premium payment solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="p-6 bg-white dark:bg-gray-800 shadow-xl">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">About Insurance Payments</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Pay your insurance premiums hassle-free with PixelPay. We support all major insurance companies and
                policy types, ensuring your coverage remains active without any delays.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  All insurance types supported
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Automatic renewal reminders
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Instant payment confirmation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Digital receipt generation
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-white dark:bg-gray-800 shadow-xl">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Insurance Types</h2>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { type: "Life Insurance", icon: "❤️" },
                  { type: "Health Insurance", icon: "🏥" },
                  { type: "Motor Insurance", icon: "🚗" },
                  { type: "Home Insurance", icon: "🏠" },
                  { type: "Travel Insurance", icon: "✈️" },
                  { type: "Business Insurance", icon: "💼" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <span className="text-xl mr-3">{item.icon}</span>
                    <span className="text-gray-700 dark:text-gray-300">{item.type}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <Card className="p-6 bg-white dark:bg-gray-800 shadow-xl mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Supported Insurance Companies</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                "LIC (Life Insurance Corporation)",
                "HDFC Life Insurance",
                "ICICI Prudential Life",
                "SBI Life Insurance",
                "Bajaj Allianz Life",
                "Max Life Insurance",
                "Tata AIG General Insurance",
                "New India Assurance",
                "Oriental Insurance",
              ].map((company, index) => (
                <div key={index} className="flex items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">{company}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-white dark:bg-gray-800 shadow-xl mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Why Choose PixelPay for Insurance?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 text-xl">🔔</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Smart Reminders</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Never miss a premium payment with our automated reminders
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 text-xl">💳</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Multiple Payment Options</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Pay using cards, UPI, net banking, or wallet</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 text-xl">📊</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Payment History</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Track all your insurance payments in one place
                </p>
              </div>
            </div>
          </Card>

          <div className="text-center">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">Start Premium Payment</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
