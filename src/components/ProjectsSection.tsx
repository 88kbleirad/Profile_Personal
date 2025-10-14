import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Network, 
  Shield, 
  Search, 
  Layers,
  ExternalLink,
  Github,
  Eye
} from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Campus Network Design",
      description: "Complete network topology design for a multi-building campus environment using Cisco Packet Tracer. Includes core, distribution, and access layers with redundancy and load balancing.",
      technologies: ["Cisco Packet Tracer", "OSPF", "VLANs", "STP", "HSRP"],
      icon: <Network className="w-8 h-8 text-tech-blue" />,
      features: [
        "3-tier hierarchical design",
        "Inter-VLAN routing",
        "Redundant connectivity",
        "QoS implementation"
      ],
      status: "Completed",
      gradient: "from-tech-blue/20 to-tech-purple/20"
    },
    {
      title: "Automated IP Scanner",
      description: "Python-based network monitoring tool that automatically scans for active hosts, performs port scanning, and generates detailed network reports with real-time status updates.",
      technologies: ["Python", "Socket Programming", "Threading"],
      icon: <Search className="w-8 h-8 text-tech-cyan" />,
      features: [
        "Multi-threaded scanning",
        "Port discovery",
        "Network mapping",
        "Automated reporting"
      ],
      status: "In Progress",
      gradient: "from-tech-cyan/20 to-tech-blue/20"
    },
    {
      title: "VLAN & Subnetting Lab",
      description: "Comprehensive lab setup demonstrating Layer 2 and Layer 3 network segmentation. Practical implementation of VLANs, trunk links, and inter-VLAN routing scenarios.",
      technologies: ["GNS3", "Cisco IOS", "VLANs", "Trunking", "SVI"],
      icon: <Layers className="w-8 h-8 text-tech-blue" />,
      features: [
        "VLAN configuration",
        "Trunk port setup",
        "Router-on-a-stick",
        "VLAN security"
      ],
      status: "Completed",
      gradient: "from-tech-blue/20 to-tech-purple/20"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-navy-medium/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-tech bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world networking projects demonstrating expertise in design, security, and automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-500 group hover:shadow-2xl hover:shadow-primary/10 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} group-hover:scale-110 transition-transform duration-300`}>
                      {project.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Completed' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                          : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-muted/50 text-muted-foreground rounded text-sm border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 hover:bg-primary/10 hover:border-primary hover:scale-105 transition-all duration-300"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="hover:bg-primary/10 hover:border-primary hover:scale-105 transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;