import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ChatInterfaceProps {
  type: string;
  onClose: () => void;
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({ type, onClose }) => {
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean; timestamp: Date }>>([]);
  const [isTyping, setIsTyping] = useState(false);

  const chatResponses = {
    me: [
      "Hi! I'm Raphael, a passionate developer and AI enthusiast.",
      "I love creating innovative solutions and exploring new technologies.",
      "My journey in tech started with web development and evolved into AI/ML.",
      "When I'm not coding, you'll find me reading sci-fi novels or hiking.",
      "I believe in the power of technology to solve real-world problems."
    ],
    projects: [
      "I've worked on various exciting projects!",
      "My latest project is an AI-powered portfolio generator.",
      "I also built a real-time collaboration tool for developers.",
      "One of my favorites is a machine learning model for image recognition.",
      "I'm currently working on a blockchain-based voting system."
    ],
    skills: [
      "I'm proficient in React, Node.js, and Python.",
      "My AI/ML skills include TensorFlow, PyTorch, and scikit-learn.",
      "I'm experienced with cloud platforms like AWS and Google Cloud.",
      "I also work with databases like PostgreSQL and MongoDB.",
      "My design skills include Figma and CSS animations."
    ],
    fun: [
      "Life isn't all about coding! I love playing guitar.",
      "I'm a huge fan of indie games and retro gaming.",
      "I enjoy cooking, especially trying new international recipes.",
      "I'm learning to paint with watercolors (still a beginner!).",
      "I love traveling and experiencing different cultures."
    ],
    contact: [
      "I'd love to hear from you!",
      "You can reach me at raphael@toukoum.fr",
      "I'm also active on LinkedIn and GitHub.",
      "Feel free to connect if you want to collaborate.",
      "I'm always open to interesting opportunities and discussions."
    ]
  };

  useEffect(() => {
    if (type && chatResponses[type as keyof typeof chatResponses]) {
      setIsTyping(true);
      
      // Simulate typing effect
      const responses = chatResponses[type as keyof typeof chatResponses];
      let currentIndex = 0;

      const typeInterval = setInterval(() => {
        if (currentIndex < responses.length) {
          setMessages(prev => [...prev, {
            text: responses[currentIndex],
            isUser: false,
            timestamp: new Date()
          }]);
          currentIndex++;
        } else {
          setIsTyping(false);
          clearInterval(typeInterval);
        }
      }, 1500);

      return () => clearInterval(typeInterval);
    }
  }, [type]);

  const handleClose = () => {
    setMessages([]);
    setIsTyping(false);
    onClose();
  };

  const getTitle = () => {
    const titles = {
      me: "About Me",
      projects: "My Projects",
      skills: "My Skills",
      fun: "Fun Stuff",
      contact: "Get in Touch"
    };
    return titles[type as keyof typeof titles] || "Chat";
  };

  return (
    <motion.div
      className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-black/80"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleClose}
    >
      <motion.div
        className="bg-gray-900 rounded-2xl w-full max-w-md max-h-[80vh] overflow-hidden border border-gray-700"
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white">{getTitle()}</h3>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-96">
          <AnimatePresence>
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: message.isUser ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-2xl ${
                    message.isUser
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-700 text-white'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs opacity-60 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing Indicator */}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="bg-gray-700 text-white px-4 py-2 rounded-2xl">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-100" />
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-200" />
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-700">
          <p className="text-xs text-gray-400 text-center">
            Click outside to close • AI-powered responses
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};
