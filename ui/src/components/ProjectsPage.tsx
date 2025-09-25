import React from 'react';
import { motion } from 'framer-motion';

interface ProjectsPageProps {
  setActiveSection: (section: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ setActiveSection }) => {
  const projects = [
    {
      title: "AI Portfolio",
      description: "Built a personal portfolio website with an AI-powered avatar that interactively answers questions about my professional experience, technical skills, projects, and fun facts. Designed to provide a dynamic, engaging alternative to a static resume.",
      tech: ["AI", "OpenAI API", "LangChain", "React", "CSS", "Cursor"],
      image: "🤖",
      category: "AI/ML",
      link: "https://saswatkumar24.github.io/skpai/",
      featured: true
    },
    {
      title: "CBSE Student Helper Chatbot",
      description: "Developed an AI chatbot assistant tailored for CBSE students (Classes 1–12). The chatbot provides instant access to study materials, NCERT books, and answers to subject-related queries, making learning more interactive, accessible, and personalized.",
      tech: ["AI", "OpenAI API", "LangChain", "React", "CSS", "Cursor"],
      image: "🎓",
      category: "AI/ML",
  link: "https://github.com/saswatkumar24",
      featured: true
    },
    {
      title: "Email Data Cleaning Tool",
      description: "Designed a data cleaning utility for businesses using large-scale email data. The tool automatically detects and removes invalid, duplicate, and improperly formatted email addresses, while generating two categorized outputs: cleaned data and rejected data with reasons for removal.",
      tech: ["AI", "OpenAI API", "LangChain", "Shell Scripting", "CSS", "Cursor"],
      image: "🧹",
      category: "AI/ML",
      link: "https://saswatkumar24.github.io/emailcleaner/",
      featured: true
    },
    {
      title: "Application Management & Automation",
      description: "Leading application management and project automation for Deutsche Bank client. Integrating monitoring tools like Netcool, Newrelic, ServiceNow, and Geneos. Automating alerts, reports, and server health monitoring through Nimsoft and NRI.",
      tech: ["Perl", "Shell Scripting", "Netcool", "Newrelic", "ServiceNow", "Geneos", "Nimsoft", "NRI", "CI/CD"],
      image: "🔧",
      category: "Automation",
      link: "#",
      featured: true
    },
    {
      title: "Monitoring & Observability Tools",
      description: "Integrated and managed various monitoring tools including New Relic, Nimsoft, NRI, IBM Tivoli (Netcool), Geneos, and OpenTelemetry for comprehensive system monitoring.",
      tech: ["New Relic", "Nimsoft", "NRI", "IBM Tivoli", "Geneos", "OpenTelemetry", "Monitoring", "Observability"],
      image: "📈",
      category: "Observability",
      link: "#",
      featured: true
    },
    {
      title: "Process Automation & Reporting",
      description: "Designed automated jobs for invoice generation, timesheet reports, and database management. Developed comprehensive testing frameworks and SQL query optimization.",
      tech: ["Perl", "SQL", "Shell Scripting", "Automation", "Unit Testing", "Database Management"],
      image: "📊",
      category: "Automation",
      link: "#",
      featured: false
    },
    {
      title: "Email Marketing Analytics Platform",
      description: "Developed automation tools for email marketing analysis, log processing, and campaign deliverability optimization. Created real-time reporting systems.",
      tech: ["Automation", "Data Analytics", "Log Processing", "Email Marketing", "PMTA", "Zeta Mail"],
      image: "📧",
      category: "Analytics",
      link: "#",
      featured: false
    },
    {
      title: "Database Management & Optimization",
      description: "Managed and optimized databases for various clients. Implemented data fixes, sanity checks, and automated database maintenance processes.",
      tech: ["MySQL", "Oracle", "SQL", "Database Management", "Automation", "Shell Scripting"],
      image: "🗄️",
      category: "Database",
      link: "#",
      featured: false
    },
    {
      title: "Mastercard Protocol Implementation",
      description: "Implemented various protocols for Mastercard client. Developed perl modules and scripts with comprehensive unit testing. Managed database operations and application development.",
      tech: ["Perl", "Unit Testing", "Protocol Implementation", "Database Management", "Shell Scripting"],
      image: "💳",
      category: "Development",
      link: "#",
      featured: false
    }
  ];

  const categories = ["All", "AI/ML", "Observability", "Automation", "Development", "Analytics", "Database", "DevOps"] as const;
  const [selectedCategory, setSelectedCategory] = React.useState<typeof categories[number]>("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <motion.div
      className="min-h-screen p-6 pt-24 pb-28"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-6">
          My Projects
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A collection of innovative projects that showcase my skills in web development, AI/ML, and emerging technologies.
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-12"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900 border border-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`group relative overflow-hidden rounded-2xl ${
                project.featured 
                  ? 'md:col-span-2 lg:col-span-1 bg-gradient-to-br from-purple-100 to-pink-100' 
                  : 'bg-white/80'
              } backdrop-blur-sm border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:scale-105 shadow-lg`}
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </span>
                </div>
              )}

              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
                {project.image}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-purple-600 font-medium">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="text-yellow-500">⭐</span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Button - Only for AI/ML projects */}
                {project.category === "AI/ML" && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 text-center"
                  >
                    View Project →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        className="text-center mt-20 mb-10"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl p-8 max-w-4xl mx-auto border border-purple-500/30">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            🚀 Let's Build Something Amazing Together
          </h3>
          <p className="text-gray-700 text-lg mb-6">
            Have an idea for a project? I'm always excited to collaborate on innovative solutions and bring creative ideas to life.
          </p>
          <button
            onClick={() => setActiveSection('contact')}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};
