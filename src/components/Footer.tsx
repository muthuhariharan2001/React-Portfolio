
import React from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, MapPin, Instagram } from 'lucide-react';
import { SiInstagram } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-sm border-t border-white/10 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-3xl font-bold gradient-text mb-6">Muthu Hariharan</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Creating premium digital experiences with passion and precision.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/muthu-hariharan-582882218/" className="w-12 h-12 bg-royal-600 rounded-full flex items-center justify-center hover:bg-royal-700 transition-colors">
                <User size={20} className="text-white" aria-label='Profile' />
              </a>
              <a href="mailto:muthuhariharan2001@gmail.com" className="w-12 h-12 bg-royal-600 rounded-full flex items-center justify-center hover:bg-royal-700 transition-colors">
                <Mail size={20} className="text-white" aria-label='Mail' />
              </a>
              <a href="https://www.google.com/maps/place/Amaravati+Residency+(Guest+House)+Saveetha+University/@13.0273777,80.0171413,20z/data=!4m6!3m5!1s0x3a528b753cbfbe0f:0x2b8c3636552ff29d!8m2!3d13.0276887!4d80.0176509!16s%2Fg%2F11jr2qn5lf?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D" title='Location : Tuticorin' className="w-12 h-12 bg-royal-600 rounded-full flex items-center justify-center hover:bg-royal-700 transition-colors">
                <MapPin size={20} className="text-white" aria-label='Location Pin' />
              </a>
              {/* One more Anchor Tag for some links like Instagram */}
              <a href="https://www.instagram.com/_hari.mc_/" className="w-12 h-12 bg-royal-600 rounded-full flex items-center justify-center hover:bg-royal-700 transition-colors">
                < SiInstagram size={20} className="text-white" aria-label='Instagram' />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-gold-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-gold-400 transition-colors">About</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-gold-400 transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-gold-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/web-development" className="text-gray-400 hover:text-gold-400 transition-colors">Web Development</Link></li>
              <li><Link to="/mobile-apps" className="text-gray-400 hover:text-gold-400 transition-colors">Mobile Apps</Link></li>
              <li><Link to="/uiux-design" className="text-gray-400 hover:text-gold-400 transition-colors">UI/UX Design</Link></li>
              <li><Link to="/consulting" className="text-gray-400 hover:text-gold-400 transition-colors">Consulting</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-10 text-center text-2xl">
          <p className="text-gray-400">
            ©2025 Muthu Hariharan. All rights reserved. Built with passion and <a href="https://www.react.dev/" className='text-blue-500'>React</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
