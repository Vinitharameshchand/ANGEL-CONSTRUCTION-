import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Search, Filter } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Residential', 'Commercial', 'Infrastructure', 'Interior'];

  const allProjects = [
    { id: 1, title: "Modern Luxury Villa", category: "Residential", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800", description: "Modern residential villa with smart automation." },
    { id: 2, title: "Grand IT Complex", category: "Commercial", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800", description: "State-of-the-art corporate workspace in Coimbatore." },
    { id: 3, title: "Urban Highway Bridge", category: "Infrastructure", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800", description: "Robust civil infrastructure for heavy urban traffic." },
    { id: 4, title: "Luxury Penthouse", category: "Residential", image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800", description: "High-end residential interior and finishing." },
    { id: 5, title: "Shopping Mall Hub", category: "Commercial", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800", description: "Comprehensive structural work for commercial mall." },
    { id: 6, title: "Modern Living Space", category: "Interior", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800", description: "Minimalist interior design for a modern home." },
    { id: 7, title: "Industrial Warehouse", category: "Infrastructure", image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800", description: "Functional and scalable civil infrastructure." },
    { id: 8, title: "Boutique Hotel", category: "Commercial", image: "https://images.unsplash.com/photo-1445013541984-d33e42524410?auto=format&fit=crop&q=80&w=800", description: "Elegant hospitality construction and interior." },
    { id: 9, title: "Sustainable Home", category: "Residential", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800", description: "Eco-friendly residential construction methods." }
  ];

  const filteredProjects = filter === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.category === filter);

  return (
    <div className="pt-24 lg:pt-32 bg-slate-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/10 opacity-20 pointer-events-none scale-150 rotate-3 translate-y-1/2" />
        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">Our Portfolio</h1>
            <p className="text-xl text-slate-300 font-medium">Explore our successfully completed milestones across various categories.</p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white sticky top-20 z-30 shadow-sm border-b border-slate-100">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 font-sans">
             <div className="flex flex-wrap justify-center items-center gap-4">
                <div className="flex items-center space-x-2 text-primary/40 mr-4 hidden sm:flex">
                   <Filter size={20} />
                   <span className="text-xs uppercase font-black tracking-widest">Filter by</span>
                </div>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-8 py-3 rounded-xl font-black transition-all border-2 text-sm uppercase tracking-widest active:scale-95 ${
                      filter === cat 
                        ? 'bg-primary text-white border-primary shadow-xl shadow-primary/20 scale-105' 
                        : 'bg-slate-50 text-slate-400 border-transparent hover:bg-slate-200 hover:text-primary'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
             </div>
             
             <div className="relative group hidden lg:block">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-primary transition-colors" size={20} />
                <input 
                  type="text" 
                  placeholder="Search project..." 
                  className="bg-slate-100 py-3 pl-12 pr-6 rounded-xl border border-transparent focus:border-primary focus:bg-white transition-all outline-none text-primary font-bold w-64"
                />
             </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding min-h-[600px]">
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
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative h-[450px] overflow-hidden rounded-[40px] shadow-lg border-4 border-white h-full"
                >
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-60 group-hover:opacity-100 transition-all duration-300" />
                  
                  <div className="absolute inset-0 p-10 flex flex-col justify-end transform transition-all duration-500 group-hover:translate-y-[-20px]">
                     <div className="overflow-hidden mb-4">
                        <span className="inline-block bg-accent text-white text-[10px] font-black py-1 px-3 rounded-full uppercase tracking-[0.2em] transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                          {project.category}
                        </span>
                     </div>
                     <h3 className="text-3xl font-black text-white mb-4 drop-shadow-lg">{project.title}</h3>
                     <p className="text-slate-200 text-sm font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 max-h-0 group-hover:max-h-20 overflow-hidden transform translate-y-10 group-hover:translate-y-0">
                        {project.description}
                     </p>
                     
                     <div className="pt-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-10 group-hover:translate-y-0">
                        <button className="bg-white text-primary hover:bg-accent hover:text-white font-black p-4 rounded-2xl flex items-center space-x-3 shadow-2xl transition-all scale-90 group-hover:scale-100 active:scale-95">
                           <span className="text-sm uppercase tracking-widest">Case Study</span>
                           <ExternalLink size={20} />
                        </button>
                     </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
               <div className="text-9xl text-slate-200 font-black mb-8 opacity-50 overflow-hidden">404</div>
               <h3 className="text-3xl font-black text-primary mb-4">No projects found in this category</h3>
               <p className="text-slate-500 font-medium">Try another filter or check back later for updates.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent py-20 relative">
         <div className="container-custom relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <h2 className="text-4xl md:text-5xl font-black text-white md:max-w-xl text-center md:text-left leading-tight">Got a similar vision for your next project?</h2>
            <button className="bg-primary text-white hover:bg-slate-800 font-black py-6 px-16 rounded-2xl text-xl shadow-2xl transition-all transform hover:-translate-y-2 active:scale-95">Discuss Your Vision</button>
         </div>
      </section>
    </div>
  );
};

export default Projects;
