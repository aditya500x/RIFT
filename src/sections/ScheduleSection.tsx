import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const phases = [
  {
    day: "PHASE 1",
    title: "R Summit",
    date: "March 9 to 11",
    description: "Opening ceremony with workshops and networking opportunities. Get to know fellow participants, form teams, and start ideating on your projects.",
    highlights: ["Registration & Check-in", "Opening Keynote", "Team Formation", "Technical Workshops"],
  },
  {
    day: "PHASE 2",
    title: "Rise",
    date: "April 8 to 9",
    description: "Main hackathon days! Work on your projects, attend workshops, and get mentorship from industry experts. This is where the magic happens.",
    highlights: ["24/7 Hacking", "Mentor Sessions", "Tech Talks", "Mini Challenges"],
  },
  {
    day: "PHASE 3",
    title: "Revolt",
    date: "April 8 to 11",
    description: "Present your projects to judges and celebrate achievements with the community. Network with sponsors and win exciting prizes.",
    highlights: ["Final Presentations", "Judging", "Awards Ceremony", "Networking"],
  },
];

const ScheduleSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [fillPercent, setFillPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calculate how far through the section we've scrolled
      const scrollProgress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (sectionHeight + windowHeight * 0.5)));
      setFillPercent(scrollProgress * 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="schedule" className="py-32 border-b border-border" ref={sectionRef}>
      <div className="container">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title mb-6">
            Event <span className="text-primary">Schedule</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Four days of intensive collaboration, learning, and innovation.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Center line - background */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 bg-border hidden lg:block" />
          {/* Center line - fill on scroll */}
          <div
            className="absolute left-1/2 top-0 -translate-x-1/2 w-0.5 bg-primary hidden lg:block transition-all duration-300 ease-out"
            style={{ height: `${fillPercent}%` }}
          />

          <div className="flex flex-col gap-24">
            {phases.map((phase, i) => (
              <motion.div
                key={i}
                className="relative flex flex-col lg:flex-row items-start gap-12"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
              >
                {/* Left content */}
                <div className={`lg:w-1/2 ${i % 2 === 1 ? "lg:order-2 lg:pl-16" : "lg:pr-16 lg:text-right"}`}>
                  <div className={`inline-block border-2 border-primary rounded-full px-4 py-1.5 text-xs font-semibold text-primary mb-4`}>
                    {phase.day}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-5 leading-snug text-foreground max-w-md">
                    {phase.title}
                  </h3>
                  <p className="text-sm md:text-base font-semibold text-primary mb-4">{phase.date}</p>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">{phase.description}</p>
                  <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? 'lg:justify-end' : ''}`}>
                    {phase.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] md:text-xs px-3 py-1.5 bg-secondary rounded-full text-foreground font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden lg:block absolute left-1/2 top-8 -translate-x-1/2 timeline-dot z-10" />

                {/* Spacer for opposite side */}
                <div className={`hidden lg:block lg:w-1/2 ${i % 2 === 1 ? "lg:order-1" : ""}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
