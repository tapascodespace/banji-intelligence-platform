import quantoraLogo from "@/assets/quantora-logo.png";

export const Footer = () => {
  return (
    <footer className="border-t border-border/20">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img src={quantoraLogo} alt="Quantora" className="w-6 h-6 object-contain" />
            <span className="text-[15px] font-semibold text-foreground tracking-[-0.01em]">Quantora</span>
          </div>

          {/* Copyright */}
          <p className="text-[14px] text-muted-foreground">
            © {new Date().getFullYear()} Quantora. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a href="#privacy" className="text-[14px] text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#terms" className="text-[14px] text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};