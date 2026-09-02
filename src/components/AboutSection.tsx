import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Code, Shield, Network, Award } from 'lucide-react';
import profileImage from '@/assets/ciel_tempest_2.jpg';

const AboutSection = () => {
  const profile = {
    name: "Le Thanh Phong",
    role: "Network Engineer",
    description: "Self-taught network engineer with hands-on experience in Cisco devices, network automation using Python, and cloud networking. Passionate about designing scalable infrastructure and building tools to simplify operations.",
    highlights: ["Network Automation", "Python Scripting", "Cloud Networking", "Cisco Devices"],
    image: profileImage,
    fallback: "LP"
  };

  return (
    <section id="about" className="py-20 bg-navy-medium/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-tech bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Network engineer passionate about building robust and secure network infrastructure
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card
            className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-500 group hover:shadow-2xl hover:shadow-primary/10"
          >
            <CardContent className="p-8 text-center">
              <div className="flex flex-col items-center mb-6">
                <Avatar className="w-[300px] h-[300px] mb-4 border-4 border-primary group-hover:scale-110 transition-transform duration-300">
                  <AvatarImage src={profile.image} alt={profile.name} />
                  <AvatarFallback className="text-6xl font-bold bg-primary/20 text-primary">
                    {profile.fallback}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{profile.name}</h3>
                  <p className="text-primary font-medium">{profile.role}</p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4 text-left">
                {profile.description}
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6 text-left italic">
                Currently studying at VKU – majoring in Network and Information Security, aiming to become a professional system & network engineer.
              </p>

              <div className="space-y-2">
                <h4 className="font-semibold text-foreground flex items-center justify-center gap-2">
                  <Award className="w-4 h-4 text-primary" />
                  Key Strengths
                </h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {profile.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
