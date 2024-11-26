"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient blob */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-72 h-72 bg-yellow-400 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Additional animated elements */}
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-blue-500 rounded-full blur-3xl opacity-10"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
            rotate: -360,
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Animated stars */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Animated badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block"
          >
            <span className="px-4 py-2 rounded-full bg-yellow-400/10 text-yellow-400 text-sm font-medium border border-yellow-400/20">
              🚀 Welcome to the Future of DeFi
            </span>
          </motion.div>

          {/* Main heading with animated text reveal */}
          <motion.h1 
            className="text-5xl sm:text-7xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Trusted Multi-Chain
            <br />
            <motion.span 
              className="text-yellow-400 inline-block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              DEX Platform
            </motion.span>
          </motion.h1>

          {/* Subheading with gradient text */}
          <motion.p 
            className="text-xl sm:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Trade, earn, and own crypto on the{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
              all-in-one multi-chain DEX
            </span>
          </motion.p>

          {/* Animated buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <Button 
              size="lg" 
              className="bg-yellow-400 text-[#0A0B0F] hover:bg-yellow-500 transform hover:scale-105 transition-all"
            >
              Connect Wallet
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 transform hover:scale-105 transition-all"
            >
              Trade Crypto
            </Button>
          </motion.div>

          {/* Stats section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-16"
          >
            {[
              { label: "Total Volume", value: "$12B+" },
              { label: "Users", value: "2M+" },
              { label: "Chains", value: "10+" },
              { label: "Daily Trades", value: "500K+" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <motion.h3 
                  className="text-3xl font-bold text-yellow-400"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.value}
                </motion.h3>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

