import banjiLogo from "@/assets/banji-logo.png";

export const Footer = () => {
  return (
    <footer className="border-t border-border/30">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <img src={banjiLogo} alt="BANJI" className="w-6 h-6 object-contain" />
            <span className="text-[14px] font-medium text-foreground tracking-[-0.01em]">BANJI</span>
          </div>

          {/* Copyright */}
          <p className="text-[12px] text-muted-foreground">
            © {new Date().getFullYear()} BANJI Technologies
          </p>

          {/* Links */}
          <div className="flex items-center gap-5">
            <a href="#privacy" className="text-[12px] text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#terms" className="text-[12px] text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
