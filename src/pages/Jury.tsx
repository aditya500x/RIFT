import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

/**
 * 💡 HOW TO ADD NEW JURY MEMBERS:
 * 
 * 1. Ensure the member's image is in `src/assets/images/jury/` (resolution: 1920x2000).
 * 2. Import the image at the top of this file:
 *    `import memberNameImg from "@/assets/images/jury/member-name.png";`
 * 3. Add a new object to the `juryMembers` array below:
 *    {
 *      name: "Full Name",
 *      role: "Designation",
 *      image: memberNameImg, // or null if image is not yet available
 *      linkedin: "https://linkedin.com/in/...",
 *    },
 */

// Import images here when they are available in src/assets/images/jury/
// Example: import sarahImg from "@/assets/images/jury/sarah.png";
import sample01 from "@/assets/images/jury/sample01.png"

const juryMembers = [
  {
    name: "Name",
    role: "Designation",
    image: sample01,
    linkedin: "#",
  },
  {
    name: "Name",
    role: "Designation",
    image: null,
    linkedin: "#",
  },
  {
    name: "Name",
    role: "Designation",
    image: null,
    linkedin: "#",
  },
  {
    name: "Name",
    role: "Designation",
    image: null,
    linkedin: "#",
  },
  {
    name: "Name",
    role: "Designation",
    image: null,
    linkedin: "#",
  },
  {
    name: "Name",
    role: "Designation",
    image: null,
    linkedin: "#",
  },
];

const Jury = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-40">
        <div className="w-full flex flex-col items-center">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-24 flex flex-col items-center"
          >
            <h1 className="mx-auto flex items-center justify-center" style={{
              fontFamily: "'BL Melody SemiBold', sans-serif",
              fontWeight: 600,
              fontSize: '48px',
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center',
              width: '202px',
              height: '58px',
              transform: 'rotate(0deg)',
              opacity: 1
            }}>
              The <span className="text-[#0052FF] ml-[0.25em]">Jury</span>
            </h1>
            <p className="mx-auto text-muted-foreground opacity-70" style={{
              fontFamily: "'BL Melody Book', sans-serif",
              fontWeight: 400,
              fontSize: '24px',
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center',
              width: '198px',
              height: '29px',
              opacity: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              Short Description
            </p>
          </motion.div>

          {/* Jury Members Grid */}
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center"
            style={{
              width: '1450px',
              height: '970px',
              gap: '100px',
              opacity: 1,
              transform: 'rotate(0deg)'
            }}
          >
            {juryMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col group"
                style={{ width: '350px' }}
              >
                {/* Image Slot - 350x350 Frame */}
                <div 
                  className="bg-[#E5E5E5] mb-6 overflow-hidden relative"
                  style={{
                    width: '350px',
                    height: '350px',
                    opacity: 1,
                    transform: 'rotate(0deg)'
                  }}
                >
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground/20 italic">
                      {/* Placeholder for minimalist aesthetic */}
                    </div>
                  )}
                </div>

                {/* Info Section */}
                <div className="w-full" style={{ width: '350px' }}>
                  <div className="pb-1 border-b-[1px] border-black mb-2">
                    <h3 style={{
                      fontFamily: "'BL Melody Medium', sans-serif",
                      fontWeight: 500,
                      fontSize: '32px',
                      lineHeight: '100%',
                      letterSpacing: '-0.06em',
                      textAlign: 'left',
                      verticalAlign: 'middle',
                      height: '38px',
                      opacity: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-start'
                    }} className="transition-colors group-hover:text-[#0052FF]">
                      {member.name}
                    </h3>
                  </div>

                  <p style={{
                    fontFamily: "'BL Melody Book', sans-serif",
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '100%',
                    letterSpacing: '-0.06em',
                    verticalAlign: 'middle',
                    width: '350px',
                    height: '17px',
                    opacity: 1,
                    display: 'flex',
                    alignItems: 'center'
                  }} className="text-muted-foreground">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Jury;
