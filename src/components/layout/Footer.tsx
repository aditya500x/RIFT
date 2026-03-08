import { Link } from "react-router-dom";
import revaUniversityLogo from "@/assets/logo/reva-university.png";
import whatsappIcon from "@/assets/LOGO_TRANSPARENT/whatsapp.png";
import linkedinIcon from "@/assets/LOGO_TRANSPARENT/linkedin.png";
import footerGeometric from "@/assets/LOGO_TRANSPARENT/footer.png";

const Footer = () => {
  return (
    <footer id="contact" className="mt-10 bg-background text-foreground border-t border-foreground">
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div
          className="hidden md:block h-56 border-r border-b border-foreground"
          style={{
            backgroundImage: `url(${footerGeometric})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div className="h-56 border-r border-b border-foreground px-6 md:px-7 py-6 md:py-7">
          <div className="space-y-0 text-sm text-foreground/80">
            <Link
              to="/faqs"
              className="flex items-center justify-between border-b border-foreground py-2 hover:text-primary transition-colors"
            >
              <span>FAQ</span>
              <span className="text-xs">↗</span>
            </Link>
            <Link
              to="/jury"
              className="flex items-center justify-between border-b border-foreground py-2 hover:text-primary transition-colors"
            >
              <span>Jury</span>
              <span className="text-xs">↗</span>
            </Link>
            <Link
              to="/team"
              className="flex items-center justify-between border-b border-foreground py-2 hover:text-primary transition-colors"
            >
              <span>Team</span>
              <span className="text-xs">↗</span>
            </Link>
          </div>
        </div>

        <div className="h-56 border-b border-foreground px-6 md:px-8 py-6 md:py-7 flex items-center justify-center">
          <div className="w-full max-w-[320px] space-y-4">
            <img
              src={revaUniversityLogo}
              alt="REVA University"
              className="h-14 w-auto object-contain"
            />
            <p className="text-xs text-foreground/75 leading-relaxed">
              Rukmini Knowledge Park, Yelahanka,
              <br />
              Kattiganahalli, Sathanur,
              <br />
              Bengaluru, Karnataka
              <br />
              560064
            </p>
          </div>
        </div>
      </div>

      {/* Middle Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-b border-foreground text-xs text-foreground/75">
        <div className="border-r border-foreground py-3 text-center"></div>
        <div className="border-r border-foreground py-3">
          <div className="flex items-center justify-center gap-3 flex-col md:flex-row">
            <div className="flex items-center gap-4 order-1 md:order-2">
              <a
                href="https://www.linkedin.com/company/gdg-on-campus-reva-university-bengaluru-india/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
                aria-label="LinkedIn"
              >
                <img src={linkedinIcon} alt="LinkedIn" className="h-5 w-5 object-contain" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
                aria-label="WhatsApp"
              >
                <img src={whatsappIcon} alt="WhatsApp" className="h-5 w-5 object-contain" />
              </a>
            </div>
            <span className="order-2 md:order-1">Social Icons</span>
          </div>
        </div>
        <div className="py-3 text-center"></div>
      </div>

      {/* Bottom Row */}
      <div className="py-2.5 text-center text-xs text-foreground/65">@{new Date().getFullYear()} REVARIFT</div>
    </footer>
  );
};

export default Footer;
