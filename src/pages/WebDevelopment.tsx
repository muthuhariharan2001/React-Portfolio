import React from "react";
import Navigation from "../components/Navigation";
import DraggableCard from "../components/DraggableCard";
import Footer from "../components/Footer";
import { Code, Globe, Smartphone, Zap, Shield, Users } from "lucide-react";
import { SiDjango, SiSecurityscorecard, SiWebassembly } from "react-icons/si";
import {
  SiReact,
  SiAngular,
  SiNodedotjs,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

const technologies = [
  { name: "React", icon: <SiReact size={32} className="text-cyan-400" /> },
  { name: "Angular", icon: <SiAngular size={32} className="text-red-500" /> },
  {
    name: "Node.js",
    icon: <SiNodedotjs size={32} className="text-green-500" />,
  },
  { name: "Python", icon: <SiPython size={32} className="text-blue-400" /> },
  {
    name: "JavaScript",
    icon: <SiJavascript size={32} className="text-yellow-300" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={32} className="text-blue-400" />,
  },
  { name: "MongoDB", icon: <SiMongodb size={32} className="text-green-600" /> },
  {
    name: "Django",
    icon: <SiDjango size={32} className="text-green-600" />,
  },
];

const WebDevelopment = () => {
  const services = [
    {
      icon: SiWebassembly,
      title: "Custom Web Applications",
      description:
        "Build tailored web solutions that meet your specific business needs with modern technologies.",
      features: [
        "React & Angular",
        "Node.js Backend",
        "Database Integration",
        "API Development",
      ],
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description:
        "Create websites that work flawlessly across all devices and screen sizes.",
      features: [
        "Mobile-First Approach",
        "Cross-Browser Compatibility",
        "Performance Optimization",
        "Accessibility Standards",
      ],
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Ensure your website loads fast and provides an excellent user experience.",
      features: [
        "Speed Optimization",
        "SEO Implementation",
        "Code Splitting",
        "Caching Strategies",
      ],
    },
    {
      icon: SiSecurityscorecard,
      title: "Security & Maintenance",
      description:
        "Keep your web applications secure and up-to-date with regular maintenance.",
      features: [
        "Security Audits",
        "Regular Updates",
        "Backup Solutions",
        "Performance Monitoring",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-20 pb-16">
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <DraggableCard id="web-dev-header" className="text-center mb-20">
              <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
                Web Development
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Creating modern, scalable, and high-performance web applications
              </p>
            </DraggableCard>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {services.map((service, index) => (
                <DraggableCard
                  key={service.title}
                  id={`service-${index}`}
                  className="premium-card"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-royal-600 rounded-lg">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2 text-gray-400"
                      >
                        <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </DraggableCard>
              ))}
            </div>

            <DraggableCard id="web-dev-tech" className="premium-card">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                Technologies I Use
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {technologies.map(({ name, icon }) => (
                  <div
                    key={name}
                    className="text-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="mb-2 flex justify-center">{icon}</div>
                    <span className="text-white font-medium">{name}</span>
                  </div>
                ))}
              </div>
            </DraggableCard>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WebDevelopment;
