import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Clock, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const DIVISIONS_DATA = [
  {
    name: "Name",
    domain: "Domain",
    events: [
      { time: "09:00 - 10:00", title: "Event Name", description: "This is a detailed description of the event. It can be expanded to show more information about what will happen during this time slot." },
      { time: "09:00 - 10:00", title: "Event Name", description: "This is another description for a different event. Participants will engage in specific activities outlined here." },
      { time: "09:00 - 10:00", title: "Event Name", description: "Final event description for this domain. It covers the objectives and outcomes expected for this session." },
    ]
  },
  {
    name: "Name",
    domain: "Domain",
    events: [
      { time: "09:00 - 10:00", title: "Event Name", description: "Description for the first event in the second domain. Focus on practical implementation and feedback." },
      { time: "09:00 - 10:00", title: "Event Name", description: "Second event description. Team collaboration and initial prototyping phase." },
      { time: "09:00 - 10:00", title: "Event Name", description: "Continuing the development work with mentor guidance and technical support." },
    ]
  },
  {
    name: "Name",
    domain: "Domain",
    events: [
      { time: "09:00 - 10:00", title: "Event Name", description: "Morning session description. Introduction to the domain challenges and resources available." },
      { time: "09:00 - 10:00", title: "Event Name", description: "Mid-day workshop focused on specific tools and methodologies relevant to this track." },
      { time: "09:00 - 10:00", title: "Event Name", description: "Evening wrap-up and preparation for the next day's milestones." },
    ]
  }
];

const EventItem = ({ time, title, description }: { time: string; title: string; description: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="py-6 border-b border-black last:border-0 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-8 md:gap-16">
          <div className="shrink-0 pt-0" style={{ 
            width: '162px', 
            height: '29px',
            color: '#9CA3AF' 
          }}>
            <span style={{ 
              fontFamily: "'BL Melody', sans-serif",
              fontWeight: 400,
              fontSize: '24px',
              lineHeight: '100%',
              display: 'block',
              whiteSpace: 'nowrap'
            }}>
              {time}
            </span>
          </div>
          <div className="flex flex-col">
            <h4 style={{ 
              fontFamily: "'BL Melody', sans-serif",
              fontWeight: 600,
              fontSize: '24px',
              lineHeight: '100%',
              width: 'auto',
              minWidth: '138px',
              height: '29px'
            }} className="text-gray-900">
              {title}
            </h4>
            <p style={{ 
              fontFamily: "'BL Melody', sans-serif",
              fontWeight: 400,
              fontSize: '24px',
              lineHeight: '100%',
              width: 'auto',
              minWidth: '130px',
              height: '29px'
            }} className="text-gray-500">
              Description
            </p>
          </div>
        </div>
        <div className={`w-10 h-10 rounded-full bg-[#D1E1FF] flex items-center justify-center transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-100"}`}>
          <ChevronDown 
            size={20} 
            className={`text-[#0052FF] transition-all duration-300 ${isOpen ? "rotate-180" : ""}`} 
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
            <div className="pt-4 pl-[92px] md:pl-[124px] pr-8">
              <p className="text-sm text-gray-500 leading-relaxed italic">{description}</p>
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
      <h2 className="flex items-center" style={{ 
        fontFamily: "'BL Melody Medium', sans-serif",
        fontWeight: 500,
        fontSize: '40px',
        lineHeight: '100%',
        width: 'auto', // Overriding the 112px for Name | Domain combo to prevent truncation
        minWidth: '112px',
        height: '48px'
      }}>
        {name} | <span className="text-[#0052FF] ml-[0.25em]">{domain}</span>
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
          <div className="text-center mb-24 flex flex-col items-center">
            <h1 className="mx-auto flex items-center justify-center text-center mb-4" style={{ 
              fontFamily: "'BL Melody SemiBold', sans-serif",
              fontWeight: 600,
              fontSize: '48px',
              lineHeight: '100%',
              maxWidth: '600px'
            }}>
              The <span className="text-[#0052FF] ml-[0.25em]">Divisions</span>
            </h1>
            <p className="text-xl text-gray-600">9 domain Hackathon description</p>
          </div>

          {/* Divisions List */}
          <div className="space-y-24">
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
