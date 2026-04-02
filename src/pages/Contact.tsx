import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Construction, ArrowRight, MessageCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 150]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    console.log("Form Data:", data);
    await new Promise(resolve => setTimeout(resolve, 2000));
    reset();
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: "Our Studio",
      details: "No. 319-H, 1st Floor, 2nd Street, Gandhipuram, Coimbatore - 641012",
      link: "https://maps.google.com"
    },
    {
      icon: <Phone size={24} />,
      title: "Direct Connect",
      details: "+91 93600 21210",
      link: "tel:+919360021210"
    },
    {
      icon: <Mail size={24} />,
      title: "Email Support",
      details: "arunpradishyr09@gmail.com",
      link: "mailto:arunpradishyr09@gmail.com"
    },
    {
      icon: <Clock size={24} />,
      title: "Experience Hours",
      details: "Mon - Sat: 9:00 AM - 7:00 PM",
      link: "#"
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

  return (
    <div ref={containerRef} className="overflow-x-hidden pt-24 bg-white">
      {/* Page Hero */}
      <section className="bg-primary text-white py-20 relative overflow-hidden h-[50vh] flex items-center">
        <motion.div 
          style={{ y: heroY }}
          className="absolute inset-0 z-0"
        >
           <img 
              src="https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=2000" 
              alt="Hera Style Contact" 
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
              Connect With Us
            </motion.span>
            <h1 className="text-display text-white font-heading font-black mb-8 leading-tight">Get In <br /> Touch</h1>
            <p className="text-xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
              We value collaborative innovation and believe in turning your dreams into reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-4 space-y-16">
               <motion.div 
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
                 variants={revealVariants}
                >
                  <h2 className="text-3xl font-heading font-black text-primary mb-6">Contact Presence</h2>
                  <p className="text-muted text-lg font-light leading-relaxed">
                    Whether it's your dream home, an inspiring space, or a captivating renovation, our team is eager to bring your vision to life.
                  </p>
               </motion.div>
               
               <div className="space-y-10">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.link}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.33, 1, 0.68, 1] as any }}
                      className="flex items-start gap-8 group"
                    >
                      <div className="icon-box w-12 h-12 group-hover:bg-accent group-hover:text-white transition-all transform group-hover:scale-110 shadow-card">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-heading font-black text-primary uppercase tracking-widest mb-2 group-hover:text-accent transition-colors">
                          {info.title}
                        </h4>
                        <p className="text-muted leading-relaxed font-light break-all max-w-[240px]">
                          {info.details}
                        </p>
                      </div>
                    </motion.a>
                  ))}
               </div>
               
               <motion.div 
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
                 variants={revealVariants}
                 className="bg-primary p-12 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group"
               >
                  <div className="absolute top-0 right-0 p-8 text-white/5 pointer-events-none group-hover:rotate-12 transition-transform duration-1000">
                     <Construction size={180} />
                  </div>
                  <h3 className="text-2xl font-heading font-black mb-6 relative z-10">Instant <br /> Response</h3>
                  <p className="text-white/60 text-sm font-light mb-10 relative z-10 leading-relaxed">
                    Skip the wait and start a conversation with our project lead on WhatsApp.
                  </p>
                  <a href="https://wa.me/919360021210" target="_blank" rel="noopener noreferrer" className="relative z-10 flex items-center gap-4 text-accent font-heading font-black uppercase tracking-widest text-[10px] group/wa">
                     Chat on WhatsApp <ArrowRight size={14} className="group-hover/wa:translate-x-2 transition-transform" />
                  </a>
               </motion.div>
            </div>

            {/* Contact Form Section */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.98, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] as any }}
                className="bg-surface p-10 lg:p-20 rounded-[3rem] shadow-card border border-border relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-accent" />
                <h2 className="text-4xl font-heading font-black mb-12 text-primary">Send Message</h2>
                
                {isSubmitSuccessful ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center py-20 text-center space-y-8"
                  >
                    <div className="w-24 h-24 bg-accent/20 text-accent rounded-full flex items-center justify-center shadow-gold">
                      <CheckCircle size={48} />
                    </div>
                    <div className="space-y-4">
                       <h3 className="text-3xl font-heading font-black text-primary">Requirement Received</h3>
                       <p className="text-muted text-lg font-light max-w-sm mx-auto">
                         Our expert consultants will review your dream and contact you within 24 hours.
                       </p>
                    </div>
                    <button onClick={() => reset()} className="btn-outline">Send New Message</button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-3">
                        <label className="text-[10px] font-heading font-black text-muted uppercase tracking-[0.25em] pl-2">Full Name</label>
                        <input
                          {...register('name')}
                          className={`form-input py-5 px-8 text-sm bg-white/50 backdrop-blur-sm ${errors.name ? 'border-red-500' : ''}`}
                          placeholder="EX. JOHN DOE"
                        />
                        {errors.name && <p className="text-red-500 text-[10px] font-bold pl-2">{errors.name.message}</p>}
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-heading font-black text-muted uppercase tracking-[0.25em] pl-2">Mobile No</label>
                        <input
                          {...register('phone')}
                          className={`form-input py-5 px-8 text-sm bg-white/50 backdrop-blur-sm ${errors.phone ? 'border-red-500' : ''}`}
                          placeholder="+91 93600 21210"
                        />
                        {errors.phone && <p className="text-red-500 text-[10px] font-bold pl-2">{errors.phone.message}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-3">
                        <label className="text-[10px] font-heading font-black text-muted uppercase tracking-[0.25em] pl-2">Email Address</label>
                        <input
                          {...register('email')}
                          className={`form-input py-5 px-8 text-sm bg-white/50 backdrop-blur-sm ${errors.email ? 'border-red-500' : ''}`}
                          placeholder="HELLO@ANGEL.COM"
                        />
                        {errors.email && <p className="text-red-500 text-[10px] font-bold pl-2">{errors.email.message}</p>}
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-heading font-black text-muted uppercase tracking-[0.25em] pl-2">Service Type</label>
                        <div className="relative">
                          <select
                            {...register('subject')}
                            className={`form-input py-5 px-8 text-sm appearance-none bg-white/50 backdrop-blur-sm ${errors.subject ? 'border-red-500' : ''}`}
                          >
                            <option value="">Select Category</option>
                            <option value="Residential">Residential Building</option>
                            <option value="Commercial">Commercial Space</option>
                            <option value="Interior">Interior Designing</option>
                            <option value="Infrastructure">Civil Work</option>
                          </select>
                        </div>
                        {errors.subject && <p className="text-red-500 text-[10px] font-bold pl-2">{errors.subject.message}</p>}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-heading font-black text-muted uppercase tracking-[0.25em] pl-2">Project Brief</label>
                      <textarea
                        {...register('message')}
                        rows={6}
                        className={`form-input py-5 px-8 text-sm resize-none bg-white/50 backdrop-blur-sm ${errors.message ? 'border-red-500' : ''}`}
                        placeholder="TELL US ABOUT YOUR DREAM PROJECT..."
                      />
                      {errors.message && <p className="text-red-500 text-[10px] font-bold pl-2">{errors.message.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary py-6 text-base tracking-[0.3em] shadow-gold rounded-2xl flex items-center justify-center space-x-4 disabled:opacity-70 group hover:scale-[1.02] active:scale-[0.98] transition-transform"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Submit Request</span>
                          <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-all transform duration-500" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width Map Experience */}
      <section className="bg-white relative h-[600px] w-full overflow-hidden">
         <motion.div 
           initial={{ opacity: 0, scale: 1.1 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] as any }}
           className="h-full w-full grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-[2000ms] relative group"
         >
           <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.1852445851494!2d76.96191631480295!3d11.01201459216174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859ab951d8baf%3A0xbc4e24efdce2789d!2sGandhipuram%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1625573432123!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-primary/20 pointer-events-none group-hover:bg-transparent transition-colors duration-1000" />
            
            <div className="absolute bottom-20 left-20 hidden lg:block">
               <motion.div 
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1, delay: 0.5, ease: [0.33, 1, 0.68, 1] as any }}
                 className="bg-primary/95 backdrop-blur-md p-12 rounded-[2.5rem] text-white border border-white/10 shadow-3xl max-w-sm space-y-6"
               >
                  <div className="icon-box-dark bg-accent text-white shadow-gold"><MapPin size={24} /></div>
                  <h3 className="text-3xl font-heading font-black">Visit Us In <br /> <span className="text-accent text-display leading-none">CBE</span></h3>
                  <p className="text-white/60 font-light leading-relaxed">
                     No 37, Sir Shanmugam Rd, R.S. Puram, Coimbatore, Tamil Nadu 641002
                  </p>
                  <div className="h-px bg-white/10" />
                  <a href="#" className="flex items-center gap-4 text-accent text-[10px] font-heading font-black uppercase tracking-widest group/link">
                     Directions <ArrowRight size={14} className="group-hover/link:translate-x-2 transition-transform" />
                  </a>
               </motion.div>
            </div>
         </motion.div>
      </section>

      {/* Instant WhatsApp Support */}
      <section className="py-24 bg-accent relative overflow-hidden group">
         <div className="container-custom relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              className="max-w-2xl text-center md:text-left space-y-4"
            >
               <h2 className="text-4xl md:text-5xl font-heading font-black text-primary leading-tight">Need Instant <span className="text-white">Assistance?</span></h2>
               <p className="text-primary/70 text-xl font-light">Chat with our engineering consultants directly on WhatsApp for quick audits.</p>
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              transition={{ delay: 0.1 }}
            >
               <a href="https://wa.me/919360021210" target="_blank" rel="noopener noreferrer">
                  <button className="btn-dark py-6 px-16 text-xl rounded-[1.5rem] shadow-2xl flex items-center gap-4 hover:scale-105 active:scale-95 transition-transform">
                     <MessageCircle size={28} />
                     <span>WhatsApp Chat</span>
                  </button>
               </a>
            </motion.div>
         </div>
         <div className="absolute top-0 right-0 p-8 text-primary/10 pointer-events-none select-none">
            <span className="text-[14rem] font-heading font-black leading-none uppercase">Help</span>
         </div>
      </section>
    </div>
  );
};

export default Contact;
