import { Link } from 'react-router-dom';
import { Phone as PhoneIcon, Mail as MailIcon, MapPin as MapPinIcon, Facebook as FacebookIcon, Instagram as InstagramIcon, Twitter as TwitterIcon, Linkedin as LinkedinIcon, ArrowUpRight as ArrowUpRightIcon } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
          {/* Brand Info */}
          <div className="space-y-8">
            <Link to="/" className="inline-block">
              <img src={logo} alt="Angel Construction" className="h-10 w-auto brightness-[2] contrast-125" />
            </Link>
            <p className="text-white/60 font-light leading-relaxed max-w-xs text-balance">
              Your Trusted Destination for Building Your Dream Home in Tamil Nadu. With Years of Excellence, We Ensure Innovation, Aesthetics, and Reliability.
            </p>
            <div className="flex gap-4">
              {[FacebookIcon, InstagramIcon, TwitterIcon, LinkedinIcon].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:bg-accent hover:border-accent hover:text-white transition-all duration-300">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h3 className="text-lg font-heading font-black flex items-center gap-4">
              <span className="w-8 h-px bg-accent" /> Quick Links
            </h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-white/60 hover:text-accent transition-all duration-300 flex items-center gap-2 group"
                  >
                    <ArrowUpRightIcon size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-8">
            <h3 className="text-lg font-heading font-black flex items-center gap-4">
              <span className="w-8 h-px bg-accent" /> Services
            </h3>
            <ul className="space-y-4">
              {['Residential Building', 'Commercial Space', 'Interior Designing', 'Civil Infrastructure'].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="text-white/60 hover:text-accent transition-all duration-300 block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            <h3 className="text-lg font-heading font-black flex items-center gap-4">
              <span className="w-8 h-px bg-accent" /> Contact Us
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="text-accent shrink-0"><MapPinIcon size={20} /></div>
                <p className="text-white/60 text-sm font-light leading-relaxed">
                  No. 319-H, 1st Floor, 2nd Street, Gandhipuram, Coimbatore - 641012
                </p>
              </li>
              <li className="flex gap-4">
                <div className="text-accent shrink-0"><PhoneIcon size={20} /></div>
                <a href="tel:+919360021210" className="text-white/60 hover:text-accent font-bold transition-all">
                  +91 93600 21210
                </a>
              </li>
              <li className="flex gap-4">
                <div className="text-accent shrink-0"><MailIcon size={20} /></div>
                <a href="mailto:arunpradishyr09@gmail.com" className="text-white/60 hover:text-accent transition-all break-all">
                  arunpradishyr09@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em]">
            © {currentYear} Angel Construction. All Rights Reserved.
          </p>
          <div className="flex gap-10">
            <a href="#" className="text-white/30 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-[0.2em]">Privacy Policy</a>
            <a href="#" className="text-white/30 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-[0.2em]">Terms & Conditions</a>
          </div>
        </div>
      </div>

      {/* Visual Accent */}
      <div className="absolute top-0 right-0 p-8 text-white/5 pointer-events-none select-none">
        <span className="text-[12rem] font-heading font-black leading-none uppercase">Angel</span>
      </div>
    </footer>
  );
};

export default Footer;
