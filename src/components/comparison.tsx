"use client"

import { Check, X } from 'lucide-react'
import { Moon } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    title: "Low Transaction Fees",
    moonex: true,
    uniswap: false,
    description: "Enjoy minimal transaction costs on all trades"
  },
  {
    title: "Multi-Chain Support",
    moonex: true,
    uniswap: false,
    description: "Trade across multiple blockchains seamlessly"
  },
  {
    title: "Liquidity Pools",
    moonex: true,
    uniswap: true,
    description: "Access deep liquidity for better trading"
  },
  {
    title: "Staking Rewards",
    moonex: true,
    uniswap: false,
    description: "Earn passive income through staking"
  },
  {
    title: "Cross-Chain Swaps",
    moonex: true,
    uniswap: false,
    description: "Swap tokens across different chains"
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function Comparison() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Choose <span className="text-yellow-400">MoonEX</span>?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Compare our features with other platforms and see why MoonEX is the best choice for your trading needs
          </p>
        </motion.div>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative overflow-x-auto rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm"
        >
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="py-6 px-6 text-left">Features</th>
                <th className="py-6 px-6">
                  <motion.div 
                    className="flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Moon className="h-6 w-6 text-yellow-400" />
                    <span className="font-bold">MoonEX</span>
                  </motion.div>
                </th>
                <th className="py-6 px-6">
                  <motion.div 
                    className="flex items-center justify-center space-x-2 text-pink-500"
                    whileHover={{ scale: 1.05 }}
                  >
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.964 10.207a1.899 1.899 0 0 0-.337-.466L11.861 2.97a1.899 1.899 0 0 0-2.687 0L2.408 9.741a1.899 1.899 0 0 0-.337.466L12 17.348l6.964-7.141z" />
                      <path d="M11.999 19.28 3.81 10.886a1.899 1.899 0 0 0-.337.466l8.526 8.764 8.525-8.764a1.899 1.899 0 0 0-.337-.466l-8.188 8.394z" />
                    </svg>
                    <span className="font-bold">Uniswap</span>
                  </motion.div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <motion.tr
                  key={index}
                  variants={item}
                  className="border-b border-gray-800 hover:bg-gray-800/30 transition-colors"
                >
                  <td className="py-6 px-6">
                    <div>
                      <h3 className="font-medium mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-400">{feature.description}</p>
                    </div>
                  </td>
                  <td className="py-6 px-6">
                    <motion.div 
                      className="flex justify-center"
                      whileHover={{ scale: 1.2 }}
                    >
                      {feature.moonex ? (
                        <Check className="h-6 w-6 text-green-500" />
                      ) : (
                        <X className="h-6 w-6 text-red-500" />
                      )}
                    </motion.div>
                  </td>
                  <td className="py-6 px-6">
                    <motion.div 
                      className="flex justify-center"
                      whileHover={{ scale: 1.2 }}
                    >
                      {feature.uniswap ? (
                        <Check className="h-6 w-6 text-green-500" />
                      ) : (
                        <X className="h-6 w-6 text-red-500" />
                      )}
                    </motion.div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  )
}

