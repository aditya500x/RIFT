import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Linkedin, Twitter } from "lucide-react";

/**
 * 💡 HOW TO ADD NEW TEAM MEMBERS:
 * 
 * 1. Ensure the member's image is in `src/assets/images/team/` (resolution: 1920x2000).
 * 2. Import the image at the top of this file:
 *    `import memberNameImg from "@/assets/images/team/member-name.png";`
 * 3. Add a new object to the `teamMembers` array below:
 *    {
 *      name: "Full Name",
 *      role: "Designation",
 *      image: memberNameImg,
 *      linkedin: "#",
 *      twitter: "#",
 *    },
 */

// Import images here
import skr from "@/assets/images/team/skr.png";

const teamMembers = [
  {
    name: "SOMESHWAR",
    role: "Designation",
    image: skr,
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "SIMRAN",
    role: "Designation",
    image: skr, // Using placeholder
    linkedin: "#",
    twitter: "#",
  }
];

const Team = () => {
  // Always show a 3x3 grid (9 items total)
  const totalSlots = 9;
  const gridItems = Array.from({ length: totalSlots }, (_, i) => teamMembers[i] || null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-40">
        <div className="w-full flex flex-col items-center">
          {/* Header Section */}
          <div className="text-center mb-24 flex flex-col items-center">
            <h1 className="mx-auto flex items-center justify-center" style={{
              fontFamily: "'BL Melody SemiBold', sans-serif",
              fontWeight: 600,
              fontSize: '48px',
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center',
              width: '222px',
              height: '58px',
              transform: 'rotate(0deg)',
              opacity: 1
            }}>
              The <span className="text-[#0052FF] ml-[0.25em]">Team</span>
            </h1>
            <p className="mx-auto" style={{
              fontFamily: "'BL Melody Book', sans-serif",
              fontWeight: 400,
              fontSize: '24px',
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center',
              width: '164px',
              height: '29px',
              opacity: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#000000'
            }}>
              Meet the team
            </p>
          </div>

          {/* 3x3 Team Members Grid */}
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mx-auto"
            style={{
              width: '1520.618px',
              marginTop: '160px',
              gap: '60px 20px',
              opacity: 1
            }}
          >
            {gridItems.map((member, index) => (
              <div
                key={index}
                className="flex flex-col relative group"
                style={{ width: '450px', minHeight: '350px' }}
              >
                {/* Icons - Top Left */}
                {member && (
                  <div className="flex gap-2 absolute top-0 left-0 z-30">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5 text-[#0052FF]" />
                    </a>
                    <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                      <Twitter className="w-5 h-5 text-[#0052FF]" />
                    </a>
                  </div>
                )}

                {/* Main Visual Area */}
                <div className="relative w-full h-[240px] flex flex-col items-center justify-end">
                  {/* Blue Slanted Shape */}
                  <div
                    className="absolute bg-[#0052FF] z-10"
                    style={{
                      width: '240px',
                      height: '140px',
                      transform: 'skewX(-40deg)',
                      bottom: '20px'
                    }}
                  />

                  {/* Member Image */}
                  {member && member.image && (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="relative z-20 h-[280px] w-auto grayscale contrast-[1.1] saturate-0 object-contain translate-y-4"
                    />
                  )}
                </div>

                {/* Footer: Name & Role */}
                <div className="mt-8 text-center px-4">
                  {member ? (
                    <>
                      <h3 style={{
                        fontFamily: "'BL Melody SemiBold', sans-serif",
                        fontWeight: 600,
                        fontSize: '36px',
                        lineHeight: '100%',
                        letterSpacing: '-0.02em',
                        textAlign: 'center',
                        textTransform: 'uppercase'
                      }}>
                        {member.name}
                      </h3>
                      <p style={{
                        fontFamily: "'BL Melody Book', sans-serif",
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '120%',
                        textAlign: 'center',
                        marginTop: '4px'
                      }}>
                        {member.role}
                      </p>
                    </>
                  ) : (
                    <div className="opacity-0">Placeholder</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
