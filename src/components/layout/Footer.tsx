import banjiLogo from "@/assets/banji-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-background-deep border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img src={banjiLogo} alt="BANJI" className="w-8 h-8 object-contain" />
            <span className="font-display font-semibold text-lg text-foreground tracking-tight">BANJI</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} BANJI Technologies. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a href="#privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
