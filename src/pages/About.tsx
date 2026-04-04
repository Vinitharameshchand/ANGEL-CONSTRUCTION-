import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, ShieldCheck, Award, Users2, Clock, CheckCircle2 } from 'lucide-react';
import vm from "../assets/images/mission&vision.png";

const About = () => {
  // Reference to the main wrapper div, used to track scroll position
  const containerRef = useRef<HTMLDivElement>(null);

  // Hook from Framer Motion to get the scroll progress of the container (0 to 1)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map the scroll progress to a vertical pixel value (0px to 150px) for a subtle parallax effect on the hero image
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 150]);

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

  // Define animation states for elements that slide up and fade in
  const revealVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.33, 1, 0.68, 1] as any }
    }
  };

  // Define animation states for images that scale down and fade in for a premium look
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
            alt="Hera Style About"
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
              Our Legacy
            </motion.span>
            <h1 className="text-display text-white font-heading font-black mb-8 leading-tight">About Angel <br /> Construction</h1>
            <p className="text-xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
              We are a prominent construction firm with 8+ years of experience in Coimbatore, Tamil Nadu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Legacy Section - Split Layout */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={imageReveal}
                className="relative z-10 rounded-[3rem] overflow-hidden shadow-3xl"
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
                  src={vm}
                  alt="Construction Legacy"
                  className="w-full h-[600px] object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -bottom-10 -left-10 bg-accent p-12 rounded-[2rem] shadow-card-hover z-30"
              >
                <span className="text-white text-5xl font-heading font-black mb-1 block">8+</span>
                <span className="text-white/80 uppercase tracking-widest text-[10px] font-bold">Years of Trust</span>
              </motion.div>
            </div>

            <div className="space-y-8">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="label-eyebrow"
              >
                Our Mission & Vision
              </motion.span>

              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealVariants}
                className="section-title"
              >
                Engineering Tomorrow's <br /> <span className="text-accent">Excellence</span> Today
              </motion.h2>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealVariants}
                transition={{ delay: 0.1 }}
                className="space-y-8 text-muted text-lg leading-relaxed font-light"
              >
                <p>
                  Angel Civil Construction is a professional construction company specializing in residential, commercial, and infrastructure projects. Our team is dedicated to delivering cutting-edge solutions with a focus on innovation and aesthetic designs.
                </p>
                <p>
                  We take pride in transforming your dreams into architectural marvels that stand the test of time. Whether it's your dream home, an inspiring commercial space, or a captivating renovation, our expert team is eager to bring your vision to life.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealVariants}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-8 py-4"
              >
                <div className="flex items-center space-x-3 group">
                  <div className="icon-box w-10 h-10 group-hover:bg-accent group-hover:text-white transition-all"><CheckCircle2 size={16} /></div>
                  <span className="font-heading font-bold text-primary uppercase tracking-widest text-xs">Innovation Focused</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="icon-box w-10 h-10 group-hover:bg-accent group-hover:text-white transition-all"><CheckCircle2 size={16} /></div>
                  <span className="font-heading font-bold text-primary uppercase tracking-widest text-xs">Expert Engineering</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Panels */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              className="bg-white p-16 rounded-[3rem] shadow-card border border-border group hover:bg-primary transition-all duration-700"
            >
              <div className="w-20 h-20 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-all">
                <Target size={40} />
              </div>
              <h3 className="text-3xl font-heading font-black mb-6 group-hover:text-white transition-colors">Our Mission</h3>
              <p className="text-muted text-lg leading-relaxed font-light group-hover:text-white/60 transition-colors">
                To provide state-of-the-art infrastructure and interior design solutions at affordable prices while maintaining highest standards of quality and engineering integrity.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              transition={{ delay: 0.1 }}
              className="bg-white p-16 rounded-[3rem] shadow-card border border-border group hover:bg-primary transition-all duration-700"
            >
              <div className="w-20 h-20 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-all">
                <Eye size={40} />
              </div>
              <h3 className="text-3xl font-heading font-black mb-6 group-hover:text-white transition-colors">Our Vision</h3>
              <p className="text-muted text-lg leading-relaxed font-light group-hover:text-white/60 transition-colors">
                To be the most valued construction and design firm in the region by consistently building landmarks that transform the way people live and work.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-20 space-y-4">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="label-eyebrow justify-center mx-auto"
            >
              Core Principles
            </motion.span>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              className="section-title"
            >
              Fundamental <span className="text-accent">Values</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.33, 1, 0.68, 1] as any }}
                className="service-card group text-center flex flex-col items-center hover-lift"
              >
                <div className="w-16 h-16 bg-surface text-accent rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  {v.icon}
                </div>
                <h4 className="text-xl font-heading font-black mb-4 leading-none">{v.title}</h4>
                <p className="text-muted font-light leading-relaxed text-sm">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            className="flex flex-col md:flex-row items-center justify-between gap-12 bg-white/5 p-16 rounded-[4rem] backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 max-w-2xl text-center lg:text-left space-y-4">
              <h2 className="text-4xl font-heading font-black tracking-tight"><span className="text-accent">Partner</span> with the Experts</h2>
              <p className="text-white/60 text-lg font-light">Discuss your next masterpiece with our senior engineering team today.</p>
            </div>
            <div className="relative z-10 shrink-0">
              <Link to="/contact">
                <button className="btn-primary py-5 px-12 text-base rounded-[1.5rem]">
                  Consult Today
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute top-0 right-0 p-8 text-white/5 pointer-events-none select-none">
          <span className="text-[10rem] font-heading font-black leading-none uppercase">Dream</span>
        </div>
      </section>
    </div>
  );
};

export default About;
