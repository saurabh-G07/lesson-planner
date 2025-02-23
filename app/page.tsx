'use client'

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"

export default function SplashScreen() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 0.5 // Smooth progress bar animation
      })
    }, 30)

    const redirectTimeout = setTimeout(() => {
      setLoading(false)
      const user = sessionStorage.getItem("user")
      if (user) {
        router.push("/lesson-planner") // Redirect to Lesson Planner if logged in
      } else {
        router.push("/login") // Redirect to Login if not logged in
      }
    }, 6000) // Splash screen duration of 6 seconds

    return () => {
      clearTimeout(redirectTimeout)
      clearInterval(progressInterval)
    }
  }, [router])

  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 z-50">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/10 rounded-full"
            style={{
              width: Math.random() * 4 + 2 + "px",
              height: Math.random() * 4 + 2 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Enhanced Placeholder Logo */}
      <motion.div
        className="relative mb-8 flex items-center justify-center w-48 h-48 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Outer Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-full blur-xl bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 opacity-50"
          animate={{
            scale: [1.2, 1.5, 1.2],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Inner Text */}
        <span className="relative text-white text-xl font-extrabold tracking-wide">
          AI Planner
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        AI Based Lesson Planner
      </motion.h2>

      {/* Progress Bar and Loading Text */}
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="w-6 h-6 text-purple-400 animate-spin" />

        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <motion.p
          className="text-white/60 text-sm"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Loading{".".repeat(Math.floor(progress / 25) + 1)}
        </motion.p>

        <motion.p className="text-white/40 text-xs">{Math.round(progress)}%</motion.p>
      </div>
    </div>
  )
}
