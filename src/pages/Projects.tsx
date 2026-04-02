import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Interior'];

  const allProjects = [
    { id: 1, title: "Luxury Villa in Goundampalayam", category: "Residential", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800", description: "Hera residence style luxury villa with top-quality craftsmanship." },
    { id: 2, title: "Modern Hub Coimbatore", category: "Commercial", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800", description: "Impressive commercial spaces crafted by experienced specialists." },
    { id: 3, title: "Infrastructure Development", category: "Industrial", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800", description: "Architectural marvels building industrial excellence across Tamil Nadu." },
    { id: 4, title: "Luxury Villa in Erode", category: "Residential", image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800", description: "Your trusted destination for building your dream home." },
    { id: 5, title: "Shopping Mall Hub", category: "Commercial", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800", description: "Innovative and functional designs for commercial spaces." },
    { id: 6, title: "Interior for Hera Residence", category: "Interior", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800", description: "Transforming your dreams into architectural marvels." },
    { id: 7, title: "Industrial Warehouse Park", category: "Industrial", image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800", description: "Redefining excellence in the Field of building and design." },
    { id: 8, title: "California Young Menz Club", category: "Commercial", image: "https://images.unsplash.com/photo-1445013541984-d33e42524410?auto=format&fit=crop&q=80&w=800", description: "Building commercial projects that leave a lasting impression." },
    { id: 9, title: "Ready to Buy Luxury Villa", category: "Residential", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800", description: "Personalized and thoughtful designs that transform your vision." }
  ];

  const filteredProjects = filter === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.category === filter);

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 1, ease: [0.33, 1, 0.68, 1] as any }
  };

  return (
    <div className="overflow-x-hidden pt-24 bg-white">
      {/* Page Hero */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2000" 
              alt="Hera Style Projects" 
              className="w-full h-full object-cover opacity-20"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary to-primary" />
        </div>
        
        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="label-eyebrow text-accent-light justify-center mx-auto mb-6">Our Portfolio</span>
            <h1 className="text-display text-white font-heading font-black mb-8 leading-tight">Masterpiece <br /> Gallery</h1>
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
                        ? 'bg-accent text-white border-accent shadow-gold scale-105' 
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
                  className="bg-white py-4 pl-14 pr-8 rounded-[1.5rem] border border-border focus:border-accent focus:shadow-gold transition-all outline-none text-primary font-bold text-xs uppercase tracking-widest w-72"
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
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="project-card h-[500px]"
                >
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 img-overlay opacity-80 group-hover:opacity-100 transition-all duration-500" />
                  
                  <div className="absolute inset-0 p-12 flex flex-col justify-end transform transition-all duration-700">
                     <span className="text-accent text-[10px] font-heading font-black uppercase tracking-[0.3em] mb-4 group-hover:translate-x-2 transition-transform">{project.category}</span>
                     <h3 className="text-3xl font-heading font-black text-white mb-6 leading-tight group-hover:translate-x-2 transition-transform delay-75">{project.title}</h3>
                     <p className="text-white/60 text-sm font-light leading-relaxed max-h-0 group-hover:max-h-24 opacity-0 group-hover:opacity-100 overflow-hidden transition-all duration-700 mb-8 transform translate-y-4 group-hover:translate-y-0">
                        {project.description}
                     </p>
                     
                     <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0 delay-150">
                        <Link to={`/contact`} className="btn-primary py-4 px-8 text-[11px] rounded-xl flex items-center gap-4 w-fit">
                           Know More <ArrowRight size={14} />
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
            <motion.h2 {...fadeUp} className="text-4xl md:text-6xl font-heading font-black text-white leading-tight max-w-4xl mx-auto">
               Your Dream Home <br /> <span className="text-accent">Starts</span> Here
            </motion.h2>
            <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
               <Link to="/contact">
                  <button className="btn-primary py-6 px-16 text-xl rounded-[1.5rem] shadow-gold">
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
