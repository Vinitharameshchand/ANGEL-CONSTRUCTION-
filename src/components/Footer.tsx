import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent opacity-5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Company Brief */}
          <div className="space-y-6">
            <Link to="/" className="flex flex-col group">
              <span className="text-3xl font-black tracking-tighter leading-none group-hover:text-accent transition-colors duration-200">
                ANGEL
              </span>
              <span className="text-sm font-bold tracking-widest text-accent">
                CONSTRUCTION
              </span>
            </Link>
            <p className="text-slate-300 leading-relaxed max-w-sm">
              ANGEL Civil Construction is a professional construction company specializing in residential, commercial, and infrastructure projects.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="p-2 bg-white/5 hover:bg-accent rounded-full transition-all duration-300 rotate-12 hover:rotate-0 transform">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-accent rounded-full transition-all duration-300 -rotate-6 hover:rotate-0 transform">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-accent rounded-full transition-all duration-300 rotate-3 hover:rotate-0 transform">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-accent rounded-full transition-all duration-300 rotate-8 hover:rotate-0 transform">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold flex items-center space-x-2 border-b border-white/10 pb-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              <span>Quick Links</span>
            </h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <Link 
                    to={link === 'Home' ? '/' : `/${link.toLowerCase()}`} 
                    className="text-slate-300 hover:text-accent hover:translate-x-2 transition-all duration-200 inline-flex items-center space-x-2 group"
                  >
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold flex items-center space-x-2 border-b border-white/10 pb-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              <span>Contact Info</span>
            </h3>
            <div className="space-y-5">
              <div className="flex items-start space-x-4 group cursor-pointer">
                <div className="p-2.5 bg-accent text-white rounded-lg shadow-lg rotate-12 group-hover:rotate-0 transition-transform">
                  <MapPin size={18} />
                </div>
                <p className="text-slate-300 text-sm leading-relaxed group-hover:text-white transition-colors">
                  No. 319-H, 1st Floor, 2nd Street, Gandhipuram, Coimbatore - 641012
                </p>
              </div>
              <a href="tel:+919360021210" className="flex items-center space-x-4 group">
                <div className="p-2.5 bg-accent text-white rounded-lg shadow-lg -rotate-12 group-hover:rotate-0 transition-transform">
                  <Phone size={18} />
                </div>
                <p className="text-slate-300 group-hover:text-white transition-colors">+91 93600 21210</p>
              </a>
              <a href="mailto:arunpradishyr09@gmail.com" className="flex items-center space-x-4 group">
                <div className="p-2.5 bg-accent text-white rounded-lg shadow-lg rotate-6 group-hover:rotate-0 transition-transform">
                  <Mail size={18} />
                </div>
                <p className="text-slate-300 group-hover:text-white transition-colors break-all">arunpradishyr09@gmail.com</p>
              </a>
            </div>
          </div>

          {/* Newsletter / CTA */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold border-b border-white/10 pb-2">Get Started</h3>
            <p className="text-slate-300 text-sm">
              Ready to start your next project? Get in touch with our experts.
            </p>
            <Link to="/contact" className="block">
              <button className="w-full bg-accent hover:bg-orange-600 text-white font-bold py-4 rounded-lg shadow-xl shadow-accent/20 transition-all transform hover:-translate-y-1">
                Request a Quote
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-slate-400 text-sm">
          <p>© {currentYear} Angel Construction. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
