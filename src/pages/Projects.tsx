import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import TextReveal from '../components/TextReveal';
import proj1 from '../assets/images/projectimage/image.png';
import proj2 from '../assets/images/projectimage/image copy.png';
import proj3 from '../assets/images/projectimage/image copy 2.png';
import proj4 from '../assets/images/projectimage/image copy 3.png';
import proj5 from '../assets/images/projectimage/image copy 4.png';
import proj6 from '../assets/images/projectimage/image copy 5.png';
import proj7 from '../assets/images/projectimage/image copy 6.png';
import proj8 from '../assets/images/projectimage/image copy 7.png';
import proj9 from '../assets/images/projectimage/image copy 8.png';
import proj10 from '../assets/images/projectimage/image copy 9.png';
import proj11 from '../assets/images/projectimage/image copy 10.png';
import proj12 from '../assets/images/projectimage/image copy 11.png';
import proj13 from '../assets/images/projectimage/image copy 12.png';
import proj14 from '../assets/images/projectimage/image copy 13.png';
import proj15 from '../assets/images/projectimage/image copy 14.png';
import proj16 from '../assets/images/projectimage/image copy 15.png';
import proj17 from '../assets/images/projectimage/image copy 16.png';
import proj18 from '../assets/images/projectimage/image copy 17.png';
import proj19 from '../assets/images/projectimage/image copy 18.png';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 150]);

  const categories = ['All', 'Residential', 'Commercial', 'Industrial'];

  const allProjects = [
    { id: 1, title: "Modern Luxury Home", category: "Residential", image: proj1 },
    { id: 2, title: "Contemporary Residence", category: "Residential", image: proj2 },
    { id: 3, title: "Architectural Villa", category: "Residential", image: proj3 },
    { id: 4, title: "Premium Living Space", category: "Residential", image: proj4 },
    { id: 5, title: "Commercial Hub", category: "Commercial", image: proj5 },
    { id: 6, title: "Office Infrastructure", category: "Commercial", image: proj6 },
    { id: 7, title: "Industrial Development", category: "Industrial", image: proj7 },
    { id: 8, title: "Urban Living Project", category: "Residential", image: proj8 },
    { id: 9, title: "Luxury Estate", category: "Residential", image: proj9 },
    { id: 10, title: "Corporate Complex", category: "Commercial", image: proj10 },
    { id: 11, title: "Modern Apartment", category: "Residential", image: proj11 },
    { id: 12, title: "Industrial Plant", category: "Industrial", image: proj12 },
    { id: 13, title: "Retail Space", category: "Commercial", image: proj13 },
    { id: 14, title: "Residential Milestone", category: "Residential", image: proj14 },
    { id: 15, title: "Design Excellence", category: "Residential", image: proj15 },
    { id: 16, title: "Future Building", category: "Commercial", image: proj16 },
    { id: 17, title: "Landmark Project", category: "Industrial", image: proj17 },
    { id: 18, title: "Aesthetic Design", category: "Residential", image: proj18 },
    { id: 19, title: "Angel Landmark", category: "Residential", image: proj19 }
  ];

  const filteredProjects = filter === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.category === filter);

  const revealVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.2, ease: [0.33, 1, 0.68, 1] as any }
    }
  };

  return (
    <div ref={containerRef} className="overflow-x-hidden pt-24 bg-white">
      {/* Page Hero */}
      <section className="bg-primary text-white py-20 relative overflow-hidden h-[50vh] flex items-center">
        <motion.div 
          style={{ y: heroY }}
          className="absolute inset-0 z-0"
        >
           <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2000" 
              alt="Hera Style Projects" 
              className="w-full h-full object-cover opacity-20"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary to-primary" />
        </motion.div>
        
        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto py-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={revealVariants}
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="label-eyebrow text-accent-light justify-center mx-auto mb-6"
            >
              Our Portfolio
            </motion.span>
            <h1 className="text-display text-white font-heading font-black mb-8 leading-tight">
              <TextReveal text="Masterpiece Gallery" highlightWords={["Gallery"]} />
            </h1>
            <p className="text-xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
              Showcasing our best residential buildings and commercial projects highlighting our expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs Section */}
      <section className="py-12 bg-surface sticky top-20 z-30 shadow-sm border-b border-border">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
             <div className="flex flex-wrap justify-center items-center gap-4">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-8 py-3 rounded-2xl font-heading font-black transition-all border-2 text-xs uppercase tracking-widest active:scale-95 ${
                      filter === cat 
                        ? 'bg-accent text-white border-accent shadow-orange scale-105' 
                        : 'bg-white text-muted border-transparent hover:border-accent/40 hover:text-accent'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
             </div>
             
             <div className="relative group hidden lg:block">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-muted group-hover:text-accent transition-colors" size={16} />
                <input 
                  type="text" 
                  placeholder="Search project..." 
                  className="bg-white py-4 pl-14 pr-8 rounded-[1.5rem] border border-border focus:border-accent focus:shadow-orange transition-all outline-none text-primary font-bold text-xs uppercase tracking-widest w-72"
                />
             </div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="section-padding bg-white min-h-[600px]">
        <div className="container-custom">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, delay: idx * 0.05, ease: [0.33, 1, 0.68, 1] as any }}
                  className="project-card h-[500px] group overflow-hidden"
                >
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/20 to-transparent opacity-80 group-hover:opacity-100 transition-all duration-500" />
                  
                  <div className="absolute inset-0 p-12 flex flex-col justify-end items-center transform transition-all duration-700">
                     <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0 delay-150">
                        <Link to={`/contact`} className="btn-primary py-4 px-10 text-[12px] rounded-xl flex items-center gap-4 w-fit shadow-2xl">
                           Know More <ArrowRight size={16} />
                        </Link>
                     </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-32 space-y-8">
               <div className="text-[12rem] text-surface font-heading font-black leading-none opacity-20">404</div>
               <div className="space-y-4">
                  <h3 className="text-3xl font-heading font-black text-primary">No results found</h3>
                  <p className="text-muted text-lg font-light">Try another filter or check back later for updates.</p>
               </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
         <div className="container-custom relative z-10 space-y-12">
            <motion.h2 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               className="text-4xl md:text-6xl font-heading font-black text-white leading-tight max-w-4xl mx-auto"
            >
               <TextReveal text="Your Dream Home Starts Here" highlightWords={["Starts"]} />
            </motion.h2>
            <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={revealVariants}
               transition={{ delay: 0.1 }}
            >
               <Link to="/contact">
                  <button className="btn-primary py-6 px-16 text-xl rounded-[1.5rem] shadow-orange hover:scale-105 active:scale-95 transition-transform">
                     Start Your Journey Now
                  </button>
               </Link>
            </motion.div>
         </div>
         <div className="absolute top-0 right-0 p-8 text-white/5 pointer-events-none select-none">
            <span className="text-[10rem] font-heading font-black leading-none uppercase">Dream</span>
         </div>
      </section>
    </div>
  );
};

export default Projects;
