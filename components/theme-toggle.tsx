"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="h-12 w-12 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 backdrop-blur-sm border border-cyan-200/50 transition-all duration-300 shadow-lg"
      >
        <div className="h-5 w-5" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="h-12 w-12 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 dark:from-purple-500/20 dark:to-pink-500/20 backdrop-blur-sm border border-cyan-200/50 dark:border-purple-300/50 hover:from-cyan-400/30 hover:to-blue-500/30 dark:hover:from-purple-500/30 dark:hover:to-pink-500/30 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-cyan-600 dark:text-yellow-400" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-purple-600 dark:text-purple-300" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
