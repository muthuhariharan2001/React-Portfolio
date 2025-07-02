import React from 'react';
import DraggableCard from './DraggableCard';
import {
  Code2,
  Database,
  Palette,
  Server,
  Monitor
} from 'lucide-react';
import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiPython,
  SiMysql,
  SiSqlite,
  SiOracle,
  SiMongodb,
  SiReact,
  SiAngular,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiFigma
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      color: 'bg-blue-500',
      skills: [
        { name: 'C', level: 85, icon: <SiC size={24} /> },
        { name: 'C++', level: 88, icon: <SiCplusplus size={24} /> },
        { name: 'Java', level: 90, icon: <FaJava size={24} /> },
        { name: 'Python', level: 94, icon: <SiPython size={24} /> },
        { name: 'JavaScript', level: 95, icon: <SiJavascript size={24} /> }
      ]
    },
    {
      title: 'Database',
      icon: Database,
      color: 'bg-green-500',
      skills: [
        { name: 'MySQL', level: 88, icon: <SiMysql size={24} /> },
        { name: 'SQL', level: 90, icon: <SiSqlite size={24} /> },
        { name: 'Oracle', level: 80, icon: <SiOracle size={24} /> },
        { name: 'MongoDB', level: 93, icon: <SiMongodb size={24} /> }
      ]
    },
    {
      title: 'Frontend',
      icon: Monitor,
      color: 'bg-purple-500',
      skills: [
        { name: 'React', level: 95, icon: <SiReact size={24} /> },
        { name: 'Angular', level: 80, icon: <SiAngular size={24} /> },
        { name: 'HTML', level: 98, icon: <SiHtml5 size={24} /> },
        { name: 'CSS', level: 90, icon: <SiCss3 size={24} /> },
        { name: 'Bootstrap', level: 90, icon: <SiBootstrap size={24} /> },
        { name: 'Tailwind', level: 92, icon: <SiTailwindcss size={24} /> }
      ]
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'bg-orange-500',
      skills: [
        { name: 'Node.js', level: 90, icon: <SiNodedotjs size={24} /> },
        { name: 'Express', level: 94, icon: <SiExpress size={24} /> },
        { name: 'Django', level: 90, icon: <SiDjango size={24} /> }
      ]
    },
    {
      title: 'UI/UX Design',
      icon: Palette,
      color: 'bg-pink-500',
      skills: [
        { name: 'Figma', level: 85, icon: <SiFigma size={24} /> }
      ]
    }
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <DraggableCard id="skills-title" className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">Technical Skills</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Technologies I master and love working with
          </p>
        </DraggableCard>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <DraggableCard key={category.title} id={`category-${categoryIndex}`} className="premium-card">
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 ${category.color} rounded-lg`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl text-white mb-2.5">{skill.icon}</span>
                        <h4 className="text-lg font-semibold text-white mb-3">{skill.name}</h4>
                        <span className="ml-auto text-gold-400 font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full ${category.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${skillIndex * 0.1}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </DraggableCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
