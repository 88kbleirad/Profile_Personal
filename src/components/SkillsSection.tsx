import { Card, CardContent } from '@/components/ui/card';
import { 
  Server, 
  Shield, 
  Code, 
  Monitor, 
  Network, 
  Cloud,
  Zap
} from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Network Devices",
      icon: <Server className="w-8 h-8" />,
      skills: ["Cisco IOS"],
      color: "tech-blue"
    },
    {
      title: "Security & Protocols",
      icon: <Shield className="w-8 h-8" />,
      skills: ["Firewall", "VPN", "Network Security"],
      color: "tech-purple"
    },
    {
      title: "Network Design",
      icon: <Network className="w-8 h-8" />,
      skills: ["VLANs", "Subnetting", "Routing & Switching"],
      color: "tech-cyan"
    },
    {
      title: "Automation & Programming",
      icon: <Code className="w-8 h-8" />,
      skills: ["Python", "Network Automation", "Scripting"],
      color: "tech-blue"
    },
    {
      title: "Monitoring & Analysis",
      icon: <Monitor className="w-8 h-8" />,
      skills: ["Wireshark", "Network Monitoring"],
      color: "tech-purple"
    },
    {
      title: "Virtualization & Tools",
      icon: <Cloud className="w-8 h-8" />,
      skills: ["GNS3", "Linux"],
      color: "tech-cyan"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-tech bg-clip-text text-transparent">
            My Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive toolkit for modern network engineering and infrastructure management
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-500 group hover:shadow-xl hover:shadow-primary/10 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`text-${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted/50 transition-colors duration-200"
                    >
                      <Zap className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;