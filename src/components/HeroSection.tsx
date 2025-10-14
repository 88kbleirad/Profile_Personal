import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 opacity-20">
          {/* Floating tech elements */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-tech-blue rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-tech-purple rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-tech-cyan rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-tech-blue rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
          
          {/* Network connection lines */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--tech-blue))" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="hsl(var(--tech-purple))" stopOpacity="0.1"/>
              </linearGradient>
            </defs>
            <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="url(#lineGradient)" strokeWidth="1"/>
            <line x1="70%" y1="25%" x2="90%" y2="45%" stroke="url(#lineGradient)" strokeWidth="1"/>
            <line x1="20%" y1="70%" x2="40%" y2="90%" stroke="url(#lineGradient)" strokeWidth="1"/>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-tech bg-clip-text text-transparent">Le Thanh Phong</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-in">
            Network Engineer
          </h2>
          
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Hi, I'm <span className="text-primary font-semibold">Le Thanh Phong</span> — Network Engineer passionate about building 
            <span className="text-tech-blue font-semibold"> secure</span>, 
            <span className="text-tech-purple font-semibold"> scalable</span>, and 
            <span className="text-tech-cyan font-semibold"> automated</span> infrastructures.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-tech hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              onClick={scrollToContact}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
            
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="hover:bg-primary/10 hover:border-primary transition-all duration-300">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-primary/10 hover:border-primary transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;