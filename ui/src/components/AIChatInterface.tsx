import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  isLoading?: boolean;
}

interface AIChatInterfaceProps {
  isOpen: boolean;
  onClose: () => void;
}

// Website data that the AI can access
const websiteData = {
  personal: {
    name: "Saswat Patro",
    title: "Senior Tech Lead",
    email: "saswat24@gmail.com",
    linkedin: "https://www.linkedin.com/in/saswat-kumar-patro-55874669/",
    github: "https://github.com/saswatkumar24",
    portfolio: "https://saswatkumar24.github.io/skpai/"
  },
  experience: [
    {
      year: "2022 - Present",
      title: "Senior Tech Lead",
      company: "HCL Tech (Deutsche Bank Client)",
      description: "Application management and Project Automation. Integrating different services and tools like Netcool, Newrelic and ServiceNow Integration & MS Teams integration with Geneos. Managing servers and maintaining their health through Nimsoft and NRI. Writing perl modules, scripts, unit tests to automate various alerts and reports as per client requirement.",
      skills: ["Perl", "Shell Scripting", "Netcool", "Newrelic", "ServiceNow", "Geneos", "Nimsoft", "NRI", "CI/CD", "Automation"]
    },
    {
      year: "2020 - 2022",
      title: "I Associate - Project",
      company: "Cognizant Technology Solutions (Mastercard Client)",
      description: "Application development and Database management. Implementing various protocols for Mastercard. Writing perl modules, scripts, unit tests for different projects as per client requirement.",
      skills: ["Perl", "Database Management", "Unit Testing", "Protocol Implementation"]
    },
    {
      year: "2017 - 2020",
      title: "IT Analyst",
      company: "Tata Consultancy Services (Humana Inc. Client)",
      description: "Application development and Database management. Designing jobs to automate processes like generating invoices, timesheet report etc. Writing perl modules for different projects as per the workflow given. Writing unit test case, sql query files and helper functions as required.",
      skills: ["Perl", "SQL", "Database Management", "Automation", "Unit Testing", "Shell Scripting"]
    },
    {
      year: "2015 - 2017",
      title: "Senior Member Tech",
      company: "Aptroid Technologies Pvt. Ltd. (Zeta Global)",
      description: "Automation tool designing, Log processing and Data analysis and management. Automating log processing. Automating the process of report generation, Sending mails of reports in real time. Report generation and analysing reports to increase the deliverability of campaigns.",
      skills: ["Automation", "Log Processing", "Data Analysis", "Report Generation", "Database Management"]
    },
    {
      year: "2014 - 2015",
      title: "Project Associate",
      company: "Zeta Global",
      description: "Email Marketing and Data analytics. Worked on Email marketing analysis, automation tool designing, research and development. Wrote various automation scripts for PMTA monitoring, Email suppressions, Email sending.",
      skills: ["Email Marketing", "Data Analytics", "Automation", "PMTA", "Zeta Mail"]
    }
  ],
  education: [
    {
      degree: "B.Tech in Electronics & Communication Engineering",
      school: "Gandhi Institute of Engineering And Technology (BPUT)",
      year: "2014",
      description: "Specialization in Electronics & Communication Engineering with a focus on technical and engineering principles."
    },
    {
      degree: "Class XII (Senior Secondary)",
      school: "Triveni Academy +2 Science College (CHSE)",
      year: "2010",
      description: "Completed Senior Secondary education with a focus on Science, Mathematics, and Social Studies subjects, securing 78.7% marks."
    },
    {
      degree: "Class X (Secondary)",
      school: "Sivananda Centenary Boys' High School (BSE)",
      year: "2008",
      description: "Completed Secondary education emphasizing Science, Mathematics, and Social Studies, with a score of 81.4%."
    }
  ],
  projects: [
    {
      title: "Application Management & Automation",
      description: "Leading application management and project automation for Deutsche Bank client. Integrating monitoring tools and automating alerts and reports.",
      tech: ["Perl", "Shell Scripting", "Netcool", "Newrelic", "ServiceNow", "Geneos"],
      category: "Automation",
      featured: true
    },
    {
      title: "Mastercard Protocol Implementation",
      description: "Implemented various protocols for Mastercard client. Developed perl modules and scripts with comprehensive unit testing.",
      tech: ["Perl", "Unit Testing", "Protocol Implementation", "Database Management"],
      category: "Development",
      featured: true
    },
    {
      title: "Process Automation & Reporting",
      description: "Designed automated jobs for invoice generation, timesheet reports, and database management. Developed comprehensive testing frameworks.",
      tech: ["Perl", "SQL", "Shell Scripting", "Automation", "Unit Testing"],
      category: "Automation",
      featured: false
    },
    {
      title: "Email Marketing Analytics Platform",
      description: "Developed automation tools for email marketing analysis, log processing, and campaign deliverability optimization.",
      tech: ["Automation", "Data Analytics", "Log Processing", "Email Marketing"],
      category: "Analytics",
      featured: false
    }
  ],
  skills: {
    frontend: ["Perl CGI", "React.js"],
    backend: ["Perl", "Shell Scripting", "Python", "MySQL", "Oracle"],
    ai_ml: ["Fundamentals of AI & ML", "LangChain", "OpenAI API", "Cursor", "Prompt Engineering"],
    tools: ["SVN", "Git", "Jira", "Rally", "ALM", "Postman", "Jenkins", "TeamCity", "New Relic", "Nimsoft", "NRI", "IBM Tivoli (Netcool)", "Geneos", "OpenTelemetry"],
    certifications: ["New Relic", "Splunk", "Fundamentals of AI & ML", "GCP (Digital Cloud Leader)"]
  },
  hobbies: [
    "🤖 AI & Machine Learning",
    "💻 Programming & Automation",
    "📊 Data Analysis",
    "🔧 DevOps & Tools",
    "📚 Continuous Learning",
    "🎯 Problem Solving"
  ]
};

export const AIChatInterface: React.FC<AIChatInterfaceProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm an AI assistant for Saswat's portfolio. I can help you learn about his experience, projects, skills, and more. What would you like to know?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Function to generate AI response based on user input and website data
  const generateAIResponse = async (userInput: string): Promise<string> => {
    const input = userInput.toLowerCase();
    
    // Check if the question is about website content
    const isAboutWebsite = 
      input.includes('saswat') || 
      input.includes('experience') || 
      input.includes('project') || 
      input.includes('skill') || 
      input.includes('education') || 
      input.includes('contact') || 
      input.includes('linkedin') || 
      input.includes('github') || 
      input.includes('email') ||
      input.includes('hobby') ||
      input.includes('about') ||
      input.includes('work') ||
      input.includes('job') ||
      input.includes('technology') ||
      input.includes('tech stack');

    if (!isAboutWebsite) {
      return "I can only provide information about Saswat's portfolio, experience, projects, skills, and contact details. For questions outside this scope, please contact Saswat directly through the contact page.";
    }

    // Generate contextual responses based on the question
    if (input.includes('currently working') || input.includes('current job') || input.includes('where working now') || input.includes('present job')) {
      const currentJob = websiteData.experience[0]; // First entry is current job
      return `Saswat is currently working as ${currentJob.title} at ${currentJob.company} since ${currentJob.year}. He is leading application management and project automation for the Deutsche Bank client, integrating monitoring tools and automating alerts and reports.`;
    }

    if (input.includes('experience') || input.includes('work history') || input.includes('all jobs')) {
      const exp = websiteData.experience;
      return `Saswat has ${exp.length} years of professional experience:\n\n${exp.map(e => 
        `• ${e.year}: ${e.title} at ${e.company}\n  ${e.description}`
      ).join('\n\n')}`;
    }

    if (input.includes('project')) {
      const projects = websiteData.projects;
      return `Saswat has worked on several key projects:\n\n${projects.map(p => 
        `• ${p.title} (${p.category})\n  ${p.description}\n  Technologies: ${p.tech.join(', ')}`
      ).join('\n\n')}`;
    }

    if (input.includes('skill') || input.includes('technology') || input.includes('tech')) {
      const skills = websiteData.skills;
      return `Saswat's technical skills include:\n\nProgramming Languages: ${skills.frontend.join(', ')}\nDatabases & Tools: ${skills.backend.join(', ')}\nAI/ML: ${skills.ai_ml.join(', ')}\nMonitoring & DevOps: ${skills.tools.join(', ')}\n\nCertifications: ${skills.certifications.join(', ')}`;
    }

    if (input.includes('education')) {
      const edu = websiteData.education;
      return `Saswat's education:\n\n${edu.map(e => 
        `• ${e.degree} from ${e.school} (${e.year})\n  ${e.description}`
      ).join('\n\n')}`;
    }

    if (input.includes('contact') || input.includes('email') || input.includes('linkedin') || input.includes('github')) {
      const contact = websiteData.personal;
      return `You can reach Saswat through:\n\n• Email: ${contact.email}\n• LinkedIn: ${contact.linkedin}\n• GitHub: ${contact.github}\n• Portfolio: ${contact.portfolio}`;
    }

    if (input.includes('hobby') || input.includes('interest')) {
      return `Saswat's hobbies and interests include:\n\n${websiteData.hobbies.join('\n')}`;
    }

    if (input.includes('about') || input.includes('who')) {
      return `Saswat Patro is a Senior Tech Lead with over 9 years of experience in application development, automation, and database management. He specializes in Perl programming, shell scripting, automation tools, and has recently expanded into AI/ML technologies. He has worked with major clients like Deutsche Bank, Mastercard, Humana Inc., and Zeta Global. He's passionate about automation, problem-solving, and continuous learning in technology.`;
    }

    // Default response for general questions about the website
    return "I can help you learn about Saswat's experience, projects, skills, education, contact information, and hobbies. What specific information are you looking for?";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Add loading message
    const loadingMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: '',
      isUser: false,
      timestamp: new Date(),
      isLoading: true
    };

    setMessages(prev => [...prev, loadingMessage]);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const aiResponse = await generateAIResponse(inputValue);
      
      // Replace loading message with actual response
      setMessages(prev => prev.map(msg => 
        msg.isLoading ? {
          id: msg.id,
          text: aiResponse,
          isUser: false,
          timestamp: new Date()
        } : msg
      ));
    } catch (error) {
      // Replace loading message with error
      setMessages(prev => prev.map(msg => 
        msg.isLoading ? {
          id: msg.id,
          text: "Sorry, I'm having trouble connecting right now. Please try again later.",
          isUser: false,
          timestamp: new Date()
        } : msg
      ));
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-2xl w-full max-w-md max-h-[80vh] overflow-hidden border border-gray-200 shadow-2xl"
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-purple-500 to-pink-500">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-purple-600 font-bold text-sm">AI</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Saswat's AI Assistant</h3>
              <p className="text-xs text-purple-100">Ask me anything about Saswat</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-purple-200 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-96">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, x: message.isUser ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-2xl ${
                    message.isUser
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  {message.isLoading ? (
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                    </div>
                  ) : (
                    <>
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                      <p className="text-xs opacity-60 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about Saswat's experience, projects, skills..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isLoading}
              className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Send
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            AI-powered responses based on Saswat's portfolio data
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};
