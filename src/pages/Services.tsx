import { motion } from 'framer-motion';
import { Home, Building2, Sofa, Construction, Ruler, ShieldCheck, Drill, Hammer, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const allServices = [
    {
      id: "residential",
      icon: <Home size={48} />,
      title: "Residential Construction",
      description: "We build high-quality custom homes, villas, and modern residential complexes with focus on structure and finishing.",
      features: ["Custom Home Building", "Villa Construction", "Apartment Complexes", "Renovation & Extension"],
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "commercial",
      icon: <Building2 size={48} />,
      title: "Commercial Projects",
      description: "Expert civil services and commercial construction for offices, startups, retail spaces, and corporate buildings.",
      features: ["Office Buildings", "Retail Spaces", "Warehouses", "Corporate Interior"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "interior",
      icon: <Sofa size={48} />,
      title: "Interior Design",
      description: "Premium interior design services for residential and corporate infrastructure projects with modern aesthetics.",
      features: ["Modular Kitchens", "Modern Living Rooms", "Office Workspaces", "Lighting Design"],
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800"
    },
    {
       id: "civil-work",
       icon: <Construction size={48} />,
       title: "Civil Engineering",
       description: "Expert civil contractors providing structural work, foundation, and infrastructure development.",
       features: ["Foundation Work", "Structural Engineering", "Road Infrastructure", "Bridge Construction"],
       image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="pt-24 lg:pt-32 bg-white min-h-screen">
      {/* Header */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 pointer-events-none scale-150 rotate-6 translate-x-1/4" />
        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">Our Expert Services</h1>
            <p className="text-xl text-slate-300 font-medium">Delivering excellence across residential, commercial, and interior construction projects.</p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-32">
            {allServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2 relative">
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-[80px]" />
                  <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                    <img src={service.image} alt={service.title} className="w-full h-[500px] object-cover" />
                  </div>
                  <div className="absolute -bottom-8 -right-8 bg-accent text-white p-8 rounded-[25px] shadow-2xl z-20 hidden md:block group-hover:rotate-0 rotate-3 transition-transform">
                     {service.icon}
                  </div>
                </div>

                <div className="lg:w-1/2 space-y-8">
                  <div className="flex items-center space-x-4">
                     <span className="text-accent text-6xl font-black opacity-20">0{index + 1}</span>
                     <h2 className="text-4xl md:text-5xl font-black text-primary leading-tight uppercase tracking-tighter">{service.title}</h2>
                  </div>
                  <p className="text-xl text-slate-600 leading-relaxed font-medium">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-3 text-slate-700 font-bold group">
                        <CheckCircle2 size={20} className="text-accent transition-transform group-hover:scale-125" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6">
                     <Link to="/contact">
                        <button className="bg-primary hover:bg-slate-800 text-white font-black py-4 px-10 rounded-xl transition-all shadow-xl shadow-primary/20 flex items-center space-x-3 group/btn">
                           <span>Get Started</span>
                           <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                     </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Highlight */}
      <section className="py-24 bg-slate-50">
         <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
               <div className="space-y-4">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto">
                     <ShieldCheck size={40} />
                  </div>
                  <h4 className="text-2xl font-black text-primary">Reliable Quality</h4>
                  <p className="text-slate-600 font-medium leading-relaxed px-4">Consistently delivering engineering excellence in every square foot we build.</p>
               </div>
               <div className="space-y-4">
                  <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mx-auto">
                     <Ruler size={40} />
                  </div>
                  <h4 className="text-2xl font-black text-primary">Precise Planning</h4>
                  <p className="text-slate-600 font-medium leading-relaxed px-4">Meticulous blueprints and project management for on-time delivery.</p>
               </div>
               <div className="space-y-4">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto">
                     <Hammer size={40} />
                  </div>
                  <h4 className="text-2xl font-black text-primary">Expert Staff</h4>
                  <p className="text-slate-600 font-medium leading-relaxed px-4">Highly skilled team of engineers, architects and certified contractors.</p>
               </div>
            </div>
         </div>
      </section>

      {/* Final CTA Strip */}
      <section className="bg-primary py-20 relative overflow-hidden">
         <div className="container-custom relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <h2 className="text-4xl md:text-5xl font-black text-white max-w-2xl text-center md:text-left leading-tight">Need a customized civil solution for your space?</h2>
            <Link to="/contact">
               <button className="bg-white text-primary hover:bg-accent hover:text-white font-black py-5 px-12 rounded-xl text-xl transition-all shadow-2xl">Consult Us Now</button>
            </Link>
         </div>
      </section>
    </div>
  );
};

export default Services;
