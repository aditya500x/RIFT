import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import revaUniversityImage from "@/assets/images/others/reva-university.webp";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 border-b border-border" ref={ref}>
      <div className="container">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-5">About</h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Meet in Bangalore to build bold prototypes, learn fast, and ship ideas that
            strengthen India's digital future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto items-center">
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <motion.div
              className="border-2 border-border bg-card p-4 md:p-5 h-full flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={revaUniversityImage}
                alt="REVA University"
                className="w-full h-auto object-contain max-h-80 rounded-sm"
                whileHover={{ rotateY: 8, rotateX: -5 }}
                transition={{ duration: 0.4 }}
                style={{ perspective: "1000px" }}
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            <div className="border border-border bg-background p-6 md:p-8">
              <h4 className="text-lg md:text-xl font-bold mb-4">What You Will Experience</h4>
              <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
                <li>Industry-aligned real-world problem statements</li>
                <li>Hands-on workshops on emerging technologies</li>
                <li>24-hour domain-focused hackathons</li>
                <li>Mentorship from industry experts</li>
              </ul>
            </div>
            <div className="mt-5 flex justify-center lg:justify-start">
              <motion.a
                href="#schedule"
                className="btn-shine inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-2 rounded-full font-semibold text-xs md:text-sm hover:opacity-90 transition-opacity cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Know More
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
