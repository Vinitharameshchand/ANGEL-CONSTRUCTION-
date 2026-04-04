import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import heroBg from '../assets/images/frontpagebgimg.png';
import vd from '../assets/images/aboutvd.mp4';
import qualityVd from '../assets/images/Constructionqulity .mp4';
import * as LucideIcons from 'lucide-react';
import { Link } from 'react-router-dom';
import { sanityClient, urlFor } from '../lib/sanity';

// Dynamic Icon Component Helper
const DynamicIcon = ({ name, size = 40 }: { name: string, size?: number }) => {
  const IconComponent = (LucideIcons as any)[name] || LucideIcons.HelpCircle;
  return <IconComponent size={size} />;
};

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 200]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1.05, 1.2]);

  const [services, setServices] = useState<any[]>([
    {
      iconName: "Home",
      title: "Residential Construction",
      description: "We build high-quality custom homes, villas, and modern residential complexes with focus on structure and finishing.",
    },
    {
      iconName: "Building2",
      title: "Commercial Projects",
      description: "Expert civil services and commercial construction for offices, startups, retail spaces, and corporate buildings.",
    },
    {
      iconName: "Sofa",
      title: "Interior Design",
      description: "Premium interior design services for residential and corporate infrastructure projects with modern aesthetics.",
    }
  ]);

  const [projects, setProjects] = useState<any[]>([
    { title: "Modern Luxury Villa", category: "Residential", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800" },
    { title: "Corporate IT Park", category: "Commercial", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" },
    { title: "Dream Home", category: "Residential", image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800" },
    { title: "Commercial Plaza", category: "Commercial", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
    { title: "Minimalist Interior", category: "Interior", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800" },
    { title: "Industrial Infrastructure", category: "Industrial", image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800" }
  ]);

  const whyChooseUs = [
    {
      title: "Expert Team",
      description: "Our team of architects, engineers, and skilled laborers possesses extensive experience in the construction industry.",
      iconName: "Users"
    },
    {
      title: "Quality Craftsmanship",
      description: "We source materials from trusted suppliers, ensuring that your building stands the test of time.",
      iconName: "ShieldCheck"
    },
    {
      title: "On-time Delivery",
      description: "Our streamlined processes and efficient project management enable us to deliver projects on schedule.",
      iconName: "Clock"
    },
    {
      title: "Safe Worksite",
      description: "We maintain the highest safety standards across all our construction sites to ensure a risk-free environment.",
      iconName: "HardHat"
    }
  ];

  const [testimonials, setTestimonials] = useState<any[]>([
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
  ]);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "service"]`).then((data) => {
      if (data && data.length > 0) setServices(data);
    });
    sanityClient.fetch(`*[_type == "project"]`).then((data) => {
      if (data && data.length > 0) {
        setProjects(data.map((p: any) => ({
          ...p,
          image: p.mainImage ? urlFor(p.mainImage).url() : "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"
        })));
      }
    });
    sanityClient.fetch(`*[_type == "testimonial"]`).then((data) => {
      if (data && data.length > 0) setTestimonials(data);
    });
  }, []);

  const revealVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.33, 1, 0.68, 1] as any }
    }
  };

  const imageReveal = {
    hidden: { scale: 1.2, filter: "blur(10px)", opacity: 0 },
    visible: {
      scale: 1,
      filter: "blur(0px)",
      opacity: 1,
      transition: { duration: 1.5, ease: [0.33, 1, 0.68, 1] as any }
    }
  };

  return (
    <div ref={containerRef} className="overflow-x-hidden font-sans">
      {/* 1. Hero Section */}
      <section className="relative h-screen flex items-center bg-primary overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: heroY, scale: heroScale }}
        >
          <img
            src={heroBg}
            alt="Premium Construction"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent" />
        </motion.div>

        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.span
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
              }}
              className="label-eyebrow mb-6 text-accent-light"
            >
              Building Excellence Since 2010
            </motion.span>

            <motion.h1
              variants={revealVariants}
              className="text-display text-white font-heading font-black mb-8"
            >
              Building Your <span className="text-accent underline decoration-accent/20 underline-offset-8">Vision</span> <br /> Into Reality
            </motion.h1>

            <motion.p
              variants={revealVariants}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed font-light max-w-2xl"
            >
              Angel Construction. We are glad to be unite with you in deal of construction. Expert civil services for every milestone.
            </motion.p>

            <motion.div
              variants={revealVariants}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-6"
            >
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
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <motion.span 
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-heading font-bold"
          >
            Scroll
          </motion.span>
          <motion.div 
            animate={{ scaleY: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-px h-16 origin-top bg-gradient-to-b from-accent to-transparent" 
          />
        </motion.div>
      </section>

      {/* 2. About Section */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={imageReveal}
                className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] lg:border-[16px] border-white"
              >
                {/* Reveal Mask Overlay */}
                <motion.div
                  initial={{ x: "0%" }}
                  whileInView={{ x: "100%" }}
                  transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
                  viewport={{ once: true }}
                  className="absolute inset-0 bg-accent z-20"
                />
                <video
                  src={vd}
                  className="w-full h-[650px] lg:h-[700px] object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute -bottom-10 -right-10 bg-primary p-12 rounded-[2rem] shadow-2xl hidden md:block z-30"
              >
                <div className="text-accent text-5xl font-heading font-black mb-2">15+</div>
                <div className="text-white/60 uppercase tracking-widest text-[10px] font-bold">Years Experience</div>
              </motion.div>
            </div>

            <div className="space-y-8">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="label-eyebrow"
              >
                Builders of Excellence
              </motion.span>

              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealVariants}
                className="section-title"
              >
                Beyond Construction, <br /> We Build <span className="text-accent">Trust</span>
              </motion.h2>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealVariants}
                transition={{ delay: 0.1 }}
                className="space-y-6 text-muted text-lg leading-relaxed"
              >
                <p>
                  At Angel Construction, we believe that every structure we build is a testament to our commitment to excellence. With over 8 years of dedicated service in Coimbatore and across Tamil Nadu, we have redefined architectural marvels.
                </p>
                <p>
                  Our team of young, talented minds is dedicated to delivering cutting-edge solutions with a focus on innovation and aesthetic design. We value your dream and work tirelessly to make it a reality within your budget.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
                  }
                }}
                className="grid grid-cols-2 gap-8 py-6"
              >
                <motion.div variants={revealVariants} className="space-y-2">
                  <motion.h4 
                    className="text-4xl md:text-5xl font-heading font-black text-primary"
                    whileHover={{ scale: 1.05, color: '#C9A84C' }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    3000+
                  </motion.h4>
                  <p className="text-sm font-bold text-muted uppercase tracking-widest">Project Completed</p>
                </motion.div>
                <motion.div variants={revealVariants} className="space-y-2">
                  <motion.h4 
                    className="text-4xl md:text-5xl font-heading font-black text-primary"
                    whileHover={{ scale: 1.05, color: '#C9A84C' }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    220+
                  </motion.h4>
                  <p className="text-sm font-bold text-muted uppercase tracking-widest">Happy Clients</p>
                </motion.div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealVariants}
                transition={{ delay: 0.3 }}
              >
                <Link to="/about" className="inline-block pt-4">
                  <button className="btn-outline flex items-center gap-4">
                    Learn Our Story <LucideIcons.ArrowRight size={18} />
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Section */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="label-eyebrow justify-center mx-auto"
            >
              What We Offer
            </motion.span>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              className="section-title"
            >
              Comprehensive Expert <span className="text-accent">Services</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.1, ease: [0.33, 1, 0.68, 1] }}
                className="service-card group h-full flex flex-col"
              >
                <div className="icon-box mb-8 group-hover:scale-110 transition-transform duration-500">
                  <DynamicIcon name={service.iconName} size={40} />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">{service.title}</h3>
                <p className="text-muted leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                <Link to="/services" className="text-accent font-bold text-sm tracking-widest uppercase flex items-center gap-2 group-hover:gap-4 transition-all">
                  Full Details <LucideIcons.ArrowRight size={16} />
                </Link>
                <div className="absolute top-0 right-0 p-8 text-accent/5 group-hover:text-accent/10 transition-colors pointer-events-none">
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
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="label-eyebrow"
              >
                Our Masterpieces
              </motion.span>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealVariants}
                className="section-title"
              >
                Showcasing Our Best <span className="text-accent">Works</span>
              </motion.h2>
            </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Link to="/projects">
                  <motion.button 
                    whileHover={{ x: 10, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-outline flex items-center gap-3 group"
                  >
                    View All Projects <LucideIcons.ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </motion.button>
                </Link>
              </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.1, ease: [0.33, 1, 0.68, 1] }}
                className="project-card h-[450px] group overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-2"
                  >
                    {project.category}
                  </motion.span>
                  <h3 className="text-2xl font-heading font-black text-white mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{project.title}</h3>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">
                    <Link to="/projects" className="btn-primary py-3 px-6 text-[10px] items-center">Know More</Link>
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
            <div className="space-y-10">
              <div className="space-y-6">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="label-eyebrow text-accent-light"
                >
                  Why Choose Us
                </motion.span>
                <motion.h2
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={revealVariants}
                  className="section-title text-white"
                >
                  We Value Your <span className="text-accent">Dreams</span>
                </motion.h2>
              </div>
              <div className="grid grid-cols-1 gap-6">
                {whyChooseUs.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 1 }}
                    className="flex gap-6 group"
                  >
                    <div className="icon-box-dark group-hover:bg-accent transition-colors shrink-0">
                      <DynamicIcon name={item.iconName} size={32} />
                    </div>
                    <div className="pt-2">
                      <h4 className="text-xl font-heading font-bold mb-2 text-white">{item.title}</h4>
                      <p className="text-white/60 text-sm md:text-base font-light leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={imageReveal}
                className="rounded-[40px] overflow-hidden border-8 border-white/5 relative"
              >
                <motion.div
                  initial={{ x: "0%" }}
                  whileInView={{ x: "-100%" }}
                  transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
                  viewport={{ once: true }}
                  className="absolute inset-0 bg-accent z-20"
                />
                <video
                  src={qualityVd}
                  className="w-full h-[600px] object-cover"
                  autoPlay
                  loop
                  playsInline
                  controls
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="label-eyebrow justify-center mx-auto"
            >
              Client Success
            </motion.span>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              className="section-title"
            >
              What Our Clients <span className="text-accent">Say</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.1, ease: [0.33, 1, 0.68, 1] }}
                className="testimonial-card flex flex-col h-full hover:shadow-2xl transition-shadow"
              >
                <div className="text-accent text-6xl font-serif mb-6 leading-none">“</div>
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
      <section className="py-32 bg-accent relative overflow-hidden group">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 1.2 }}
            whileInView={{ opacity: 0.1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center grayscale"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
            <div className="max-w-2xl space-y-6">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealVariants}
                className="text-4xl md:text-6xl font-heading font-black text-white leading-tight text-balance"
              >
                Let’s Build Something <span className="text-primary">Great</span> Together
              </motion.h2>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealVariants}
                transition={{ delay: 0.1 }}
                className="text-white/80 text-xl font-light"
              >
                Ready to transform your vision into an architectural masterpiece? Our experts are standing by.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              <Link to="/contact">
                <button className="btn-dark py-6 px-16 text-xl rounded-[1.5rem] shadow-2xl hover:scale-105 transition-transform active:scale-95">
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
            <div className="space-y-8">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-heading font-black flex items-center gap-4"
              >
                <span className="w-12 h-px bg-accent" /> Contact Info
              </motion.h3>
              <div className="space-y-8 px-4">
                {[
                  { icon: <LucideIcons.Phone size={20} />, label: "Call Us Anywhere", val: "+91 93600 21210" },
                  { icon: <LucideIcons.Mail size={20} />, label: "Email Us Directly", val: "arunpradishyr09@gmail.com" },
                  { icon: <LucideIcons.MapPin size={20} />, label: "Our Studio Location", val: "Gandhipuram, Coimbatore - 641012" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.8 }}
                    className="flex gap-6 group cursor-default"
                  >
                    <div className="text-accent shrink-0 group-hover:scale-125 transition-transform duration-300">{item.icon}</div>
                    <div>
                      <p className="text-[10px] font-bold text-muted uppercase tracking-widest mb-1">{item.label}</p>
                      <p className="text-lg font-bold text-primary group-hover:text-accent transition-colors">{item.val}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex gap-4 pt-4 px-4 overflow-hidden">
                {[LucideIcons.Instagram, LucideIcons.Facebook, LucideIcons.Twitter, LucideIcons.Linkedin].map((Icon, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-primary/40 hover:bg-accent hover:border-accent hover:text-white transition-all cursor-pointer"
                  >
                    <Icon size={20} />
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageReveal}
              className="lg:col-span-2 relative"
            >
              <div className="h-[500px] rounded-[3rem] overflow-hidden border border-border grayscale hover:grayscale-0 transition-all duration-1000 shadow-xl">
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
