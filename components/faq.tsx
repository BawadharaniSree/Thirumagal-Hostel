"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Faq() {
  const faqs = [
    {
      question: "Is food included in the rent?",
      answer:
        "Yes, both vegetarian and non-vegetarian meals are provided daily. Our menu includes breakfast, lunch, and dinner with a variety of nutritious options.",
    },
    {
      question: "Do you have curfew timings?",
      answer:
        "Yes, for security reasons, the curfew is 9:30 PM. Special permissions can be granted for late entry in case of emergencies or work requirements with prior notice.",
    },
    {
      question: "Are visitors allowed?",
      answer:
        "Female guests are allowed during the day in common areas. Male visitors (including family members) can meet residents in the designated visitor area near the reception during visiting hours only.",
    },
    {
      question: "How far is the hostel from Camp Road Bus Stop?",
      answer:
        "Just a 2-minute walk (approximately 100 meters) from the Camp Road Bus Stop, making it very convenient for daily commuters.",
    },
    {
      question: "Is there any joining fee or advance payment?",
      answer:
        "A refundable security deposit is required at the time of admission. No separate joining fee is charged. The deposit amount varies based on the room type selected.",
    },
    {
      question: "What are the payment terms?",
      answer:
        "Rent is collected on a monthly basis and should be paid by the 5th of every month. We accept bank transfers, UPI payments, and cash.",
    },
    {
      question: "Do you provide Wi-Fi?",
      answer: "Yes, high-speed Wi-Fi is available throughout the hostel premises at no additional cost.",
    },
    {
      question: "Are there any additional charges for AC rooms?",
      answer: "Yes, AC rooms have an additional charge for electricity consumption based on meter readings.",
    },
  ]

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our hostel and services.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Have more questions? Feel free to{" "}
            <a href="#contact" className="text-primary-foreground hover:underline">
              contact us
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
