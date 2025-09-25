import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface AskMeAnythingProps {
  onAskQuestion?: (question: string) => void;
}

export const AskMeAnything: React.FC<AskMeAnythingProps> = ({ onAskQuestion = () => {} }) => {
  const [question, setQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState('');

  // Simple chatbot responses
  const getResponse = (userQuestion: string): string => {
    const q = userQuestion.toLowerCase();
    
    if (q.includes('currently working') || q.includes('current job') || q.includes('where working')) {
      return "I'm currently working as Senior Tech Lead at HCL Tech (Deutsche Bank client) since 2022. I lead application management and project automation.";
    }
    
    if (q.includes('experience') || q.includes('work history')) {
      return "I have 9+ years of experience across 5 companies: HCL Tech, Cognizant, TCS, Aptroid Technologies, and Zeta Global. I've worked with major clients like Deutsche Bank, Mastercard, Humana Inc.";
    }
    
    if (q.includes('skill') || q.includes('technology')) {
      return "My skills include Perl, Shell Scripting, Python, SQL, MySQL, Oracle, React.js, AI/ML fundamentals, LangChain, OpenAI API, New Relic, Splunk, Jenkins, and more.";
    }
    
    if (q.includes('project')) {
      return "I've worked on projects like Application Management & Automation for Deutsche Bank, Mastercard Protocol Implementation, Process Automation & Reporting, Email Marketing Analytics, and Database Management & Optimization.";
    }
    
    if (q.includes('contact') || q.includes('email') || q.includes('linkedin')) {
      return "You can reach me at saswat24@gmail.com, LinkedIn: linkedin.com/in/saswat-kumar-patro-55874669, or GitHub: github.com/saswatkumar24";
    }
    
    if (q.includes('education')) {
      return "I have a B.Tech in Electronics & Communication Engineering from Gandhi Institute of Engineering And Technology (2014), plus Class XII and Class X education.";
    }
    
    if (q.includes('certification')) {
      return "I have certifications in New Relic, Splunk, Fundamentals of AI & ML, and GCP (Digital Cloud Leader).";
    }
    
    return "I can help you with information about my experience, skills, projects, education, and contact details. Try asking about my current job, skills, or projects!";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim() && !isLoading) {
      setIsLoading(true);
      const answer = getResponse(question.trim());
      setResponse(answer);
      onAskQuestion(question.trim());
      setQuestion('');
      // Reset loading after a short delay
      setTimeout(() => setIsLoading(false), 1000);
    }
  };

  return (
    <motion.div
      className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 max-w-4xl mx-auto border border-purple-200 shadow-lg"
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          🤖 Ask me anything
        </h3>
        <p className="text-gray-700 text-lg mb-6">
          Have a question about my experience, projects, or skills? Just ask!
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="e.g., Where are you currently working?"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !question.trim()}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Asking...' : 'Ask'}
          </button>
        </form>
        
        {/* Response Display */}
        {response && (
          <motion.div
            className="mt-6 p-4 bg-white/80 rounded-lg border border-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-800 text-left leading-relaxed">{response}</p>
          </motion.div>
        )}
        
        <div className="mt-4 text-sm text-gray-600">
          <p>Try asking: "Where are you currently working?", "What are your skills?", "Tell me about your projects"</p>
        </div>
      </div>
    </motion.div>
  );
};
