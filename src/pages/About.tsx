import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, Award, Users2, Clock, MapPin, Phone, CheckCircle2, Building2, HardHat, Compass } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <ShieldCheck size={32} />,
      title: "Quality Integrity",
      description: "We never compromise on the quality of materials or engineering standards, ensuring long-lasting structures."
    },
    {
      icon: <Award size={32} />,
      title: "Excellence",
      description: "Our commitment to excellence is reflected in every project we undertake, no matter the size or scale."
    },
    {
      icon: <Users2 size={32} />,
      title: "Client-Centric",
      description: "We prioritize our clients' needs, goals, and satisfaction, working closely with them at every step."
    },
    {
      icon: <Clock size={32} />,
      title: "Timely Delivery",
      description: "We value your time and strive to deliver all projects within the agreed timeline and budget."
    }
  ];

  const milestones = [
    { year: "2010", event: "Foundation of Angel Construction" },
    { year: "2015", event: "Expansion to Commercial Projects" },
    { year: "2018", event: "ISO 9001 Certification" },
    { year: "2023", event: "150+ Projects Milestone" }
  ];

  return (
    <div className="pt-24 lg:pt-32 bg-white min-h-screen">
      {/* Header */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 pointer-events-none scale-150 rotate-3 translate-x-1/2" />
        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">About Angel <br /> Construction</h1>
            <p className="text-xl md:text-2xl text-slate-300 font-medium">Expert civil construction services for residential, commercial and interior projects since last 10+ years.</p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding overflow-hidden">
        <div className="container-custom">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-10"
              >
                 <div className="space-y-4">
                    <span className="text-accent font-black uppercase tracking-[0.4em] text-xs">Our Legacy</span>
                    <h2 className="text-5xl font-black text-primary leading-tight">Engineering Tomorrow's Excellence Today</h2>
                 </div>
                 <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
                    <p>
                       Angel Civil Construction is a professional construction company specializing in residential, commercial, and infrastructure projects. Our team of experienced engineers and architects is dedicated to delivering state-of-the-art infrastructure and interior design solutions.
                    </p>
                    <p>
                       We prioritize client satisfaction through absolute transparency, highest quality material, and strict adherence to timelines. From foundational work to final finishing, every project receives meticulous attention to detail.
                    </p>
                 </div>
                 <div className="flex flex-wrap gap-8 pt-4">
                    <div className="flex items-center space-x-3">
                       <CheckCircle2 className="text-accent" size={24} />
                       <span className="font-black text-primary uppercase tracking-widest text-xs">Certified Quality</span>
                    </div>
                    <div className="flex items-center space-x-3">
                       <CheckCircle2 className="text-accent" size={24} />
                       <span className="font-black text-primary uppercase tracking-widest text-xs">Expert Engineering</span>
                    </div>
                 </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                 <div className="absolute inset-0 bg-primary/5 rounded-[50px] rotate-3 scale-105" />
                 <img src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200" alt="Construction Site" className="relative z-10 w-full h-[600px] object-cover rounded-[50px] shadow-2xl" />
                 
                 {/* Floating badge */}
                 <div className="absolute -bottom-10 -left-10 bg-accent text-white p-12 rounded-[30px] shadow-2xl z-20 group hover:rotate-3 transition-transform">
                    <HardHat size={48} className="mb-4" />
                    <h4 className="text-5xl font-black mb-1">15+</h4>
                    <p className="text-sm font-black uppercase tracking-widest opacity-80">Years of Experience</p>
                 </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* Mission & Vision Section (Split Layout) */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
         <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/20 -skew-x-12 translate-x-1/2" />
         <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
               <motion.div
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="space-y-8 p-12 bg-white/5 rounded-[40px] border border-white/10 backdrop-blur-sm group hover:border-accent/40 transition-colors"
               >
                  <div className="w-20 h-20 bg-accent text-white rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                     <Target size={40} />
                  </div>
                  <h3 className="text-4xl font-black mb-4">Our Mission</h3>
                  <p className="text-xl text-slate-300 leading-relaxed font-medium">To provide state-of-the-art infrastructure and interior design solutions at affordable prices while maintaining highest standards of quality and engineering integrity.</p>
               </motion.div>

               <motion.div
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
                 className="space-y-8 p-12 bg-white/5 rounded-[40px] border border-white/10 backdrop-blur-sm group hover:border-primary/40 transition-colors"
               >
                  <div className="w-20 h-20 bg-primary text-white rounded-2xl flex items-center justify-center group-hover:-rotate-12 transition-transform">
                     <Eye size={40} />
                  </div>
                  <h3 className="text-4xl font-black mb-4">Our Vision</h3>
                  <p className="text-xl text-slate-300 leading-relaxed font-medium">To be the most valued construction and design firm in the region by consistently building landmarks that transform the way people live and work.</p>
               </motion.div>
            </div>
         </div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding bg-slate-50">
         <div className="container-custom">
            <div className="text-center mb-20 space-y-4">
               <span className="text-accent font-black uppercase tracking-[0.4em] text-xs">Our Principles</span>
               <h2 className="text-5xl font-black text-primary">Fundamental Values</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
               {values.map((v, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-12 rounded-[40px] text-center shadow-xl shadow-slate-200 hover:shadow-primary/10 transition-all transform hover:-translate-y-2 group h-full"
                  >
                     <div className="w-16 h-16 bg-slate-50 text-accent rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        {v.icon}
                     </div>
                     <h4 className="text-2xl font-black text-primary mb-4 leading-none">{v.title}</h4>
                     <p className="text-slate-500 font-medium leading-relaxed">{v.description}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Team/Quick Contact */}
      <section className="py-24 bg-white relative overflow-hidden">
         <div className="container-custom">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-primary p-16 rounded-[50px] shadow-2xl relative overflow-hidden">
               <div className="absolute inset-0 bg-accent/5 pointer-events-none" />
               <div className="relative z-10 max-w-2xl text-center lg:text-left space-y-4">
                  <h2 className="text-4xl font-black text-white">Partner with the Civil Experts</h2>
                  <p className="text-slate-300 text-xl font-medium">Discuss your vision with our senior engineering team today.</p>
               </div>
               <div className="relative z-10 flex flex-col md:flex-row gap-8 shrink-0">
                  <div className="flex items-center space-x-5 bg-white/5 p-8 rounded-3xl backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all">
                     <div className="p-4 bg-accent text-white rounded-2xl">
                        <Phone size={28} />
                     </div>
                     <div>
                        <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] mb-1">Direct Call</p>
                        <p className="text-2xl font-black text-white">+91 93600 21210</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default About;
