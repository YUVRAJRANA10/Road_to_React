import { useState } from 'react'



function Card({username}) {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(42);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8 flex items-center justify-center">
      <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        {/* Card Image */}
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="Beautiful landscape" 
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-3 right-3">
            <button
              onClick={handleBookmark}
              className={`p-2 rounded-full backdrop-blur-sm transition-colors duration-200 ${
                isBookmarked 
                  ? 'bg-yellow-500 text-white' 
                  : 'bg-white/70 text-gray-600 hover:bg-white/90'
              }`}
            >
              {isBookmarked ? '★' : '☆'}
            </button>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6">
          <div className="mb-2">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-semibold">
              Nature
            </span>
          </div>
          
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            {username}
          </h2>
          
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            Discover breathtaking views and peaceful moments in nature. Perfect for hiking enthusiasts and adventure seekers.
          </p>

          {/* Card Actions */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={handleLike}
                className={`flex items-center space-x-1 transition-colors duration-200 ${
                  isLiked 
                    ? 'text-red-500' 
                    : 'text-gray-500 hover:text-red-500'
                }`}
              >
                <span className="text-lg">{isLiked ? '❤️' : '🤍'}</span>
                <span className="text-sm font-medium">{likes}</span>
              </button>
              
              <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 transition-colors duration-200">
                <span className="text-lg">💬</span>
                <span className="text-sm font-medium">12</span>
              </button>
              
              <button className="flex items-center space-x-1 text-gray-500 hover:text-green-500 transition-colors duration-200">
                <span className="text-lg">↗️</span>
                <span className="text-sm font-medium">Share</span>
              </button>
            </div>
            
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card

