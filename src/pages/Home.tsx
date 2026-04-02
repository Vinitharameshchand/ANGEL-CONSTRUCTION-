import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Home as HomeIcon, 
  Sofa, 
  Users, 
  Clock, 
  ShieldCheck, 
  HardHat,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Building2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      icon: <HomeIcon size={40} />,
      title: "Residential Construction",
      description: "We build high-quality custom homes, villas, and modern residential complexes with focus on structure and finishing.",
    },
    {
      icon: <Building2 size={40} />,
      title: "Commercial Projects",
      description: "Expert civil services and commercial construction for offices, startups, retail spaces, and corporate buildings.",
    },
    {
      icon: <Sofa size={40} />,
      title: "Interior Design",
      description: "Premium interior design services for residential and corporate infrastructure projects with modern aesthetics.",
    }
  ];

  const projects = [
    { title: "Modern Luxury Villa", category: "Residential", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800" },
    { title: "Corporate IT Park", category: "Commercial", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" },
    { title: "Dream Home", category: "Residential", image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800" },
    { title: "Commercial Plaza", category: "Commercial", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
    { title: "Minimalist Interior", category: "Interior", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800" },
    { title: "Industrial Infrastructure", category: "Industrial", image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800" }
  ];

  const whyChooseUs = [
    {
      title: "Expert Team",
      description: "Our team of architects, engineers, and skilled laborers possesses extensive experience in the construction industry.",
      icon: <Users size={32} />
    },
    {
      title: "Quality Craftsmanship",
      description: "We source materials from trusted suppliers, ensuring that your building stands the test of time.",
      icon: <ShieldCheck size={32} />
    },
    {
      title: "On-time Delivery",
      description: "Our streamlined processes and efficient project management enable us to deliver projects on schedule.",
      icon: <Clock size={32} />
    },
    {
      title: "Safe Worksite",
      description: "We maintain the highest safety standards across all our construction sites to ensure a risk-free environment.",
      icon: <HardHat size={32} />
    }
  ];

  const testimonials = [
    {
      quote: "Angel Construction transformed our vision into a masterpiece. Their professional touch and attention to detail exceeded our expectations.",
      name: "Sarah Johnson",
      role: "Homeowner"
    },
    {
      quote: "Working with them was a pleasure. They handled our commercial project with absolute transparency and delivered ahead of schedule.",
      name: "Michael Chen",
      role: "Business Owner"
    },
    {
      quote: "The most trustworthy construction firm in Coimbatore. Their architectural insights saved us both time and costs.",
      name: "Rajesh Kumar",
      role: "Property Developer"
    }
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] as any }
  };

  return (
    <div className="overflow-x-hidden font-sans">
      {/* 1. Hero Section */}
      <section className="relative h-screen flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000" 
            alt="Premium Construction" 
            className="w-full h-full object-cover opacity-50 scale-105 animate-zoom-in"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/40 to-transparent" />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <span className="label-eyebrow mb-6 text-accent-light">Building Excellence Since 2010</span>
            <h1 className="text-display text-white font-heading font-black mb-8">
              Building Your <span className="text-accent">Vision</span> Into Reality
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed font-light max-w-2xl">
              Angel Construction. We are glad to be unite with you in deal of construction. Expert civil services for every milestone.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/contact">
                <button className="btn-primary py-5 px-10 text-base">
                  Get a Free Quote
                </button>
              </Link>
              <Link to="/projects">
                <button className="btn-outline-white py-5 px-10 text-base">
                  View Our Projects
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-heading font-bold">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-accent to-transparent" />
        </div>
      </section>

      {/* 2. About Section */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeUp} className="relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200" 
                  alt="About Angel Construction" 
                  className="w-full h-[600px] object-cover hover:scale-110 transition-transform duration-700" 
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-primary p-12 rounded-[2rem] shadow-2xl hidden md:block">
                 <div className="text-accent text-5xl font-heading font-black mb-2">15+</div>
                 <div className="text-white/60 uppercase tracking-widest text-[10px] font-bold">Years Experience</div>
              </div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="space-y-8">
              <span className="label-eyebrow">Builders of Excellence</span>
              <h2 className="section-title">Beyond Construction, We Build <span className="text-accent">Trust</span></h2>
              <div className="space-y-6 text-muted text-lg leading-relaxed">
                <p>
                  At Angel Construction, we believe that every structure we build is a testament to our commitment to excellence. With over 8 years of dedicated service in Coimbatore and across Tamil Nadu, we have redefined architectural marvels.
                </p>
                <p>
                  Our team of young, talented minds is dedicated to delivering cutting-edge solutions with a focus on innovation and aesthetic design. We value your dream and work tirelessly to make it a reality within your budget.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 py-6">
                <div className="space-y-2">
                   <h4 className="text-3xl font-heading font-black text-primary">3000+</h4>
                   <p className="text-sm font-bold text-muted uppercase tracking-widest">Project Completed</p>
                </div>
                <div className="space-y-2">
                   <h4 className="text-3xl font-heading font-black text-primary">220+</h4>
                   <p className="text-sm font-bold text-muted uppercase tracking-widest">Happy Clients</p>
                </div>
              </div>
              <Link to="/about" className="inline-block pt-4">
                <button className="btn-outline flex items-center gap-4">
                  Learn Our Story <ArrowRight size={18} />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Services Section */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <motion.span {...fadeUp} className="label-eyebrow justify-center mx-auto">What We Offer</motion.span>
            <motion.h2 {...fadeUp} transition={{ delay: 0.1 }} className="section-title">Comprehensive Expert <span className="text-accent">Services</span></motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                {...fadeUp}
                transition={{ delay: idx * 0.1 }}
                className="service-card"
              >
                <div className="icon-box mb-8">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">{service.title}</h3>
                <p className="text-muted leading-relaxed mb-8">
                  {service.description}
                </p>
                <Link to="/services" className="text-accent font-bold text-sm tracking-widest uppercase flex items-center gap-2 group-hover:gap-4 transition-all">
                  Full Details <ArrowRight size={16} />
                </Link>
                <div className="absolute top-0 right-0 p-8 text-accent/5 group-hover:text-accent/10 transition-colors">
                  <span className="text-8xl font-heading font-black">0{idx + 1}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Projects / Portfolio */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl space-y-6">
               <motion.span {...fadeUp} className="label-eyebrow">Our Masterpieces</motion.span>
               <motion.h2 {...fadeUp} transition={{ delay: 0.1 }} className="section-title">Showcasing Our Best <span className="text-accent">Works</span></motion.h2>
            </div>
            <motion.div {...fadeUp}>
              <Link to="/projects">
                <button className="btn-outline">View All Projects</button>
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                {...fadeUp}
                transition={{ delay: idx * 0.1 }}
                className="project-card h-[450px]"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 img-overlay opacity-80 group-hover:opacity-95 transition-opacity" />
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                   <span className="text-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-2">{project.category}</span>
                   <h3 className="text-2xl font-heading font-black text-white mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform">{project.title}</h3>
                   <div className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-500">
                      <Link to="/projects" className="btn-primary py-3 px-6 text-[10px]">Know More</Link>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeUp} className="space-y-10">
               <div className="space-y-6">
                  <span className="label-eyebrow text-accent-light">Why Choose Us</span>
                  <h2 className="section-title text-white">We Value Your <span className="text-accent">Dreams</span></h2>
               </div>
               <div className="grid grid-cols-1 gap-6">
                  {whyChooseUs.map((item, idx) => (
                    <div key={idx} className="flex gap-6 group">
                       <div className="icon-box-dark group-hover:bg-accent transition-colors">
                          {item.icon}
                       </div>
                       <div>
                          <h4 className="text-xl font-heading font-bold mb-2">{item.title}</h4>
                          <p className="text-white/60 font-light leading-relaxed">{item.description}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </motion.div>
            
            <motion.div {...fadeUp} transition={{ delay: 0.3 }} className="relative">
              <div className="rounded-[40px] overflow-hidden border-8 border-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=1200" 
                  alt="Construction Quality" 
                  className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-accent rounded-full flex items-center justify-center animate-pulse cursor-pointer">
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center pl-1 shadow-2xl">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-primary border-b-[10px] border-b-transparent" />
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <motion.span {...fadeUp} className="label-eyebrow justify-center mx-auto">Client Success</motion.span>
            <motion.h2 {...fadeUp} transition={{ delay: 0.1 }} className="section-title">What Our Clients <span className="text-accent">Say</span></motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                {...fadeUp}
                transition={{ delay: idx * 0.1 }}
                className="testimonial-card flex flex-col h-full"
              >
                <div className="text-accent text-6xl font-serif mb-6">“</div>
                <p className="text-muted text-lg italic leading-relaxed mb-8 flex-grow">
                  {t.quote}
                </p>
                <div className="pt-8 border-t border-border flex items-center gap-4">
                   <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent font-black uppercase">
                      {t.name.charAt(0)}
                   </div>
                   <div>
                      <h4 className="font-heading font-bold text-primary">{t.name}</h4>
                      <p className="text-xs text-muted font-bold uppercase tracking-widest">{t.role}</p>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Call-to-Action Section */}
      <section className="py-32 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-primary/10" />
        </div>
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
             <div className="max-w-2xl space-y-6">
                <motion.h2 {...fadeUp} className="text-4xl md:text-6xl font-heading font-black text-white leading-tight text-balance">
                  Let’s Build Something <span className="text-primary">Great</span> Together
                </motion.h2>
                <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="text-white/80 text-xl font-light">
                  Ready to transform your vision into an architectural masterpiece? Our experts are standing by.
                </motion.p>
             </div>
             <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
               <Link to="/contact">
                 <button className="btn-dark py-6 px-16 text-xl rounded-[1.5rem] shadow-2xl">
                    Contact Us Now
                 </button>
               </Link>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 8. Contact Summary Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
             <motion.div {...fadeUp} className="space-y-8">
                <h3 className="text-3xl font-heading font-black flex items-center gap-4">
                  <span className="w-12 h-px bg-accent" /> Contact Info
                </h3>
                <div className="space-y-8 px-4">
                   <div className="flex gap-6">
                      <div className="text-accent shrink-0"><Phone size={24} /></div>
                      <div>
                         <p className="text-[10px] font-bold text-muted uppercase tracking-widest mb-1">Call Us Anywhere</p>
                         <p className="text-lg font-bold text-primary">+91 93600 21210</p>
                      </div>
                   </div>
                   <div className="flex gap-6">
                      <div className="text-accent shrink-0"><Mail size={24} /></div>
                      <div>
                         <p className="text-[10px] font-bold text-muted uppercase tracking-widest mb-1">Email Us Directly</p>
                         <p className="text-lg font-bold text-primary">arunpradishyr09@gmail.com</p>
                      </div>
                   </div>
                   <div className="flex gap-6">
                      <div className="text-accent shrink-0"><MapPin size={24} /></div>
                      <div>
                         <p className="text-[10px] font-bold text-muted uppercase tracking-widest mb-1">Our Studio Location</p>
                         <p className="text-lg font-bold text-primary">Gandhipuram, Coimbatore - 641012</p>
                      </div>
                   </div>
                </div>
                
                <div className="flex gap-4 pt-4 px-4">
                   {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                     <div key={i} className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-primary/40 hover:bg-accent hover:border-accent hover:text-white transition-all cursor-pointer">
                        <Icon size={20} />
                     </div>
                   ))}
                </div>
             </motion.div>

             <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="lg:col-span-2">
                <div className="h-[500px] rounded-[3rem] overflow-hidden border border-border grayscale hover:grayscale-0 transition-all duration-1000">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.1852445851494!2d76.96191631480295!3d11.01201459216174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859ab951d8baf%3A0xbc4e24efdce2789d!2sGandhipuram%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1625573432123!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true}
                    loading="lazy"
                  />
                </div>
             </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
