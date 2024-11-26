import { DollarSign, Shield, Scissors, Layers } from 'lucide-react'

const features = [
  {
    name: "Cheapest TXs",
    description: "Exchange popular digital currencies at the cheapest possible transaction price",
    icon: DollarSign,
  },
  {
    name: "CerTIK",
    description: "We are Audited by CertiK, CertiK is the leading security focused ranking platform to",
    icon: Shield,
  },
  {
    name: "No Contract Sells",
    description: "No contract sells to fund the marketing wallets",
    icon: Scissors,
  },
  {
    name: "CrossDex Support",
    description: "Exchange popular digital currencies at the cheapest possible transaction price",
    icon: Layers,
  },
]

export function Features() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          Our <span className="text-yellow-400">Features</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="p-6 rounded-lg bg-gray-900/50 backdrop-blur-sm hover:bg-gray-900/80 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-yellow-400/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-yellow-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.name}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

