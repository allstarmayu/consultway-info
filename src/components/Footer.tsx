import logo from "@/assets/consultway-logo.svg";

const footerLinks = {
  Company: ["About", "Services", "How It Works", "Contact"],
  Resources: ["FAQ", "Testimonials", "Privacy Policy", "Terms of Service"],
};

const Footer = () => {
  return (
    <footer className="bg-foreground py-16 lg:py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <a href="#home" className="flex items-center">
              <img src={logo} alt="Consultway Infotech" className="h-36 w-auto object-contain" />
            </a>
            <p className="text-primary-foreground/40 text-sm mt-4 leading-relaxed max-w-xs">
              Connecting private sector companies with government-backed infrastructure and solar projects across India.
            </p>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-sm font-semibold text-primary-foreground mb-4">{heading}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-sm text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/30">
            © 2026 Consultway Infotech. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
