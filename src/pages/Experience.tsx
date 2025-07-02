import React from 'react';
import Navigation from '../components/Navigation';
import DraggableCard from '../components/DraggableCard';
import Footer from '../components/Footer';
import { Briefcase, Calendar, MapPin, TrendingUp } from 'lucide-react';
import {
  SiReact,
  SiNodedotjs,
  SiAmazon,
  SiDocker,
  SiTypescript,
  SiVuedotjs,
  SiFlutter,
  SiFirebase,
  SiJest,
  SiAngular,
  SiMongodb,
  SiDjango,
  SiExpress,
  SiPython,
  SiCplusplus,
  SiMysql
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';

const Experience = () => {
  const iconMap: { [key: string]: JSX.Element } = {
    'React': <SiReact className="inline mr-1 text-blue-400" />,
    'Node.js': <SiNodedotjs className="inline mr-1 text-green-400" />,
    'AWS': <SiAmazon className="inline mr-1 text-orange-400" />,
    'Docker': <SiDocker className="inline mr-1 text-blue-300" />,
    'TypeScript': <SiTypescript className="inline mr-1 text-blue-500" />,
    'Vue.js': <SiVuedotjs className="inline mr-1 text-green-400" />,
    'Flutter': <SiFlutter className="inline mr-1 text-sky-400" />,
    'Firebase': <SiFirebase className="inline mr-1 text-yellow-400" />,
    'Jest': <SiJest className="inline mr-1 text-pink-400" />,
    'Angular': <SiAngular className="inline mr-1 text-red-400" />,
    'MongoDB': <SiMongodb className="inline mr-1 text-green-600" />,
    'Django' : <SiDjango className="inline mr-1 text-green-700" />,
    'ExpressJS': <SiExpress className="inline mr-1 text-black-600" />,
    'Java': <FaJava className="inline mr-1 text-orange-600" />,
    'Python': <SiPython className="inline mr-1 text-yellow-500" />,
    'C++': <SiCplusplus className="inline mr-1 text-blue-600" />,
    'SQL': <SiMysql className="inline mr-1 text-blue-700" />
  };

  const experienceData = [
    {
      title: 'Technical Trainer',
      company: 'Saveetha Engineering College',
      location: 'Chennai',
      period: ' February 2025 - Present',
      type: 'Full-time',
      description: 'Leading development of scalable web applications using React, Node.js, and AWS. Managing a team of 5 developers and driving technical architecture decisions.',
      achievements: [
        'Led a team of 5 developers to deliver 3 major projects on time',
        'Students trained in modern web technologies like React, Node.js, and Angular',
        'Students achieved 90%+ satisfaction rate in feedback surveys',
        'Created comprehensive course materials and interactive coding exercises for Students for their learning',
      ],
      technologies: ['Next', 'Java', 'Python', 'C++', 'SQL']
    },
    {
      title: 'Software Trainer',
      company: 'CADD Centre & Livewire',
      location: 'Tuticorin',
      period: 'February 2024 - September 2024',
      type: 'Full-time',
      description: 'Developed responsive web applications and mobile apps. Collaborated with design team to implement pixel-perfect UI/UX designs.',
      achievements: [
        'Trained 100+ students in web development and Software Engineering',
        'Hosted 10+ interactive coding workshops',
        'Improved student engagement by 70%'
      ],
      technologies: ['React', 'Angular','MongoDB', 'ExpressJS', 'Django' ,'Firebase']
    },
    {
      title: 'Online Tutor',
      company: 'Focus Edumatics Private Limited',
      location: 'Remote',
      period: 'October 2022 - July 2023',
      type: 'Full-time',
      description: 'Developed responsive web applications and mobile apps. Collaborated with design team to implement pixel-perfect UI/UX designs.',
      achievements: [
        'Conducted 200+ online coding sessions',
        'Created interactive learning materials',
        'Received 95% positive feedback from students'
      ],
      technologies: []
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <DraggableCard id="experience-title" className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Experience</h1>
              <p className="text-xl text-gray-400">My professional journey and accomplishments</p>
            </DraggableCard>

            <div className="space-y-8">
              {experienceData.map((exp, index) => (
                <DraggableCard key={index} id={`experience-${index}`} className="premium-card">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gold-600 rounded-full flex items-center justify-center">
                        <Briefcase className="text-white" size={24} />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                          <h4 className="text-xl text-royal-300">{exp.company}</h4>
                        </div>
                        <div className="flex flex-col items-start md:items-end mt-2 md:mt-0">
                          <div className="flex items-center text-gold-400 mb-1">
                            <Calendar size={16} className="mr-2" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center text-gray-400">
                            <MapPin size={16} className="mr-2" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <span className="inline-block px-3 py-1 bg-royal-600/30 text-royal-200 rounded-full text-sm mb-4">
                        {exp.type}
                      </span>
                      
                      <p className="text-gray-400 mb-6">{exp.description}</p>
                      
                      <div className="mb-6">
                        <h5 className="text-white font-semibold mb-3 flex items-center">
                          <TrendingUp size={16} className="mr-2" />
                          Key Achievements
                        </h5>
                        <ul className="list-disc list-inside text-gray-400 space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="text-white font-semibold mb-3">Technologies Used</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gold-600/30 text-gold-200 rounded-full text-sm flex items-center gap-1"
                            >
                              {iconMap[tech] || '💻'} {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </DraggableCard>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Experience;
