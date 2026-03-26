import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import logo from '../assets/logo.png';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const isTransparentPage = location.pathname === '/' || location.pathname === '/services' || location.pathname === '/projects' || location.pathname === '/about';

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full',
        isScrolled 
          ? 'bg-white shadow-xl py-4 translate-y-0' 
          : 'bg-transparent py-6'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center group">
           <img 
             src={logo} 
             alt="Angel Construction" 
             className={cn(
               "h-14 w-auto object-contain transition-all duration-300",
               isScrolled ? "brightness-100 invert" : "brightness-125 hover:scale-105"
             )} 
           />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  'font-black transition-all duration-300 uppercase tracking-widest text-[11px] hover:text-accent relative py-2 group',
                  isActive 
                    ? 'text-accent' 
                    : (isScrolled ? 'text-primary' : 'text-white drop-shadow-sm'),
                )
              }
            >
              {({ isActive }) => (
                <>
                  <span>{link.name}</span>
                  <span className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 bg-accent transform transition-transform duration-300 origin-left",
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )} />
                </>
              )}
            </NavLink>
          ))}
          <Link to="/contact">
            <button className="bg-accent hover:bg-orange-600 text-white font-black py-3 px-8 rounded-md transition-all transform hover:scale-105 shadow-lg shadow-accent/20 text-xs uppercase tracking-[0.2em] mb-0 ml-4">
              Get a Quote
            </button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "p-2 rounded-xl transition-all border",
              isScrolled 
                ? "text-primary border-slate-200 hover:bg-slate-50" 
                : "text-white border-white/20 hover:bg-white/10 shadow-lg"
            )}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden fixed inset-0 z-40 bg-primary transform transition-all duration-500 ease-in-out pt-28 px-10 overflow-hidden',
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        )}
      >
        {/* Animated BG elements for mobile menu */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent opacity-5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

        <div className="flex flex-col space-y-8 relative z-10">
          {navLinks.map((link, idx) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                cn(
                  'text-4xl font-black transition-all duration-300 transform',
                  isActive ? 'text-accent translate-x-4' : 'text-white hover:text-accent',
                  isOpen ? 'translate-x-0' : 'translate-x-10'
                )
              }
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-10 border-t border-white/10 space-y-10">
             <Link to="/contact" onClick={() => setIsOpen(false)}>
               <button className="w-full bg-accent hover:bg-orange-600 text-white font-black py-6 rounded-2xl text-xl shadow-2xl transition-all transform hover:scale-105 active:scale-95">
                 Get a Quote
               </button>
             </Link>
             
             <div className="text-white/40 font-bold uppercase tracking-[0.2em] text-[10px] space-y-4">
                <div className="flex items-center space-x-3">
                   <Phone size={14} />
                   <span>+91 93600 21210</span>
                </div>
                <div className="flex items-center space-x-3">
                   <Mail size={14} />
                   <span>arunpradishyr09@gmail.com</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
