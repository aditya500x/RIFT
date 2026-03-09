import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./static/Team.css";
import bottomTriangle from "@/assets/images/team/bottom-triangle.svg";
import topTriangle from "@/assets/images/team/top-triangle.svg";
import mainPhoto from "@/assets/images/team/main.png";
import linkedinIcon from "@/assets/icons/linkedin.svg";
import xIcon from "@/assets/icons/x.svg";
import gdgTeam from "@/assets/images/team/gdg-team.jpeg";
import MarqueeSection from "@/sections/MarqueeSection";

/*
 * ============================================================
 *  TEAM PAGE REWRITE
 *  Includes "About us" intro + 3-Column Profile Layout
 * ============================================================
 */

// ... (interface remains same)
interface TeamMember {
  name: string;
  designation: string;
  photo: string;
  linkedin: string;
  twitter: string;
}

const TEAM_MEMBERS: (TeamMember | null)[] = [
  /* ── Row 1 ─────────────────────────────────────────── */
  { name: "SOMESHWAR", designation: "Designation", photo: mainPhoto, linkedin: "#", twitter: "#" },
  null,   // placeholder
  null,   // placeholder

  /* ── Row 2 ─────────────────────────────────────────── */
  null,   // placeholder
  null,   // placeholder
  null,   // placeholder

  /* ── Row 3 ─────────────────────────────────────────── */
  null,   // placeholder
  null,   // placeholder
  null,   // placeholder
];

function ProfileCard({ member }: { member: TeamMember | null }) {
  return (
    <div className="profile-card">
      <div className="blue-box">
        {member && (
          <div className="social-icons">
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img className="social-icon" src={linkedinIcon} alt="LinkedIn" draggable={false} />
            </a>
            <a href={member.twitter} target="_blank" rel="noopener noreferrer" aria-label="X">
              <img className="social-icon" src={xIcon} alt="X" draggable={false} />
            </a>
          </div>
        )}
        <img className="triangle-left" src={bottomTriangle} alt="" aria-hidden="true" draggable={false} />
        {member && (
          <img className="profile-photo" src={member.photo} alt={member.name} draggable={false} />
        )}
        <img className="triangle-right" src={topTriangle} alt="" aria-hidden="true" draggable={false} />
      </div>
      {member && (
        <div className="profile-info">
          <p className="profile-name">{member.name}</p>
          <p className="profile-designation">{member.designation}</p>
        </div>
      )}
    </div>
  );
}

export default function Team() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navbar backdrop fix: Ensures the transparent navbar area stays white */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-white z-[45]" />
      <Navbar />
      
      <main>
        {/* ── About Us Section (Black) ── */}
        <section className="bg-black text-white pt-16 pb-32">
          {/* Hero Image / Header area - Full width, attached to top and sides */}
          <div className="relative w-full h-[250px] md:h-[450px] mb-12 flex items-center justify-center overflow-hidden">
            <img 
              src={gdgTeam} 
              alt="GDG Team" 
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            {/* Solid fade-to-black at the bottom to hide the image edge */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black"></div>
          </div>

          <div className="container max-w-6xl px-4 flex flex-col items-center">
            <h2 className="mx-auto flex items-center justify-center text-center" style={{ 
              fontFamily: "'BL Melody SemiBold', sans-serif",
              fontWeight: 600,
              fontSize: '48px',
              lineHeight: '100%',
              width: '206px',
              height: '58px',
              marginBottom: '64px'
            }}>
              About us
            </h2>

            {/* Centered Content Blocks without boxes */}
            <div className="w-full max-w-4xl space-y-16 mt-16">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Mission & Vision</h3>
                <p className="text-white/60 text-sm md:text-base font-normal leading-relaxed mx-auto max-w-3xl">
                  RIFT is more than just a hackathon; it's a movement towards India's technological self-reliance. 
                  Our mission is to foster a culture of rapid innovation and problem-solving among the next generation of engineers. 
                  By bringing together the brightest minds in Bangalore, we aim to bridge the gap between academic theory and real-world impact.
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Empowering Innovators</h3>
                <p className="text-white/60 text-sm md:text-base font-normal leading-relaxed mx-auto max-w-3xl">
                  Through the REVA Group and our diverse network of partners, we provide participants with 
                  the high-performance environment needed to build, test, and scale tech solutions 
                  that address national challenges across healthcare, sustainability, and fintech.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 pt-8">
                <div className="text-center">
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-4">Community Driven</h4>
                  <p className="text-white/60 text-sm font-normal leading-relaxed mx-auto max-w-[280px]">
                    Organizing with GDG (RIFT) - Empowering local developer communities and fostering collaboration across the ecosystem.
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-4">Strategic Partnerships</h4>
                  <p className="text-white/60 text-sm font-normal leading-relaxed mx-auto max-w-[280px]">
                    Collaborating with industry leaders and government bodies to scale India's digital future through technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <MarqueeSection />

        {/* ── The Team Grid Section ── */}
        <section className="bg-white pt-24 pb-40">
          <div className="container flex flex-col items-center">
            {/* Header Section */}
            <div className="text-center mb-44 md:mb-60 flex flex-col items-center">
              <h1 className="mx-auto flex items-center justify-center font-bold" style={{
                fontFamily: "'BL Melody SemiBold', sans-serif",
                fontSize: '48px',
                lineHeight: '100%',
                textAlign: 'center',
              }}>
                The <span className="text-[#0052FF] ml-[0.25em]">Team</span>
              </h1>
              <p className="mx-auto mt-4 text-black font-normal" style={{
                fontFamily: "'BL Melody Book', sans-serif",
                fontSize: '24px',
                lineHeight: '100%',
                textAlign: 'center',
              }}>
                Meet the team
              </p>
            </div>

            {/* 3×3 Team Grid */}
            <div className="team-grid">
              {TEAM_MEMBERS.map((member, index) => (
                <ProfileCard key={member?.name ?? `placeholder-${index}`} member={member} />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
