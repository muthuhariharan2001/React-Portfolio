
import React from 'react';
import Navigation from '../components/Navigation';
import DraggableCard from '../components/DraggableCard';
import Footer from '../components/Footer';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'Full Stack Development in Python Full Stack',
      school: 'Postulate Infotech Private Limited',
      period: '2023 - 2024',
      gpa: 'First Class',
      description: 'Specialized in AI, Frontend and heavily focused on Backend by creating Rest APIs.',
      achievements: ['Created a Strong Authentication System', 'Developed a Full Stack Application based on Youtube algorithm', 'Implemented AI Features in our Company website']
    },
    {
      degree: 'Bachelor of Mathematics',
      school: 'V.O.Chidambaram College',
      period: '2019 - 2022',
      gpa: '9.2 / 10',
      description: 'Strong foundation in mathematics, algorithms and computer science fundamentals in software engineering.',
      achievements: ['Graduated with Honors', 'Top 5% of Class' ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <DraggableCard id="education-title" className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Education</h1>
              <p className="text-xl text-gray-400">My academic journey and achievements</p>
            </DraggableCard>

            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <DraggableCard key={index} id={`education-${index}`} className="premium-card">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-royal-600 rounded-full flex items-center justify-center">
                        <GraduationCap className="text-white" size={24} />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                        <div className="flex items-center text-gold-400 mt-2 md:mt-0">
                          <Calendar size={16} className="mr-2" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                      
                      <h4 className="text-xl text-royal-300 mb-2">{edu.school}</h4>
                      <div className="flex items-center mb-4">
                        <Award size={16} className="text-gold-400 mr-2" />
                        <span className="text-gold-400 font-semibold">GPA: {edu.gpa}</span>
                      </div>
                      
                      <p className="text-gray-400 mb-4">{edu.description}</p>
                      
                      <div>
                        <h5 className="text-white font-semibold mb-2 flex items-center">
                          <BookOpen size={16} className="mr-2" />
                          Key Achievements
                        </h5>
                        <ul className="list-disc list-inside text-gray-400 space-y-1">
                          {edu.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
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

export default Education;
