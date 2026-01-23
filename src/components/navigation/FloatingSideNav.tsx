import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "hero", label: "Home" },
  { id: "problem", label: "Challenge" },
  { id: "market", label: "Opportunity" },
  { id: "vision", label: "Vision" },
  { id: "capabilities", label: "Platform" },
];

export const FloatingSideNav = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Show nav after scrolling past hero
      setIsVisible(scrollY > 400);

      // Determine active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }

      // Default to hero if at top
      if (scrollY < 200) {
        setActiveSection("hero");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-3"
        >
          {sections.map((section, index) => (
            <motion.button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group flex items-center gap-3 text-left"
            >
              {/* Indicator dot/line */}
              <div className="relative">
                <motion.div
                  className={`w-1 h-1 rounded-full transition-all duration-300 ${
                    activeSection === section.id
                      ? "bg-primary scale-150"
                      : "bg-muted-foreground/30 group-hover:bg-muted-foreground/60"
                  }`}
                />
                {activeSection === section.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 w-1 h-1 rounded-full bg-primary"
                    style={{ boxShadow: "0 0 8px hsl(var(--primary) / 0.5)" }}
                  />
                )}
              </div>

              {/* Label */}
              <span
                className={`text-[11px] uppercase tracking-[0.15em] font-medium transition-all duration-300 ${
                  activeSection === section.id
                    ? "text-foreground opacity-100"
                    : "text-muted-foreground opacity-0 group-hover:opacity-100"
                }`}
              >
                {section.label}
              </span>
            </motion.button>
          ))}

          {/* Connecting line */}
          <div className="absolute left-[2px] top-1 bottom-1 w-px bg-border/30 -z-10" />
        </motion.nav>
      )}
    </AnimatePresence>
  );
};