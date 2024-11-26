"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How do I get a Referral Code?",
    answer: "You can get a referral code by connecting your wallet and visiting the referral section of your profile.",
  },
  {
    question: "Do I get rewarded in tokens or ETH when I refer buyers?",
    answer: "You receive your rewards in ETH instantly once someone you refer makes a transaction!",
  },
  {
    question: "How do I get a Referral Code?",
    answer: "Visit your profile section after connecting your wallet to get your unique referral code.",
  },
]

export function FAQ() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" id="faqs">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          FAQ<span className="text-yellow-400">s</span>
        </h2>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

