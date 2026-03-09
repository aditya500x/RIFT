import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

// Image imports
import workshop1 from "@/assets/images/pre-schedule-showcase/workshop-1.webp";
import workshop2 from "@/assets/images/pre-schedule-showcase/workshop-2.webp";
import workshop3 from "@/assets/images/pre-schedule-showcase/workshop-3.webp";

const WorkshopItem = ({ 
  title, 
  description, 
  image, 
  isReversed = false 
}: { 
  title: string; 
  description: string; 
  image: string;
  isReversed?: boolean;
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center`}>
      <div className={`${isReversed ? "md:order-2" : "md:order-1"} space-y-4`}>
        <div className="aspect-[16/9] bg-[#f8f8f8] rounded-xl overflow-hidden border border-gray-200 shadow-sm">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>
      
      <div className={`${isReversed ? "md:order-1 md:text-left" : "md:order-2 md:text-right"} space-y-4`}>
        <h3 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "Inter, sans-serif" }}>
          {title}
        </h3>
        <p className={`text-gray-600 font-normal leading-relaxed text-sm md:text-base max-w-md ${!isReversed ? "ml-auto" : ""}`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default function Workshops() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      
      <main className="pt-32 pb-40">
        <div className="container max-w-6xl px-4">
          {/* Header */}
          <div className="text-center mb-24 flex flex-col items-center">
            <h1 className="mx-auto flex items-center justify-center text-center" style={{ 
              fontFamily: "'Monument Extended', sans-serif",
              fontWeight: 600,
              fontSize: '48px',
              lineHeight: '100%',
              marginBottom: '16px'
            }}>
              <span className="text-[#0052FF]">Work</span>shops
            </h1>
            <p className="text-xl text-gray-600">Master the Craft of Innovation</p>
          </div>

          {/* Staggered Content */}
          <div className="space-y-32 md:space-y-48">
            {/* Workshop 1 */}
            <WorkshopItem 
              title="Applied AI & Machine Learning"
              description="Deep dive into integrating LLMs and generative AI into real-world applications. Learn to build agents that solve complex problems using modern frameworks."
              image={workshop1}
            />

            {/* Workshop 2 */}
            <WorkshopItem 
              title="Rapid Product Prototyping"
              description="Move from idea to high-fidelity prototype in record time. Master tools like Figma and Framer to validate your concepts before writing a single line of code."
              image={workshop2}
              isReversed
            />

            {/* Workshop 3 */}
            <WorkshopItem 
              title="Cloud Native Architecture"
              description="Learn to build scalable, resilient systems from day one. Explore Kubernetes, serverless patterns, and CI/CD pipelines to deploy globally."
              image={workshop3}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

