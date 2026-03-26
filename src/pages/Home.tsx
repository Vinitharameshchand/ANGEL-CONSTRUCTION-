import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Building2, Home as HomeIcon, Sofa, Trophy, Users, Globe, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      icon: <HomeIcon size={32} />,
      title: "Residential",
      description: "Residential common services for residential, commercial and interior projects.",
      link: "/services"
    },
    {
      icon: <Building2 size={32} />,
      title: "Commercial",
      description: "Expert civil services and commercial services, buildings, workplaces and contracts.",
      link: "/services"
    },
    {
      icon: <Sofa size={32} />,
      title: "Interior Design",
      description: "Interior design documentation and interior structure in interior projects.",
      link: "/services"
    }
  ];

  const projects = [
    { title: "Modern House", category: "Residential", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800" },
    { title: "Office Building", category: "Commercial", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" },
    { title: "Modern Home", category: "Residential", image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800" },
    { title: "Commercial Hub", category: "Commercial", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
    { title: "Interior Work", category: "Interior", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800" },
    { title: "Infrastructure", category: "Industrial", image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800" }
  ];

  const stats = [
    { label: "Projects Completed", value: "150+", icon: <CheckCircle2 size={24} /> },
    { label: "Happy Clients", value: "200+", icon: <Users size={24} /> },
    { label: "Global Reach", value: "5+", icon: <Globe size={24} /> },
    { label: "Excellence Awards", value: "10+", icon: <Trophy size={24} /> }
  ];

  const testimonials = [
    {
      quote: "Professional, timely, and exceptional quality. Highly recommend Angel Construction.",
      name: "Sarah J.",
      role: "Homeowner"
    },
    {
      quote: "They transformed our office space. Great communication throughout.",
      name: "Mark D.",
      role: "Business Owner"
    }
  ];

  return (
    <div className="overflow-x-hidden font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Construction Site" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
        </div>
        
        <div className="container-custom relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-black leading-tight mb-8 drop-shadow-lg">
              Building Your Dreams Into Reality
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed font-medium drop-shadow-md">
              Expert civil construction services for residential, commercial, and interior projects.
            </p>
            <Link to="/contact">
              <button className="bg-accent hover:bg-orange-600 text-white font-black py-5 px-10 rounded-md transition-all transform hover:scale-105 active:scale-95 text-xl shadow-xl shadow-accent/20">
                Get a Quote
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8 space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">About Angel Construction</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Angel Construction is a overall construction, exterior events, and interior projects, Streamers texts with gems and more. Expert civil construction, offering services for residential, commercial and amenity projects.
                </p>
                <p>
                   Our focused construction is one ensure company, Angel construction once our civil name common connection substantial and cupboard. Services constructors term on streams, enterprises for real-commercial design and more.
                </p>
              </div>
              <Link to="/about">
                <button className="bg-primary text-white font-bold py-3 px-8 rounded hover:bg-slate-800 transition-all shadow-lg">Read More</button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              <div className="bg-primary text-white p-12 aspect-square flex flex-col items-center justify-center text-center rounded-[40px] shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                 <span className="text-7xl font-black text-accent mb-4 tracking-tighter">150+</span>
                 <span className="text-2xl font-bold leading-tight uppercase tracking-widest opacity-90">Projects Successfully <br /> Completed</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section with icons */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="container-custom">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center group flex flex-col items-center">
                   <div className="p-4 bg-white shadow-md rounded-2xl text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                   </div>
                   <h3 className="text-3xl font-black text-primary">{stat.value}</h3>
                   <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-primary text-center">Our Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 p-10 rounded-3xl hover:bg-white hover:shadow-2xl transition-all duration-300 transform group border border-transparent hover:border-slate-100"
              >
                <div className="p-4 bg-white shadow-md inline-block text-primary rounded-xl mb-8 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-12">
                   {service.icon}
                </div>
                <h3 className="text-2xl font-black text-primary mb-4 leading-none uppercase tracking-tight">{service.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                  {service.description}
                </p>
                <Link to={service.link} className="flex items-center space-x-2 text-primary font-black hover:text-accent transition-colors uppercase tracking-widest text-xs group/link">
                   <span>Learn More</span>
                   <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group h-[400px] overflow-hidden rounded-[30px] shadow-lg border border-white"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Specific reference style button on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                    <Link to="/projects">
                       <button className="bg-accent text-white font-black px-10 py-4 rounded-xl shadow-2xl flex items-center space-x-3 transform group-hover:scale-105 active:scale-95 transition-all text-lg">
                          <span>View Project</span>
                          <ExternalLink size={20} />
                       </button>
                    </Link>
                </div>
                
                <div className="absolute bottom-10 left-10 text-white z-10 transition-transform group-hover:-translate-y-4 duration-300">
                   <p className="text-xs font-black uppercase tracking-[0.3em] mb-2 text-accent drop-shadow-sm">{project.category}</p>
                   <h4 className="text-3xl font-black drop-shadow-md">{project.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-primary text-white overflow-hidden relative">
         {/* Decorative quotes */}
         <div className="absolute top-0 left-0 text-white/5 text-[400px] font-black pointer-events-none -translate-x-1/2 -translate-y-1/2">"</div>
         <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
               {testimonials.map((t, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8 flex flex-col"
                  >
                     <div className="text-accent">
                        <span className="text-6xl font-black leading-none">“</span>
                     </div>
                     <p className="text-2xl md:text-3xl font-black leading-relaxed text-slate-100 flex-grow drop-shadow-sm">
                        {t.quote}
                     </p>
                     <div className="pt-6 border-t border-white/10">
                        <h4 className="text-xl font-black text-accent mb-1">{t.name}</h4>
                        <p className="text-sm font-bold uppercase tracking-widest opacity-60">{t.role}</p>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="bg-accent py-20 relative overflow-hidden">
         <div className="container-custom relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
               <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">Ready To Start Your <br /> Next Masterpiece?</h2>
               <Link to="/contact">
                  <button className="bg-primary hover:bg-slate-800 text-white font-black py-6 px-16 rounded-2xl shadow-[0_25px_50px_rgba(0,0,0,0.2)] transition-all transform hover:-translate-y-2 active:scale-95 text-2xl flex items-center space-x-4">
                     <span>Contact Us Now</span>
                     <ArrowRight size={28} />
                  </button>
               </Link>
            </div>
         </div>
         {/* Simple decorative strip */}
         <div className="absolute top-0 left-0 w-full h-1 bg-white/20" />
      </section>
    </div>
  );
};

export default Home;
