import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Home, Building2, Sofa, Ruler, ShieldCheck, Hammer, ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 150]);

  const allServices = [
    {
      id: "residential",
      icon: <Home size={40} />,
      title: "Residential Construction",
      description: "Build your dream home with our expert team, delivering top-notch residential construction services in Coimbatore, offering personalized and thoughtful designs that transform your vision into a captivating reality.",
      features: ["Custom Home Building", "Villa Construction", "Apartment Complexes", "Renovation & Extension"],
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "design",
      icon: <Ruler size={40} />,
      title: "Architectural Design",
      description: "Unlock the full potential of your project with our expert architects in Coimbatore. From concept to reality, we create exceptional spaces that blend creativity and functionality seamlessly.",
      features: ["3D Designing", "Architectural Blueprints", "Permit Drawings", "Structural Design"],
      image: "https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "commercial",
      icon: <Building2 size={40} />,
      title: "Commercial Construction",
      description: "Elevate your business with functional and impressive commercial spaces, crafted by our experienced construction specialists, delivering innovative and functional designs for commercial spaces.",
      features: ["Office Buildings", "Retail Hubs", "Warehouses", "Corporate Infrastructure"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "interior",
      icon: <Sofa size={40} />,
      title: "Interior Works",
      description: "Interior design documentation and interior structure in interior projects. We provide modern aesthetics for residential and corporate infrastructure with a focus on luxury finishing.",
      features: ["Modular Kitchens", "Modern Living Rooms", "Office Workspaces", "Lighting Design"],
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const revealVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.2, ease: [0.33, 1, 0.68, 1] as any }
    }
  };

  const imageReveal = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 1.5, ease: [0.33, 1, 0.68, 1] as any }
    }
  };

  return (
    <div ref={containerRef} className="overflow-x-hidden pt-24 bg-white">
      {/* Page Hero */}
      <section className="bg-primary text-white py-20 relative overflow-hidden h-[60vh] flex items-center">
        <motion.div 
          style={{ y: heroY }}
          className="absolute inset-0 z-0"
        >
           <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2000" 
              alt="Hera Style Services" 
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
              Expert Solutions
            </motion.span>
            <h1 className="text-display text-white font-heading font-black mb-8 leading-tight">Our Expert <br /> Services</h1>
            <p className="text-xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
              Delivering innovation, aesthetics, and reliability across Tamil Nadu for over 8 years.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List - Premium Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-32">
            {allServices.map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-col lg:flex-row items-center gap-20 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2 relative group">
                  <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={imageReveal}
                    className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl h-[500px]"
                  >
                    {/* Mask Reveal */}
                    <motion.div 
                      initial={{ x: "0%" }}
                      whileInView={{ x: "100%" }}
                      transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
                      viewport={{ once: true }}
                      className="absolute inset-0 bg-accent z-20"
                    />
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    />
                  </motion.div>
                  <motion.div 
                    initial={{ scale: 0, rotate: -45 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                    className="absolute -bottom-8 -right-8 bg-primary text-accent p-10 rounded-[2rem] shadow-2xl z-30 group-hover:rotate-12 transition-transform hidden md:block"
                  >
                     {service.icon}
                  </motion.div>
                </div>

                <div className="lg:w-1/2 space-y-10">
                  <div className="space-y-6">
                     <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={revealVariants}
                        className="flex items-center gap-6"
                     >
                        <span className="text-display text-accent/10 font-heading font-black leading-none">0{index + 1}</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-black text-primary leading-tight tracking-tight">{service.title}</h2>
                     </motion.div>
                     <motion.p 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={revealVariants}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-muted font-light leading-relaxed"
                     >
                       {service.description}
                     </motion.p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                    {service.features.map((feature, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + (i * 0.05), duration: 0.5 }}
                        className="flex items-center space-x-4 group/item"
                      >
                        <div className="icon-box w-8 h-8 group-hover/item:bg-accent group-hover/item:text-white transition-colors duration-300 shrink-0">
                           <CheckCircle2 size={14} />
                        </div>
                        <span className="text-primary font-heading font-bold text-sm tracking-wide">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={revealVariants}
                    transition={{ delay: 0.3 }}
                    className="pt-8"
                  >
                     <Link to="/contact">
                        <button className="btn-outline flex items-center gap-4">
                           Get a Quote <ArrowRight size={18} />
                        </button>
                     </Link>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Highlight Section */}
      <section className="py-24 bg-surface">
         <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
               <motion.div 
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
                 variants={revealVariants}
                 className="space-y-6"
               >
                  <div className="icon-box-dark bg-primary text-white mx-auto w-20 h-20 shadow-card hover-lift">
                     <ShieldCheck size={40} />
                  </div>
                  <h4 className="text-2xl font-heading font-black">Reliable Quality</h4>
                  <p className="text-muted font-light px-8">We source premium materials to ensure durability and excellence.</p>
               </motion.div>
               <motion.div 
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
                 variants={revealVariants}
                 transition={{ delay: 0.1 }}
                 className="space-y-6"
               >
                  <div className="icon-box-dark bg-accent text-white mx-auto w-20 h-20 shadow-orange hover-lift">
                     <Clock size={40} />
                  </div>
                  <h4 className="text-2xl font-heading font-black">Timely Delivery</h4>
                  <p className="text-muted font-light px-8">Our project management ensures delivery on scheduled time.</p>
               </motion.div>
               <motion.div 
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
                 variants={revealVariants}
                 transition={{ delay: 0.2 }}
                 className="space-y-6"
               >
                  <div className="icon-box-dark bg-primary text-white mx-auto w-20 h-20 shadow-card hover-lift">
                     <Hammer size={40} />
                  </div>
                  <h4 className="text-2xl font-heading font-black">Expert Staff</h4>
                  <p className="text-muted font-light px-8">Skilled architects and engineers at your service.</p>
               </motion.div>
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-accent relative overflow-hidden text-center">
         <div className="container-custom relative z-10 space-y-12">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              className="text-4xl md:text-6xl font-heading font-black text-primary leading-tight text-balance max-w-4xl mx-auto"
            >
               Ready To Build Your <span className="text-white">Dream</span> Home With Us?
            </motion.h2>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              transition={{ delay: 0.1 }}
            >
               <Link to="/contact">
                  <button className="btn-dark py-6 px-16 text-xl rounded-[1.5rem] shadow-2xl hover:scale-105 active:scale-95 transition-transform">
                     Request Free Quote Today
                  </button>
               </Link>
            </motion.div>
         </div>
         <div className="absolute top-0 left-0 p-8 text-primary/10 pointer-events-none select-none">
            <span className="text-[12rem] font-heading font-black leading-none uppercase">Hero</span>
         </div>
      </section>
    </div>
  );
};

export default Services;
