import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function CreditCardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/" className="text-pink-600 hover:text-pink-800 transition-colors">
            ← Back to Home
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">💳</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Credit Card Bill Payment</h1>
            <p className="text-gray-600 dark:text-gray-300">Secure and convenient credit card bill payment solutions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="p-6 bg-white dark:bg-gray-800 shadow-xl">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">About Credit Card Payments</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Pay your credit card bills on time with PixelPay and maintain a healthy credit score. We support all
                major banks and credit card providers with instant payment processing and confirmation.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  Zero transaction fees
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  Instant payment processing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  Due date reminders
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  Reward points tracking
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-white dark:bg-gray-800 shadow-xl">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Supported Banks</h2>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "HDFC Bank",
                  "ICICI Bank",
                  "State Bank of India",
                  "Axis Bank",
                  "Kotak Mahindra Bank",
                  "Citibank",
                  "American Express",
                  "Standard Chartered",
                ].map((bank, index) => (
                  <div key={index} className="flex items-center p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                    <span className="w-3 h-3 bg-pink-500 rounded-full mr-3"></span>
                    <span className="text-gray-700 dark:text-gray-300">{bank}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <Card className="p-6 bg-white dark:bg-gray-800 shadow-xl mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Payment Benefits</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-pink-600 text-xl">📈</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Credit Score Protection</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Timely payments help maintain and improve your credit score
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-pink-600 text-xl">💰</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">No Hidden Charges</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Pay exactly what you owe with transparent pricing
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-pink-600 text-xl">🎁</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Reward Points</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Earn reward points on every payment transaction
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white dark:bg-gray-800 shadow-xl mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Smart Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Payment Options</h3>
                <div className="space-y-2">
                  {[
                    "Minimum Amount Due",
                    "Total Outstanding",
                    "Custom Amount",
                    "Auto-Pay Setup",
                    "Partial Payments",
                  ].map((option, index) => (
                    <div key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                      <span className="text-gray-600 dark:text-gray-300">{option}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Security Features</h3>
                <div className="space-y-2">
                  {[
                    "256-bit SSL Encryption",
                    "Two-Factor Authentication",
                    "Fraud Detection",
                    "Secure Payment Gateway",
                    "Transaction Monitoring",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          <div className="text-center">
            <Button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3">Start Credit Card Payment</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
