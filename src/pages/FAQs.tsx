import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    category: "General",
    questions: [
      { q: "Question", a: "Answer detail for the general question goes here. We keep it concise and relevant." },
      { q: "Question", a: "Answer detail for the general question goes here. We keep it concise and relevant." },
      { q: "Question", a: "Answer detail for the general question goes here. We keep it concise and relevant." },
      { q: "Question", a: "Answer detail for the general question goes here. We keep it concise and relevant." },
    ]
  },
  {
    category: "Category",
    questions: [
      { q: "Question", a: "Answer detail for this specific category question goes here." },
      { q: "Question", a: "Answer detail for this specific category question goes here." },
      { q: "Question", a: "Answer detail for this specific category question goes here." },
      { q: "Question", a: "Answer detail for this specific category question goes here." },
    ]
  }
];

const FAQs = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 md:pt-32 pb-20 md:pb-40">
        <div className="container max-w-6xl px-4 md:px-6">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center mb-20"
          >
            <h1 style={{
              fontFamily: "'BL Melody SemiBold', sans-serif",
              fontWeight: 600,
              fontSize: 'clamp(28px, 6vw, 48px)',
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center',
              width: '100%',
              maxWidth: '973px',
              minHeight: '73px',
              opacity: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap' as const
            }}>
              <span className="text-[#0052FF] mr-[0.25em]">Frequently</span> Asked Questions
            </h1>
            <p className="text-muted-foreground opacity-70" style={{
              fontFamily: "'BL Melody ExtraLight', sans-serif",
              fontWeight: 200,
              fontSize: 'clamp(18px, 4vw, 25px)',
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center',
              width: '100%',
              maxWidth: '973px',
              minHeight: '30px',
              opacity: 1
            }}>
              description
            </p>
          </motion.div>

          {/* FAQ Categories */}
          <div className="space-y-12 mt-4 px-4">
            {faqData.map((section, sIdx) => (
              <div key={sIdx}>
                <h2 className="text-2xl md:text-4xl font-bold text-center text-[#0052FF] mb-4" style={{ fontFamily: "'BL Melody SemiBold', sans-serif" }}>
                  {section.category}
                </h2>
                <Accordion
                  type="single"
                  collapsible
                  className="mx-auto flex flex-col pt-0"
                  style={{
                    width: '100%',
                    maxWidth: '851px',
                    minHeight: '306px',
                    gap: '22px',
                    opacity: 1
                  }}
                >
                  {section.questions.map((item, qIdx) => (
                    <AccordionItem
                      key={qIdx}
                      value={`item-${sIdx}-${qIdx}`}
                      className="border-b-[1px] border-black px-0"
                      style={{ minHeight: '60px' }}
                    >
                      <AccordionTrigger className="hover:no-underline py-4 transition-all hover:text-[#0052FF] [&>svg]:bg-[#F1F1F1] [&>svg]:rounded-full [&>svg]:p-1.5 [&>svg]:h-8 [&>svg]:w-8 [&>svg]:text-black [&>svg]:transition-transform">
                        <span style={{
                          fontFamily: "'BL Melody Regular', sans-serif",
                          fontWeight: 400,
                          fontSize: '16px',
                          lineHeight: '100%',
                          letterSpacing: '0%',
                          opacity: 1,
                          display: 'inline-block',
                          textAlign: 'left'
                        }}>
                          {item.q}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-6 px-1 text-lg leading-relaxed">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQs;
