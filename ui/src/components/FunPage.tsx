import React from 'react';
import { motion } from 'framer-motion';

const FunPage: React.FC = () => {
  const hobbies = [
    {
      title: "📈 Investing",
      description: "Passionate about investing, market analysis, and building sustainable wealth. I manage a personalized and diversified portfolio with a CAGR of 23.5% over the last 5 years. My strategy combines long-term investing with active trading in futures and options.",
      icon: "💹",
      color: "from-green-500 to-emerald-500",
      details: ["Stock Market", "Futures & Options", "Technical Analysis", "Portfolio Management", "Wealth Building"]
    },
    {
      title: "🎮 Gaming",
      description: "Passionate gamer and Call of Duty enthusiast — catch me in action at Legend level. My handle is skp1993, send a request if you want to squad up with our group!",
      icon: "🕹️",
      color: "from-blue-500 to-cyan-500",
      details: ["Call of Duty", "Legend Level", "Team Player", "FPS Games", "Competitive Gaming"]
    },
    {
      title: "✈️ Traveling",
      description: "Love both the mountains of Manali and the beaches of Goa — from Shimla and Ooty to the Taj Mahal, I've roamed many corners of India. Always ready to pack my bags (with my wife as my favorite travel buddy) for the next adventure!",
      icon: "🌎",
      color: "from-yellow-500 to-orange-500",
      details: ["Indian Mountains", "Beach Life", "Historical Sites", "Couple Travel", "Adventure Seeker"]
    },
    {
      title: "🎥 Movies & Shows",
      description: "A vivid watcher who believes The Big Bang Theory beats Friends (and yes, The Office too 😅). Comedy, Action, and Suspense Thrillers are my go-to genres, and I never run out of recommendations. Basically, I'm the Chandler of real life — sarcasm included, binge-watching guaranteed! I'm also a Sheldon Cooper at times… Bazinga!",
      icon: "🎬",
      color: "from-purple-500 to-pink-500",
      details: ["The Big Bang Theory", "Comedy Shows", "Action Movies", "Suspense Thrillers", "Binge Watching"]
    },
    {
      title: "👨‍🏫 Teaching",
      description: "Previously volunteered with eVidyaloka, teaching underprivileged children and shaping young minds. I always enjoy helping others in their academic journey and sharing knowledge whenever I can.",
      icon: "📚",
      color: "from-indigo-500 to-blue-500",
      details: ["eVidyaloka", "Volunteer Teaching", "Mentoring", "Knowledge Sharing", "Education Impact"]
    },
    {
      title: "🌱 Gardening",
      description: "Finding peace and satisfaction in nurturing plants and creating a green space. It's my way of connecting with nature.",
      icon: "🪴",
      color: "from-green-400 to-teal-500",
      details: ["Indoor Plants", "Herb Garden", "Plant Care", "Urban Gardening", "Sustainable Practices"]
    }
  ];

  const [selectedHobby, setSelectedHobby] = React.useState<typeof hobbies[0] | null>(null);

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
          Fun & Hobbies
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Life isn't all about coding! Here's what I love to do when I'm not building amazing applications.
        </p>
      </motion.div>

      {/* Hobbies Grid */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.title}
              className="group cursor-pointer"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedHobby(hobby)}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:scale-105 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
                <div className="text-center">
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${hobby.color} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300`}>
                    {hobby.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                    {hobby.title}
                  </h3>
                  
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {hobby.description}
                  </p>
                  
                  <div className="mt-4 flex flex-wrap gap-2 justify-center">
                    {hobby.details.slice(0, 3).map((detail) => (
                      <span
                        key={detail}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border border-gray-200"
                      >
                        {detail}
                      </span>
                    ))}
                    {hobby.details.length > 3 && (
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                        +{hobby.details.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Section */}
      <motion.div
        className="text-center mb-16"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 max-w-4xl mx-auto border border-purple-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            🎯 What I'm Currently Learning
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white/80 rounded-xl p-4 border border-gray-200 shadow-lg">
              <div className="text-3xl mb-2">📈</div>
              <h4 className="font-semibold text-gray-900 mb-2">Investing in US</h4>
              <p className="text-gray-700 text-sm">Exploring US markets through the S&P 500, NASDAQ tech giants, ETFs, and individual stock opportunities.</p>
            </div>
            <div className="bg-white/80 rounded-xl p-4 border border-gray-200 shadow-lg">
              <div className="text-3xl mb-2">🎨</div>
              <h4 className="font-semibold text-gray-900 mb-2">Interior Designing</h4>
              <p className="text-gray-700 text-sm">Doing interior design of my new house</p>
            </div>
            <div className="bg-white/80 rounded-xl p-4 border border-gray-200 shadow-lg">
              <div className="text-3xl mb-2">🌱</div>
              <h4 className="font-semibold text-gray-900 mb-2">Urban Gardening</h4>
              <p className="text-gray-700 text-sm">Exploring sustainable gardening practices</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Fun Facts */}
      <motion.div
        className="text-center mb-10"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-3xl p-8 max-w-4xl mx-auto border border-blue-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            🎉 Fun Facts About Me
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="flex items-start space-x-3">
              <span className="text-2xl">📈</span>
              <div>
                <h4 className="font-semibold text-gray-900">Market Enthusiast</h4>
                <p className="text-gray-700 text-sm">Started investing at an early age and love analyzing market trends</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🎮</span>
              <div>
                <h4 className="font-semibold text-gray-900">Strategic Gamer</h4>
                <p className="text-gray-700 text-sm">Use gaming to enhance problem-solving and decision-making skills</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">👨‍🏫</span>
              <div>
                <h4 className="font-semibold text-gray-900">Knowledge Sharer</h4>
                <p className="text-gray-700 text-sm">Passionate about mentoring and helping others grow in their careers</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🌱</span>
              <div>
                <h4 className="font-semibold text-gray-900">Green Thumb</h4>
                <p className="text-gray-700 text-sm">Maintaining a thriving indoor garden and promoting sustainable living</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Modal for Selected Hobby */}
      {selectedHobby && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedHobby(null)}
        >
          <motion.div
            className="bg-gray-900 rounded-2xl p-8 max-w-2xl w-full border border-gray-700"
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-6">
              <div className={`w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r ${selectedHobby.color} flex items-center justify-center text-4xl`}>
                {selectedHobby.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{selectedHobby.title}</h3>
              <p className="text-gray-300">{selectedHobby.description}</p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-3">Skills & Interests:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedHobby.details.map((detail) => (
                  <span
                    key={detail}
                    className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700"
                  >
                    {detail}
                  </span>
                ))}
              </div>
            </div>
            
            <button
              onClick={() => setSelectedHobby(null)}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default FunPage;
