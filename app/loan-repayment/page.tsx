import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function LoanRepaymentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/" className="text-purple-600 hover:text-purple-800 transition-colors">
            ← Back to Home
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">💰</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Loan Repayment</h1>
            <p className="text-gray-600 dark:text-gray-300">Pay your loan EMI quickly and securely</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-white dark:bg-gray-800 shadow-xl">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">About Loan Repayment</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Manage your loan EMIs effortlessly with our secure online payment platform. We support all major banks
                and NBFCs, making it convenient to pay your home loans, personal loans, car loans, and more.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Instant EMI payment processing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  All major banks & NBFCs supported
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Auto-debit facility available
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Payment reminders & alerts
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-white dark:bg-gray-800 shadow-xl">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Supported Banks & NBFCs</h2>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs font-bold">SBI</span>
                  </div>
                  <div>
                    <div className="font-semibold text-purple-600 dark:text-purple-400">State Bank of India</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">India's largest bank</div>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs font-bold">HD</span>
                  </div>
                  <div>
                    <div className="font-semibold text-blue-600 dark:text-blue-400">HDFC Bank</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Leading private bank</div>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs font-bold">IC</span>
                  </div>
                  <div>
                    <div className="font-semibold text-orange-600 dark:text-orange-400">ICICI Bank</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Digital banking leader</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6 bg-white dark:bg-gray-800 shadow-xl mt-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Loan Types Supported</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-600 dark:text-purple-400 text-xl">🏠</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Home Loans</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Property purchase & construction loans</p>
              </div>
              <div className="text-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-600 dark:text-purple-400 text-xl">👤</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Personal Loans</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Unsecured loans for personal needs</p>
              </div>
              <div className="text-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-600 dark:text-purple-400 text-xl">🚗</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Vehicle Loans</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Car, bike & commercial vehicle loans</p>
              </div>
            </div>
          </Card>

          <div className="text-center mt-8">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">Pay Loan EMI</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
