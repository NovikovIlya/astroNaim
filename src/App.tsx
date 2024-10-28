import React, { useState } from 'react';
import { Sparkles, User, Building2, Shuffle } from 'lucide-react';
import TarotCard from './components/TarotCard';
import CompatibilityResult from './components/CompatibilityResult';
import { cards } from './data/tarotCards';

function App() {
  const [selectedCards, setSelectedCards] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [candidateName, setCandidateName] = useState('');
  const [companyName, setCompanyName] = useState('');

  const drawCards = () => {
    if (!candidateName || !companyName) {
      alert('Пожалуйста, введите имя кандидата и название компании');
      return;
    }
    
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setSelectedCards(shuffled.slice(0, 3));
    setShowResult(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-2 flex items-center justify-center gap-2">
            <Sparkles className="text-yellow-400" />
            АстроРекрут
          </h1>
          <p className="text-purple-200">Оценка совместимости кандидата и компании через призму Таро</p>
        </header>

        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-2xl">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <User className="text-purple-300" />
                <input
                  type="text"
                  placeholder="Имя кандидата"
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value)}
                  className="w-full bg-white/20 border border-purple-300/30 rounded-lg px-4 py-2 text-white placeholder-purple-200"
                />
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="text-purple-300" />
                <input
                  type="text"
                  placeholder="Название компании"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full bg-white/20 border border-purple-300/30 rounded-lg px-4 py-2 text-white placeholder-purple-200"
                />
              </div>
            </div>

            <button
              onClick={drawCards}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all"
            >
              <Shuffle className="w-5 h-5" />
              Разложить карты
            </button>
          </div>

          {showResult && (
            <div className="mt-8">
              <div className="grid grid-cols-3 gap-4 mb-8">
                {selectedCards.map((card, index) => (
                  <TarotCard key={index} card={card} />
                ))}
              </div>
              <CompatibilityResult 
                cards={selectedCards}
                candidateName={candidateName}
                companyName={companyName}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;