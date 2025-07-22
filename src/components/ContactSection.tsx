
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { toast } from "sonner";
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const form = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const submitButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Title animation
    tl.fromTo(titleRef.current, 
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 0.3 }
    );

    // Contact info animation
    tl.fromTo(contactInfoRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.3 },
      "-=0.6"
    );

    // Form animation
    tl.fromTo(formRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.3 },
      "-=0.4"
    );
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        'service_3omlocq',
        'template_g7wk3b8',
        form.current!,
        'ZTNJGl3iTJwvpLI_D'
      )
      .then(
        (result) => {
          console.log("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message.");
        }
      );
    
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const handleButtonHover = () => {
    if (submitButtonRef.current) {
      gsap.to(submitButtonRef.current, {
        scale: 1.02,
        boxShadow: "0 0 25px rgba(139, 92, 246, 0.6)",
        duration: 0.3
      });
    }
  };

  const handleButtonLeave = () => {
    if (submitButtonRef.current) {
      gsap.to(submitButtonRef.current, {
        scale: 1,
        boxShadow: "0 10px 25px rgba(139, 92, 246, 0.3)",
        duration: 0.3
      });
    }
  };

  return (
    <div ref={sectionRef} className="min-h-screen py-24 px-4 md:px-8 overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-5xl transition-all duration-100 font-bold bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-purple-400 dark:to-blue-500 bg-gradient-to-r from-purple-700 to-blue-700">
            Get In Touch
          </h2>
          <p className="mt-6 transition-all duration-100 text-xl text-black dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'm always open to discussing new opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div ref={contactInfoRef} className="bg-white/70 dark:bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-100 border-black/20 dark:border-white/20">
            <h3 className="transition-all duration-100 text-2xl font-bold text-black dark:text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="transition-all duration-100  w-12 h-12 rounded-full dark:bg-gradient-to-r dark:from-purple-400 dark:to-blue-500 bg-gradient-to-r from-purple-700 to-blue-700 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="transition-all duration-100 text-gray-700 dark:text-gray-400 text-sm">Email</h4>
                  <p className="transition-all duration-100 text-black dark:text-white"><a href="mailto:ffvip6804@gmail.com">ffvip6804@gmail.com</a></p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 transition-all duration-100 rounded-full dark:bg-gradient-to-r dark:from-purple-400 dark:to-blue-500 bg-gradient-to-r from-purple-700 to-blue-700 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="transition-all duration-100 text-gray-700 dark:text-gray-400 text-sm">Phone</h4>
                  <p className="transition-all duration-100 text-black dark:text-white"><a href="tel:+91 6379584912">+91 6379584912</a></p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="transition-all duration-100 w-12 h-12 rounded-full dark:bg-gradient-to-r dark:from-purple-400 dark:to-blue-500 bg-gradient-to-r from-purple-700 to-blue-700 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="transition-all duration-100 text-gray-700 dark:text-gray-400 text-sm">Location</h4>
                  <p className="transition-all duration-100 text-black dark:text-white">Tirunelveli, TamilNadu</p>
                </div>
              </div>
            </div>
          </div>

          <div ref={formRef}>
            <form ref={form} onSubmit={handleSubmit} className="space-y-6 bg-white/70 dark:bg-transparent dark:p-0 p-8 rounded-2xl dark:border-none border border-black/20 transition-all duration-100">
              <div>
                <label htmlFor="name" className="block text-black dark:text-white text-sm font-medium mb-2 transition-all duration-100">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/70 dark:bg-white/10 border border-black/20 dark:border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-100 text-black dark:text-white backdrop-blur-lg"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="transition-all duration-100 block text-black dark:text-white text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/70 dark:bg-white/10 border border-black/20 dark:border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-100 text-black dark:text-white backdrop-blur-lg"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="transition-all duration-100 block text-black dark:text-white text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="transition-all duration-100 w-full px-4 py-3 bg-white/70 dark:bg-white/10 border border-black/20 dark:border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-black dark:text-white resize-none backdrop-blur-lg"
                  required
                />
              </div>
              
              <button
                ref={submitButtonRef}
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg text-white font-medium text-lg shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 disabled:opacity-70"
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
