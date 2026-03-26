import React from 'react';
import { motion } from 'framer-motion';
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
      title: "Our Location",
      details: "No. 319-H, 1st Floor, 2nd Street, Gandhipuram, Coimbatore - 641012",
      link: "https://maps.google.com"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone Number",
      details: "+91 93600 21210",
      link: "tel:+919360021210"
    },
    {
      icon: <Mail size={24} />,
      title: "Email Address",
      details: "arunpradishyr09@gmail.com",
      link: "mailto:arunpradishyr09@gmail.com"
    },
    {
      icon: <Clock size={24} />,
      title: "Working Hours",
      details: "Mon - Sat: 9:00 AM - 7:00 PM",
      link: "#"
    }
  ];

  return (
    <div className="pt-24 md:pt-32">
       {/* Page Header */}
       <section className="bg-primary text-white py-20 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">Get in Touch</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
              We're here to understand your requirements and bring your architectural vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-slate-50 relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-4 space-y-12">
               <div>
                  <h2 className="text-3xl font-black text-primary mb-6">Contact Information</h2>
                  <p className="text-slate-600 mb-10 leading-relaxed font-medium">
                    Have any questions? Feel free to call us or visit our office. Our team usually responds within 24 hours.
                  </p>
               </div>
               
               <div className="space-y-8">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.link}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-6 group p-6 bg-white rounded-2xl shadow-lg shadow-slate-200 border border-transparent hover:border-accent/30 hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="p-4 bg-primary text-white rounded-xl shadow-lg shadow-primary/20 group-hover:bg-accent transition-colors">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-black text-primary mb-1">
                          {info.title}
                        </h4>
                        <p className="text-slate-600 leading-snug break-all font-medium">
                          {info.details}
                        </p>
                      </div>
                    </motion.a>
                  ))}
               </div>
               
               {/* Quick Social Connect */}
               <div className="bg-primary p-10 rounded-3xl text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 p-4 text-white/5 pointer-events-none">
                     <Construction size={120} />
                  </div>
                  <h3 className="text-2xl font-black mb-4 relative z-10">Follow Our Journey</h3>
                  <p className="text-slate-300 text-sm mb-6 relative z-10 font-bold opacity-80 uppercase tracking-widest leading-loose">
                     Stay updated with our latest <br /> projects and engineering <br /> breakthroughs.
                  </p>
                  <div className="flex space-x-4 relative z-10 shrink-0">
                     {['fb', 'in', 'ig', 'tw'].map(soc => (
                        <div key={soc} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-all cursor-pointer">
                           <span className="uppercase font-bold text-xs">{soc}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white p-10 lg:p-16 rounded-[2.5rem] shadow-2xl border border-slate-100 relative group overflow-hidden"
              >
                {/* Visual accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-5 -translate-x-1/2 -translate-y-1/2 rounded-full group-hover:scale-150 transition-transform duration-700" />
                
                <h2 className="text-4xl font-black mb-10 leading-tight">Send Us a Message</h2>
                
                {isSubmitSuccessful ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center py-20 text-center"
                  >
                    <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8 shadow-lg shadow-green-100">
                      <CheckCircle size={56} />
                    </div>
                    <h3 className="text-3xl font-black text-primary mb-4">Message Sent Successfully!</h3>
                    <p className="text-slate-600 text-lg mb-8 max-w-sm font-medium">
                      Thank you for reaching out. Our engineering advisor will contact you within 24 hours.
                    </p>
                    <button 
                      onClick={() => reset()}
                      className="btn-outline"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-3">
                        <label className="text-sm font-black text-slate-700 uppercase tracking-widest pl-2">Your Name</label>
                        <input
                          {...register('name')}
                          className={`w-full bg-slate-50 border-2 py-5 px-8 rounded-2xl outline-none transition-all font-medium ${errors.name ? 'border-red-500 bg-red-50' : 'border-slate-100 focus:border-accent focus:bg-white'}`}
                          placeholder="John Doe"
                        />
                        {errors.name && <p className="text-red-500 text-xs font-bold pl-2">{errors.name.message}</p>}
                      </div>
                      <div className="space-y-3">
                        <label className="text-sm font-black text-slate-700 uppercase tracking-widest pl-2">Phone Number</label>
                        <input
                          {...register('phone')}
                          className={`w-full bg-slate-50 border-2 py-5 px-8 rounded-2xl outline-none transition-all font-medium ${errors.phone ? 'border-red-500 bg-red-50' : 'border-slate-100 focus:border-accent focus:bg-white'}`}
                          placeholder="+91 98765 43210"
                        />
                        {errors.phone && <p className="text-red-500 text-xs font-bold pl-2">{errors.phone.message}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-3">
                        <label className="text-sm font-black text-slate-700 uppercase tracking-widest pl-2">Email Address</label>
                        <input
                          {...register('email')}
                          className={`w-full bg-slate-50 border-2 py-5 px-8 rounded-2xl outline-none transition-all font-medium ${errors.email ? 'border-red-500 bg-red-50' : 'border-slate-100 focus:border-accent focus:bg-white'}`}
                          placeholder="john@example.com"
                        />
                        {errors.email && <p className="text-red-500 text-xs font-bold pl-2">{errors.email.message}</p>}
                      </div>
                      <div className="space-y-3">
                        <label className="text-sm font-black text-slate-700 uppercase tracking-widest pl-2">Subject</label>
                        <select
                          {...register('subject')}
                          className={`w-full bg-slate-50 border-2 py-5 px-8 rounded-2xl outline-none transition-all font-medium appearance-none ${errors.subject ? 'border-red-500 bg-red-50' : 'border-slate-100 focus:border-accent focus:bg-white'}`}
                        >
                          <option value="">Select a service</option>
                          <option value="Residential">Residential Construction</option>
                          <option value="Commercial">Commercial Project</option>
                          <option value="Interior">Interior Design</option>
                          <option value="Infrastructure">Infrastructure</option>
                          <option value="Other">Other Query</option>
                        </select>
                        {errors.subject && <p className="text-red-500 text-xs font-bold pl-2">{errors.subject.message}</p>}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-sm font-black text-slate-700 uppercase tracking-widest pl-2">Your Message</label>
                      <textarea
                        {...register('message')}
                        rows={6}
                        className={`w-full bg-slate-50 border-2 py-5 px-8 rounded-2xl outline-none transition-all font-medium resize-none ${errors.message ? 'border-red-500 bg-red-50' : 'border-slate-100 focus:border-accent focus:bg-white'}`}
                        placeholder="Tell us about your project requirements..."
                      />
                      {errors.message && <p className="text-red-500 text-xs font-bold pl-2">{errors.message.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary py-6 text-xl shadow-2xl shadow-accent/20 flex items-center justify-center space-x-3 disabled:opacity-70 group"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Submit Message</span>
                          <Send size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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

      {/* Map Section */}
      <section className="section-padding bg-white">
         <div className="container-custom">
            <div className="text-center mb-16">
               <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Visit Our Office</h2>
               <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
                  Located in the heart of Coimbatore, our experience center is designed to inspire your construction journey.
               </p>
            </div>
            
            <div className="h-[500px] w-full bg-slate-200 rounded-[3rem] overflow-hidden shadow-3xl relative border-8 border-slate-50 transform hover:scale-[1.01] transition-transform duration-700 cursor-pointer group">
               {/* Embed Google Maps */}
               <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.1852445851494!2d76.96191631480295!3d11.01201459216174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859ab951d8baf%3A0xbc4e24efdce2789d!2sGandhipuram%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1625573432123!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true}
                  loading="lazy"
                  className="grayscale hover:grayscale-0 transition-all duration-1000"
               />
               <div className="absolute bottom-10 left-10 p-8 bg-primary/95 backdrop-blur-md text-white rounded-3xl shadow-2xl border border-white/10 max-w-xs transition-all duration-500 group-hover:scale-105 pointer-events-none origin-bottom-left">
                  <div className="p-3 bg-accent rounded-xl w-fit mb-6">
                     <MapPin size={24} />
                  </div>
                  <h4 className="text-2xl font-black mb-3">Angel Construction</h4>
                  <p className="text-slate-300 font-bold leading-relaxed mb-6">No. 319-H, 1st Floor, 2nd Street, Gandhipuram, Coimbatore - 641012</p>
                  <div className="flex items-center space-x-3 text-accent font-black tracking-widest text-xs uppercase underline decoration-accent/30 underline-offset-4">
                     <span>Get Directions</span>
                     <ArrowRight size={14} />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Quick Connect CTA */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
         <div className="absolute inset-0 bg-accent/5 pointer-events-none" />
          <div className="container-custom relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                  Prefer a Direct <br /> Conversation?
                </h2>
                <p className="text-slate-300 text-xl font-medium leading-relaxed">
                  Call our engineers directly or send us an instant <br /> WhatsApp message for quick inquiries.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 shrink-0 w-full sm:w-auto">
                 <a href="tel:+919360021210" className="flex-1 sm:flex-none">
                    <button className="w-full bg-accent hover:bg-orange-600 text-white font-black py-6 px-12 rounded-2xl shadow-2xl transition-all transform hover:-translate-y-2 active:scale-95 text-xl flex items-center justify-center space-x-3">
                       <Phone size={24} />
                       <span>+91 93600 21210</span>
                    </button>
                 </a>
                 <a href="https://wa.me/919360021210" target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none">
                    <button className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-black py-6 px-12 rounded-2xl shadow-2xl transition-all transform hover:-translate-y-2 active:scale-95 text-xl flex items-center justify-center space-x-3">
                       <MessageCircle size={24} />
                       <span>WhatsApp Us</span>
                    </button>
                 </a>
              </div>
            </div>
          </div>
      </section>
    </div>
  );
};

export default Contact;
