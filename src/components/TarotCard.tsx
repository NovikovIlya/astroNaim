import React from 'react';

interface TarotCardProps {
  card: string;
}

const TarotCard: React.FC<TarotCardProps> = ({ card }) => {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg transform rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg transform transition-transform duration-300 hover:-translate-y-2">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-white mb-2">{card}</h3>
          <div className="w-16 h-24 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}

export default TarotCard;