import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 400 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', moveMouse);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block">
      {/* Main Cursor Circle */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-accent rounded-full -ml-4 -mt-4 bg-accent/20 backdrop-blur-[2px]"
        style={{
          x: cursorX,
          y: cursorY,
          scale: isHovered ? 2.5 : 1,
          opacity: isHovered ? 1 : 0.7,
          boxShadow: isHovered 
            ? '0 0 30px rgba(201, 168, 76, 0.6), inset 0 0 15px rgba(201, 168, 76, 0.4)' 
            : '0 0 15px rgba(201, 168, 76, 0.3)',
        }}
        animate={{
          borderWidth: isHovered ? '1px' : '2px',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      />
      {/* Center Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-accent rounded-full -ml-[3px] -mt-[3px]"
        style={{
          x: cursorX,
          y: cursorY,
          boxShadow: '0 0 10px rgba(201, 168, 76, 0.8)',
        }}
        animate={{
          scale: isHovered ? 0 : 1,
        }}
      />
    </div>
  );
};

export default CustomCursor;
