import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init('n3U7Znh_Ky9SSDDus');
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      title: "Email",
      value: "saswat24@gmail.com",
      icon: "📧",
      color: "from-blue-500 to-cyan-500",
      link: "mailto:saswat24@gmail.com",
      width: "half"
    },
    {
      title: "Phone",
      value: "+91 9908849156",
      icon: "📱",
      color: "from-green-500 to-emerald-500",
      link: "tel:+919908849156",
      width: "half"
    },
    {
      title: "LinkedIn",
      value: "Saswat Kumar",
      icon: "💼",
      color: "from-blue-600 to-blue-800",
      link: "https://www.linkedin.com/in/saswat-kumar-patro-55874669/",
      width: "half"
    },
    {
      title: "GitHub",
      value: "Saswat Kumar",
      icon: "🐙",
      color: "from-gray-700 to-gray-900",
      link: "https://github.com/saswatkumar24",
      width: "half"
    },
    {
      title: "Portfolio",
      value: "AI Portfolio",
      icon: "🌐",
      color: "from-purple-500 to-pink-500",
      link: "https://saswatkumar24.github.io/skpai/",
      width: "half"
    },
    {
      title: "Resume",
      value: "Download Resume",
      icon: "📄",
      color: "from-indigo-500 to-blue-500",
      link: "saswat_10y_hcl.docx",
      width: "half"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Sending email with data:', formData);
      const templateParams = {
        name: formData.name,
        email: formData.email,
        title: formData.subject, // Changed to match template variable
        message: formData.message
      };
      
      // Log the parameters being sent
      console.log('Sending with params:', templateParams);      console.log('Template parameters:', templateParams);
      
      await emailjs.send(
        'service_6zyg8qw',
        'template_ab7miu7',
        templateParams,
        'n3U7Znh_Ky9SSDDus'
      );

      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      console.log('Email sent successfully!');
      alert('Message sent successfully! I\'ll get back to you soon.');
    } catch (error: any) {
      console.error('Detailed email error:', {
        error,
        message: error.message,
        text: error.text
      });
      alert(`Failed to send message: ${error.message || 'Please try again later.'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="min-h-screen p-6 pt-24 pb-28" // Adjusted padding
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      {/* Header */}
      <motion.div
        className="text-center mb-10"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
          Get In Touch
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          I'd love to hear from you! Whether you have a project idea, want to collaborate, or just want to say hello.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Let's Connect
            </h2>
            
            <div className="grid grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center h-[3.2rem] p-3 bg-white/80 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:scale-105 group shadow-lg ${(info as any).width === 'half' ? 'col-span-1' : 'col-span-2'}`}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${info.color} flex items-center justify-center text-base mr-3 group-hover:scale-110 transition-transform duration-300`}>
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                      {info.title}
                    </h3>
                    <p className="text-sm text-gray-700">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-5 border border-purple-200 shadow-lg mt-4">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                🚀 What I'm Looking For
              </h3>
              <ul className="space-y-1.5 text-gray-700 text-sm">
                <li className="leading-relaxed">• AI/ML development opportunities</li>
                <li className="leading-relaxed">• Senior Perl/Shell scripting developer positions</li>
                <li className="leading-relaxed">• Solution Architect or Project Manager Roles</li>
                <li className="leading-relaxed">• IBM Tivoli (Netcool), Nimsoft UIM, NewRelic Engineering opportunities</li>
                <li className="leading-relaxed">• Networking with fellow developers</li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Send a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-3 bg-white/80 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="Your Name *"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-3 bg-white/80 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="Your Email *"
                  />
                </div>
              </div>
              
              <div>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-3 bg-white/80 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                  placeholder="Subject *"
                />
              </div>
              
              <div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={8}
                  className="w-full px-3 py-3 bg-white/80 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                  placeholder="Your Message *"
                />
              </div>
              
              <div className="-mt-2">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 px-6 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"

                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    'Send Message →'
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        className="text-center mt-12 mb-10"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-3xl p-8 max-w-4xl mx-auto border border-blue-200">
          <h3 className="text-2xl font-bold text-black mb-4">
            🌟 Ready to Start Something Amazing?
          </h3>
          <p className="text-black text-lg">
            I'm always excited to work on new projects and collaborate with talented people. 
            Let's turn your ideas into reality!
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};
