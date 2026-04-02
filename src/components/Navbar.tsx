import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsOpen(prev => {
      document.body.style.overflow = prev ? '' : 'hidden';
      return !prev;
    });
  };

  const isHeroPage = ['/', '/services', '/projects', '/about'].includes(location.pathname);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-border py-3'
            : isHeroPage
            ? 'bg-transparent py-5'
            : 'bg-white border-b border-border py-4'
        }`}
      >
        {/* Top info bar – visible only on large screens when not scrolled */}
        {!isScrolled && isHeroPage && (
          <div className="hidden 2xl:block absolute top-0 right-0 left-0 bg-primary/80 backdrop-blur-sm text-white/60 text-[11px] font-sans tracking-wider py-1.5 px-8">
            <div className="max-w-7xl mx-auto flex justify-end items-center gap-6">
              <a href="tel:+919360021210" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone size={12} />
                <span>+91 93600 21210</span>
              </a>
              <span className="text-white/20">|</span>
              <span>Mon – Sat: 9:00 AM – 7:00 PM</span>
            </div>
          </div>
        )}

        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <img
              src={logo}
              alt="Angel Construction"
              className={`h-11 w-auto object-contain transition-all duration-350 ${
                isScrolled || !isHeroPage ? '' : 'brightness-[2] contrast-125'
              }`}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-9">
            {navLinks.map(link => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `nav-link text-[11px] ${
                    isActive ? 'text-accent active' : ''
                  } ${
                    !isScrolled && isHeroPage
                      ? isActive ? 'text-accent' : 'text-white/90 hover:text-white'
                      : isActive ? 'text-accent' : 'text-muted hover:text-primary'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link to="/contact">
              <button className="btn-primary text-[11px] py-3 px-6">
                Get a Quote
              </button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className={`lg:hidden p-2.5 rounded-xl border transition-all duration-200 ${
              isScrolled || !isHeroPage
                ? 'border-border text-primary hover:bg-surface'
                : 'border-white/20 text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={toggleMenu}
        />

        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[340px] max-w-full bg-white shadow-2xl transition-transform duration-500 ease-out flex flex-col ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Panel Header */}
          <div className="flex items-center justify-between px-8 pt-6 pb-4 border-b border-border">
            <img src={logo} alt="Angel Construction" className="h-10 w-auto object-contain" />
            <button
              onClick={toggleMenu}
              className="p-2 rounded-xl hover:bg-surface text-primary transition-colors"
            >
              <X size={22} />
            </button>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col gap-1 px-6 py-8 flex-grow overflow-y-auto">
            {navLinks.map((link, idx) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                onClick={toggleMenu}
                style={{ transitionDelay: `${idx * 50}ms` }}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-4 rounded-xl font-heading font-semibold
                   text-base tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'bg-accent text-white'
                      : 'text-primary hover:bg-surface hover:text-accent'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-white/80" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Panel Footer */}
          <div className="px-6 pb-8 space-y-4 border-t border-border pt-6">
            <Link to="/contact" onClick={toggleMenu}>
              <button className="btn-primary w-full justify-center text-sm">
                Get a Free Quote
              </button>
            </Link>
            <a href="tel:+919360021210" className="flex items-center justify-center gap-2 text-muted text-sm font-sans hover:text-accent transition-colors">
              <Phone size={15} />
              <span>+91 93600 21210</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
