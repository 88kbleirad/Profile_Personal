import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark border-t border-border/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 bg-gradient-tech bg-clip-text text-transparent">
              Le Thanh Phong
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Network Engineer passionate about building secure, scalable, 
              and automated infrastructures for the modern world.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link, index) => {
                const hrefs = ['home', 'about', 'skills', 'projects', 'contact'];
                return (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.querySelector(`#${hrefs[index]}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link}
                </button>
              );
              })}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect With Me</h4>
            <div className="space-y-3">
              <a 
                href="mailto:phonglt.23ns@vku.udn.vn"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                phonglt.23ns@vku.udn.vn
              </a>
              
              <div className="flex gap-4 pt-2">
                <a 
                  href="#"
                  className="p-2 rounded-lg bg-muted/20 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Le Thanh Phong | VKU Network Engineers
          </p>
          
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;