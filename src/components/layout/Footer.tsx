const footerLinks = {
  Product: [
    { label: "Overview", href: "#product" },
    { label: "Data Layer", href: "#data" },
    { label: "Research Labs", href: "#research" },
    { label: "Model Hub", href: "#models" },
    { label: "Execution", href: "#execution" },
    { label: "Pricing", href: "#pricing" },
  ],
  Solutions: [
    { label: "Hedge Funds", href: "#hedge-funds" },
    { label: "Asset Managers", href: "#asset-managers" },
    { label: "Quant Researchers", href: "#researchers" },
    { label: "Fintech", href: "#fintech" },
    { label: "Academia", href: "#academia" },
  ],
  Developers: [
    { label: "Documentation", href: "#docs" },
    { label: "API Reference", href: "#api" },
    { label: "SDK", href: "#sdk" },
    { label: "Status", href: "#status" },
    { label: "Changelog", href: "#changelog" },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "Careers", href: "#careers" },
    { label: "Security", href: "#security" },
    { label: "Contact", href: "#contact" },
    { label: "Legal", href: "#legal" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-background-deep border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="font-display font-bold text-primary-foreground text-sm">B</span>
              </div>
              <span className="font-display font-semibold text-lg text-foreground tracking-tight">BANJI</span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Infrastructure for quantitative research, trading, and deployment.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display font-semibold text-sm text-foreground mb-4 uppercase tracking-wider">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} BANJI Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#security" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
