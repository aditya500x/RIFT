import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logoFull from "@/assets/logo/2nd_main_3.png";

const navLinks = [
  { label: "About", href: "#about", type: "hash" },
  { label: "Tracks", href: "#tracks", type: "hash" },
  { label: "Schedule", href: "#schedule", type: "hash" },
  { label: "Contact", href: "#contact", type: "hash" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (event: React.MouseEvent<HTMLElement>, link: typeof navLinks[0]) => {
    event.preventDefault();

    if (link.type === "route") {
      setOpen(false);
      navigate(link.href);
      return;
    }

    if (!isHomePage) {
      setOpen(false);
      // Small delay on mobile to let menu start closing
      setTimeout(() => {
        navigate(`/${link.href}`);
      }, open ? 100 : 0);
      return;
    }

    const targetId = link.href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      setOpen(false);
      // On mobile, wait for menu to begin closing so scroll target is accurate
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", link.href);
      }, open ? 150 : 0);
    } else {
      setOpen(false);
    }
  };

  const registerLink = { label: "Register", href: "#register", type: "hash" as const };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-background/80 backdrop-blur-sm"
      } border-b border-border`}
    >
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoFull} alt="REVA RIFT" className="h-10 md:h-11" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-10">
            {navLinks.map((link) => (
              link.type === "route" ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="nav-link text-sm font-semibold text-foreground hover:text-primary transition-colors py-1"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(event) => handleNavClick(event, link)}
                  className="nav-link text-sm font-semibold text-foreground hover:text-primary transition-colors py-1"
                >
                  {link.label}
                </a>
              )
            ))}
          </div>
          <a
            href="#register"
            onClick={(event) => handleNavClick(event, registerLink)}
            className="btn-shine inline-flex items-center justify-center bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Register
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-6 pt-5 pb-6 text-center">
              <div className="border-t border-border/70 pt-2">
            {navLinks.map((link, i) => (
              link.type === "route" ? (
                <motion.div
                  key={link.label}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-base font-semibold text-foreground hover:text-foreground focus:text-foreground active:text-foreground md:hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ) : (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(event) => handleNavClick(event, link)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="block py-3 text-base font-semibold text-foreground hover:text-foreground focus:text-foreground active:text-foreground md:hover:text-primary transition-colors"
                >
                  {link.label}
                </motion.a>
              )
            ))}
              </div>
            <a
              href="#register"
              onClick={(event) => {
                handleNavClick(event, registerLink);
                setOpen(false);
              }}
              className="btn-shine mt-4 inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-full text-base font-semibold hover:opacity-90 transition-opacity w-full max-w-xs"
            >
              Register
            </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
