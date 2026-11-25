import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Heart } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "How do I claim my $750 Target Reward?",
      answer: "Simply click the 'Start Now' button, enter your basic info, complete required offers, and your reward will be processed."
    },
    {
      question: "Is this offer really free?",
      answer: "Yes! There are no hidden fees. You just need to complete the required steps to qualify for your Target reward."
    },
    {
      question: "How long does it take to receive my reward?",
      answer: "Once you've completed all required steps, your Target reward will be processed and delivered within 24-48 business hours."
    },
    {
      question: "Can I use this reward on any Target purchase?",
      answer: "Absolutely! Your $750 Target reward can be used on any item in-store or online at Target.com."
    },
    {
      question: "Is my information secure?",
      answer: "Yes, we use industry-standard encryption to protect your personal data. Your information is never sold to third parties."
    },
  ];

  return (
    <div className="w-full max-w-md mx-auto px-4 mt-8 mb-12">
      <div className="flex items-center justify-center gap-2 mb-6">
        <Heart className="w-5 h-5 text-primary fill-primary" />
        <h2 className="font-display text-2xl font-bold text-foreground text-center">
          Frequently Asked Questions
        </h2>
        <Heart className="w-5 h-5 text-primary fill-primary" />
      </div>
      <div className="bg-card rounded-2xl shadow-md p-4 border border-secondary">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-border/50"
            >
              <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:text-primary hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQSection;
