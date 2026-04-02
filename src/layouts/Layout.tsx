import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { ReactLenis } from 'lenis/react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Set Page Titles
    const pageTitle = pathname === '/' 
      ? 'Home' 
      : pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);
    document.title = `${pageTitle} | Angel Construction - Building Your Dreams`;
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ReactLenis root>
      <div className="flex flex-col min-h-screen selection:bg-accent selection:text-white">
        <Navbar />
        {/* Scroll Progress Bar */}
        <motion.div 
           className="fixed top-0 left-0 w-full h-[3px] bg-accent z-[100] origin-left"
           style={{ scaleX }}
        />
        
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />

      {/* Floating Buttons */}
      <div className="fixed bottom-10 right-10 z-50 flex flex-col items-center space-y-6">
         {/* Scroll to Top */}
         <AnimatePresence>
            {showScrollTop && (
               <motion.button
                 initial={{ opacity: 0, scale: 0, rotate: -180 }}
                 animate={{ opacity: 1, scale: 1, rotate: 0 }}
                 exit={{ opacity: 0, scale: 0, rotate: 180 }}
                 onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                 className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-slate-800 transition-all transform hover:-translate-y-2 group"
               >
                  <ArrowUp size={28} className="group-hover:animate-bounce" />
               </motion.button>
            )}
         </AnimatePresence>

         {/* WhatsApp Button */}
         <motion.a 
            href="https://wa.me/919360021210" 
            target="_blank" 
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1, rotate: 12 }}
            className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-200 relative group"
         >
            <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20 group-hover:hidden" />
            <MessageCircle size={36} fill="white" />
            
            {/* Tooltip */}
            <div className="absolute right-full mr-4 bg-white text-primary text-xs font-black py-3 px-6 rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-100 uppercase tracking-widest hidden md:block">
               Chat with us
            </div>
         </motion.a>
      </div>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60] origin-left">
         <motion.div 
            className="h-full bg-accent"
            style={{ scaleX: 0 }} // This would normally use useScroll from framer-motion
         />
        </div>
      </div>
    </ReactLenis>
  );
};

export default Layout;
