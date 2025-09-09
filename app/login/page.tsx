"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { useState } from "react"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })
  const [successMessage, setSuccessMessage] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    localStorage.setItem('user', JSON.stringify({ name: 'John Doe', email: formData.email }))
    setSuccessMessage('Successfully logged in!')
    setTimeout(() => window.location.href = '/', 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 dark:from-slate-800 dark:via-blue-900 dark:to-indigo-900 flex items-center justify-center p-4 transition-colors duration-300">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 dark:bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-400/20 dark:bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-yellow-400/10 dark:bg-blue-300/10 rounded-full blur-2xl animate-bounce delay-500"></div>
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-green-400/15 dark:bg-cyan-400/15 rounded-full blur-xl animate-pulse delay-700"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <Link href="/" className="inline-flex items-center space-x-2 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 dark:from-blue-500 dark:to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <div>
              <span className="font-bold text-2xl bg-gradient-to-r from-cyan-400 to-blue-500 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                PIXELROOT
              </span>
            </div>
          </Link>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-purple-100 dark:text-slate-300">Sign in to your PixelRoot account</p>
        </div>

        {/* Login Form */}
        <Card className="p-8 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border-0 shadow-2xl animate-fade-in-up delay-200">
          {successMessage && (
            <div className="mb-4 p-3 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-lg text-green-700 dark:text-green-300 text-center">
              {successMessage}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="john@example.com"
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="••••••••"
              />
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <label htmlFor="rememberMe" className="text-sm text-gray-600 dark:text-gray-300">
                  Remember me
                </label>
              </div>
              <Link
                href="/forgot-password"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Sign In
            </Button>


          </form>

          {/* Sign Up Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-300">
              Don't have an account?{" "}
              <Link href="/signup" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                Sign Up
              </Link>
            </p>
          </div>

          {/* Quick Access Features */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4 text-center">
              Quick Access Features
            </h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors cursor-pointer">
                <div className="text-2xl mb-1">📱</div>
                <div className="text-xs text-gray-600 dark:text-gray-300">Mobile Recharge</div>
              </div>
              <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors cursor-pointer">
                <div className="text-2xl mb-1">💡</div>
                <div className="text-xs text-gray-600 dark:text-gray-300">Bill Payment</div>
              </div>
              <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors cursor-pointer">
                <div className="text-2xl mb-1">📺</div>
                <div className="text-xs text-gray-600 dark:text-gray-300">DTH Recharge</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Security Notice */}
        <div className="mt-6 text-center animate-fade-in delay-500">
          <p className="text-sm text-purple-100 dark:text-slate-300">
            🔒 Your data is protected with 256-bit SSL encryption
          </p>
        </div>
      </div>


    </div>
  )
}
