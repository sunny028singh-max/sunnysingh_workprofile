import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FluidBackground } from './FluidBackground';
import { AboutMePage } from './AboutMePage';
import { SkillsPage } from './SkillsPage';
import { ProjectsPage } from './ProjectsPage';
import FunPage from './FunPage';
import { ContactPage } from './ContactPage';
import { FixedChatBot } from './FixedChatBot';

export const ToukoumWebsite: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    { id: 'hero', label: 'Home', icon: '🏠' },
    { id: 'me', label: 'Me', icon: '👤' },
    { id: 'projects', label: 'Projects', icon: '💼' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'fun', label: 'Fun', icon: '🎮' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ];

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
  };



  return (
    <div className="relative min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Fluid Background */}
      <FluidBackground />
      
      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <motion.nav 
          className="fixed top-4 left-0 right-0 z-50 px-6"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {activeSection !== 'hero' && (
            <div className="max-w-7xl mx-auto relative flex justify-center">
              <motion.button 
                onClick={() => {
                  const chatButton = document.querySelector('.chat-trigger-button') as HTMLElement;
                  if (chatButton) {
                    chatButton.click();
                  }
                }}
                className="group w-16 h-16"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-white/80 backdrop-blur-md border-2 border-purple-200 transform transition-transform duration-300 group-hover:rotate-12 shadow-lg">
                  <img 
                    src="/skpai/skp_avatar.png"
                    alt="Saswat Avatar"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.error('Image failed to load');
                      e.currentTarget.src = '/skpai/saswat.jpeg';
                    }}
                  />
                </div>
              </motion.button>

              <div className="absolute right-0 top-1/2 -translate-y-1/2">
                <motion.button 
                  onClick={() => {
                    setActiveSection('contact');
                  }}
                  className="bg-white/80 backdrop-blur-md px-6 py-2 rounded-full border border-gray-200 hover:border-purple-300 transition-all duration-300 text-sm text-gray-600 hover:text-purple-600"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Looking for a talent?
                </motion.button>
              </div>
            </div>
          )}
          {activeSection === 'hero' && (
            <div className="flex justify-end">
              <motion.button 
                onClick={() => {
                  setActiveSection('contact');
                }}
                className="bg-white/80 backdrop-blur-md px-6 py-2 rounded-full border border-gray-200 hover:border-purple-300 transition-all duration-300 text-sm text-gray-600 hover:text-purple-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Looking for a talent?
              </motion.button>
            </div>
          )}
        </motion.nav>

        {/* Main Content */}
        <AnimatePresence mode="wait">
          {activeSection === 'hero' && (
            <motion.section 
              key="hero"
              className="h-screen flex flex-col items-center justify-center px-6 text-center pt-16 pb-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
                          <motion.button
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-8 cursor-pointer focus:outline-none"
              onClick={() => {
                const chatBotInput = document.querySelector('[placeholder="Ask me about Saswat"]') as HTMLInputElement;
                if (chatBotInput) {
                  chatBotInput.focus();
                }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-purple-200 shadow-lg mx-auto mb-4 transform hover:rotate-12 transition-transform duration-300">
                <img 
                  src="/skpai/skp_avatar.png"
                  alt="Saswat Avatar"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.error('Image failed to load');
                    e.currentTarget.src = '/skpai/saswat.jpeg';
                  }}
                />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Saswat
              </h2>
            </motion.button>
              
                          <motion.h2
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold mb-4 text-gray-900"
            >
              Hey, I'm Saswat 👋
            </motion.h2>
            
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-8"
            >
              AI Portfolio
            </motion.h1>
            
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl text-gray-600 max-w-2xl mb-24"
            >
              Welcome to my AI-powered portfolio. Explore my work, skills and creative projects.
            </motion.p>
            </motion.section>
          )}

          {activeSection === 'me' && (
            <motion.div
              key="me"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <AboutMePage />
            </motion.div>
          )}

          {activeSection === 'skills' && (
            <motion.div
              key="skills"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <SkillsPage />
            </motion.div>
          )}

          {activeSection === 'projects' && (
            <motion.div
              key="projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <ProjectsPage setActiveSection={setActiveSection} />
            </motion.div>
          )}

          {activeSection === 'fun' && (
            <motion.div
              key="fun"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <FunPage />
            </motion.div>
          )}

          {activeSection === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <ContactPage />
            </motion.div>
          )}
        </AnimatePresence>


      </div>

      {/* Fixed Chat Bot */}
      <FixedChatBot />

      {/* Bottom Navigation */}
      <motion.nav 
        className="fixed bottom-0 left-0 right-0 z-40 p-4"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="flex items-center justify-center space-x-4">
          {sections.map((section) => (
            <motion.button
              key={section.id}
              onClick={() => handleSectionClick(section.id)}
              className={`flex items-center space-x-2 py-2 px-4 rounded-xl transition-all duration-300 ${
                activeSection === section.id 
                  ? 'bg-white text-purple-600 shadow-lg border border-purple-200' 
                  : 'text-gray-600 hover:text-purple-600 hover:bg-white/90 bg-white/80 backdrop-blur-md border border-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-lg">{section.icon}</span>
              <span className="text-xs font-medium">{section.label}</span>
            </motion.button>
          ))}
        </div>
      </motion.nav>
    </div>
  );
};
