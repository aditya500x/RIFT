import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Clock, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const DIVISIONS_DATA = [
  {
    name: "Artificial Intelligence",
    domain: "Machine Learning",
    events: [
      { time: "CORE FOCUS", title: "Intelligent Systems", description: "Focus on intelligent systems, generative AI, automation, and real-world AI applications." },
    ]
  },
  {
    name: "Cloud Computing",
    domain: "Infrastructure",
    events: [
      { time: "CORE FOCUS", title: "Scalable Systems", description: "Build scalable systems using modern cloud platforms, distributed systems, and backend infrastructure." },
    ]
  },
  {
    name: "Cybersecurity",
    domain: "Digital Trust",
    events: [
      { time: "CORE FOCUS", title: "Digital Security", description: "Design secure applications, threat detection systems, and privacy-focused digital solutions." },
    ]
  },
  {
    name: "Robotics",
    domain: "Autonomous Systems",
    events: [
      { time: "CORE FOCUS", title: "Embedded Innovation", description: "Develop intelligent robotic systems, autonomous navigation solutions, and embedded innovations." },
    ]
  },
  {
    name: "FinTech",
    domain: "Digital Economy",
    events: [
      { time: "CORE FOCUS", title: "Financial Tech", description: "Create financial technologies that improve digital payments, financial inclusion, and secure transactions." },
    ]
  },
  {
    name: "Sustainability",
    domain: "Climate Technology",
    events: [
      { time: "CORE FOCUS", title: "Climate Solutions", description: "Build solutions addressing environmental challenges, climate monitoring, and sustainable infrastructure." },
    ]
  },
  {
    name: "HealthTech",
    domain: "Bio Innovation",
    events: [
      { time: "CORE FOCUS", title: "Healthcare Delivery", description: "Design technologies that improve healthcare delivery, diagnostics, and medical accessibility." },
    ]
  },
  {
    name: "Game Development",
    domain: "Interactive Systems",
    events: [
      { time: "CORE FOCUS", title: "Immersive Tech", description: "Create immersive digital experiences, games, and interactive simulations using modern game engines." },
    ]
  },
  {
    name: "Data Science",
    domain: "Intelligent Systems",
    events: [
      { time: "CORE FOCUS", title: "Predictive Analytics", description: "Leverage data analytics, machine learning models, and predictive systems to solve real-world problems." },
    ]
  }
];

const EventItem = ({ time, title, description }: { time: string; title: string; description: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="py-4 md:py-6 border-b border-black last:border-0 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col md:flex-row items-start gap-2 md:gap-16 flex-1">
          <div className="shrink-0 pt-0 w-full md:w-[162px]" style={{ 
            height: 'auto',
            minHeight: '29px',
            color: '#9CA3AF' 
          }}>
            <span style={{ 
              fontFamily: "'BL Melody', sans-serif",
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '120%',
              display: 'block',
            }} className="md:text-[24px]">
              {time}
            </span>
          </div>
          <div className="flex flex-col flex-1">
            <h4 style={{ 
              fontFamily: "'BL Melody', sans-serif",
              fontWeight: 600,
              fontSize: '20px',
              lineHeight: '120%',
              height: 'auto',
              minHeight: '24px'
            }} className="text-gray-900 md:text-[24px]">
              {title}
            </h4>
            <p style={{ 
              fontFamily: "'BL Melody', sans-serif",
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '120%',
              height: 'auto'
            }} className="text-gray-500 md:text-[24px]">
              Description
            </p>
          </div>
        </div>
        <div className="shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#D1E1FF] flex items-center justify-center transition-all duration-300">
          <ChevronDown 
            size={18} 
            className={`text-[#0052FF] transition-all duration-300 md:w-5 md:h-5 ${isOpen ? "rotate-180" : ""}`} 
          />
        </div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-4 px-2 md:pl-[124px] md:pr-8">
              <p className="text-sm md:text-base text-gray-500 leading-relaxed italic">{description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const DivisionSection = ({ name, domain, events }: typeof DIVISIONS_DATA[0]) => (
  <div className="space-y-6">
    <div className="relative pb-2">
      <h2 className="flex flex-wrap items-center" style={{ 
        fontFamily: "'BL Melody Medium', sans-serif",
        fontWeight: 500,
        fontSize: 'clamp(24px, 5vw, 40px)',
        lineHeight: '120%',
        width: 'auto',
        minWidth: '112px',
        height: 'auto',
        minHeight: '48px'
      }}>
        {name} <span className="mx-2 hidden xs:inline">|</span> <span className="text-[#0052FF]">{domain}</span>
      </h2>
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0052FF]" />
    </div>
    <div className="space-y-0">
      {events.map((event, idx) => (
        <EventItem key={idx} {...event} />
      ))}
    </div>
  </div>
);

export default function Divisions() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      
      <main className="pt-32 pb-40">
        <div className="container max-w-6xl px-4">
          {/* Header */}
          <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
            <h1 className="mx-auto flex items-center justify-center text-center mb-4 px-4" style={{ 
              fontFamily: "'BL Melody SemiBold', sans-serif",
              fontWeight: 600,
              fontSize: 'clamp(32px, 8vw, 48px)',
              lineHeight: '110%',
              maxWidth: '600px'
            }}>
              The <span className="text-[#0052FF] ml-[0.25em]">Divisions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-900 font-medium mb-8 md:mb-12 px-4">Nine specialized technology domains powering the REVA RIFT innovation sprint.</p>
          </div>

          {/* Divisions List */}
          <div className="space-y-16 md:space-y-24">
            {DIVISIONS_DATA.map((division, idx) => (
              <DivisionSection key={idx} {...division} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
