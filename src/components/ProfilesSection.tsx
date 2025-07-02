
import React from 'react';
import { ExternalLink } from 'lucide-react';
import DraggableCard from './DraggableCard';
import { SiCodechef, SiCodeforces, SiLeetcode, SiGeeksforgeeks, SiGithub, SiLinkedin, SiHackerrank, SiStackoverflow } from "react-icons/si";
const ProfilesSection = () => {
  const profiles = [
    {
      name: 'GitHub',
      icon: SiGithub,
      url: 'https://github.com/muthuhariharan2001',
      color: 'bg-gray-800 hover:bg-gray-700',
      description: 'Open source contributions',
      stats: '50+ repos'
    },
    {
      name: 'LinkedIn',
      icon: SiLinkedin,
      url: 'https://www.linkedin.com/in/muthu-hariharan-582882218/',
      color: 'bg-blue-600 hover:bg-blue-700',
      description: 'Professional network',
      stats: '500+ connections'
    },
    {
      name: 'LeetCode',
      icon: SiLeetcode,
      url: 'https://leetcode.com/muthuhariharan2001/',
      color: 'bg-orange-500 hover:bg-orange-600',
      description: 'Algorithm practice',
      stats: '200+ problems'
    },
    {
      name: 'GeeksforGeeks',
      icon: SiGeeksforgeeks,
      url: 'https://www.geeksforgeeks.org/user/muthuharih8miw/',
      color: 'bg-green-600 hover:bg-green-700',
      description: 'Programming tutorials',
      stats: '150+ articles'
    },
    {
      name: 'CodeChef',
      icon: SiCodechef,
      url: 'https://www.codechef.com/users/hariharan2811/',
      color: 'bg-brown-600 hover:bg-brown-700',
      description: 'Competitive programming',
      stats: '2-star rating'
    },
    {
      name: 'Codeforces',
      icon: SiCodeforces,
      url: 'https://codeforces.com/profile/Muthu_Hariharan/',
      color: 'bg-red-600 hover:bg-red-700',
      description: 'Programming contests',
      stats: '1400+ rating'
    },
    {
      name: 'HackerRank',
      icon: SiHackerrank,
      url: 'https://www.hackerrank.com/profile/muthuhariharan21/',
      color: 'bg-emerald-600 hover:bg-emerald-700',
      description: 'Coding challenges',
      stats: '5-star rating'
    },
    {
      name: 'Stack Overflow',
      icon: SiStackoverflow,
      url: 'https://stackoverflow.com/users/27640978/muthu-hariharan',
      color: 'bg-purple-600 hover:bg-purple-700',
      description: 'Q&A for developers',
      stats: '100+ answers'
    },
    
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-royal-900/10 to-gold-900/10"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <DraggableCard id="profiles-header" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Technical Profiles</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with me across various coding platforms and professional networks
          </p>
        </DraggableCard>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {profiles.map((profile, index) => (
            <DraggableCard
              key={profile.name}
              id={`profile-${index}`}
              className="premium-card hover:scale-105 transition-all duration-300 group"
            >
              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label='Visit profile'
                className="block text-center relative"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${profile.color} flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg`}>
                  {profile.icon ? (
                    <profile.icon className="w-8 h-8 text-white" aria-label='Profile Icon' />
                  ) : (
                    <span className="text-white font-bold text-lg">
                      {profile.name.charAt(0)}
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-royal-300 transition-colors">
                  {profile.name}
                </h3>
                
                <p className="text-gray-400 text-sm mb-2">
                  {profile.description}
                </p>
                
                <div className="text-xs text-gold-400 font-medium bg-gold-900/20 px-2 py-1 rounded-full inline-block">
                  {profile.stats}
                </div>
                
                <ExternalLink className="w-4 h-4 absolute top-0 right-0 text-gray-500 group-hover:text-white transition-colors" />
              </a>
            </DraggableCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfilesSection;
