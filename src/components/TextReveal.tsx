import { motion } from 'framer-motion';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  highlightWords?: string[];
  highlightClassName?: string;
  stagger?: number;
}

const TextReveal = ({ 
  text, 
  className = "", 
  delay = 0, 
  highlightWords = [], 
  highlightClassName = "text-accent",
  stagger = 0.05
}: TextRevealProps) => {
  const words = text.split(" ");

  return (
    <motion.div className={`inline-block overflow-hidden ${className}`}>
      {words.map((word, i) => {
        const isHighlighted = highlightWords.some(hw => 
          word.toLowerCase().replace(/[.,!?;]/g, '') === hw.toLowerCase()
        );

        return (
          <motion.span
            key={i}
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8, 
              delay: delay + (i * stagger), 
              ease: [0.33, 1, 0.68, 1] 
            }}
            className={`inline-block mr-[0.25em] ${isHighlighted ? highlightClassName : ""}`}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.div>
  );
};

export default TextReveal;
