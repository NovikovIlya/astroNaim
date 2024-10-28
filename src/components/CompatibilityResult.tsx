import React from 'react';
import { calculateCompatibility } from '../utils/compatibility';

interface CompatibilityResultProps {
  cards: string[];
  candidateName: string;
  companyName: string;
}

const CompatibilityResult: React.FC<CompatibilityResultProps> = ({
  cards,
  candidateName,
  companyName,
}) => {
  const { score, interpretation } = calculateCompatibility(cards);

  return (
    <div className="bg-white/20 backdrop-blur-lg rounded-lg p-6 text-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Результат анализа</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span>Совместимость:</span>
          <div className="w-48 h-3 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000"
              style={{ width: `${score}%` }}
            ></div>
          </div>
          <span className="font-bold">{score}%</span>
        </div>
        
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Интерпретация:</h3>
          <p className="text-purple-200 leading-relaxed">{interpretation}</p>
        </div>

        <div className="mt-6 p-4 bg-purple-900/30 rounded-lg">
          <p className="text-sm text-purple-200">
            Рекомендация: {score >= 70 ? 
              `${candidateName} отлично подойдет компании ${companyName}. Рекомендуется продолжить процесс найма.` :
              score >= 40 ? 
              `${candidateName} имеет средний уровень совместимости с ${companyName}. Рекомендуется провести дополнительные собеседования.` :
              `${candidateName} может испытывать сложности в работе с ${companyName}. Рекомендуется поиск других кандидатов.`
            }
          </p>
        </div>
      </div>
    </div>
  );
}

export default CompatibilityResult;