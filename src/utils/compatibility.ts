interface CompatibilityResult {
  score: number;
  interpretation: string;
}

const cardMeanings: Record<string, { positive: boolean; weight: number }> = {
  'Маг': { positive: true, weight: 1.2 },
  'Верховная Жрица': { positive: true, weight: 1.1 },
  'Императрица': { positive: true, weight: 1.3 },
  'Император': { positive: true, weight: 1.2 },
  'Иерофант': { positive: true, weight: 1.0 },
  'Влюбленные': { positive: true, weight: 1.4 },
  'Колесница': { positive: true, weight: 1.2 },
  'Сила': { positive: true, weight: 1.3 },
  'Отшельник': { positive: false, weight: 0.8 },
  'Колесо Фортуны': { positive: true, weight: 1.0 },
  'Справедливость': { positive: true, weight: 1.1 },
  'Повешенный': { positive: false, weight: 0.7 },
  'Смерть': { positive: false, weight: 0.6 },
  'Умеренность': { positive: true, weight: 1.0 },
  'Дьявол': { positive: false, weight: 0.5 },
  'Башня': { positive: false, weight: 0.4 },
  'Звезда': { positive: true, weight: 1.4 },
  'Луна': { positive: false, weight: 0.8 },
  'Солнце': { positive: true, weight: 1.5 },
  'Суд': { positive: true, weight: 1.1 },
  'Мир': { positive: true, weight: 1.5 }
};

export const calculateCompatibility = (cards: string[]): CompatibilityResult => {
  let totalWeight = 0;
  let positiveWeight = 0;

  cards.forEach(card => {
    const meaning = cardMeanings[card];
    if (meaning) {
      totalWeight += meaning.weight;
      if (meaning.positive) {
        positiveWeight += meaning.weight;
      }
    }
  });

  const score = Math.round((positiveWeight / totalWeight) * 100);

  let interpretation = '';
  if (score >= 80) {
    interpretation = 'Карты указывают на исключительную совместимость. Энергетические потоки кандидата и компании находятся в гармонии. Это может привести к долгосрочному и продуктивному сотрудничеству.';
  } else if (score >= 60) {
    interpretation = 'Наблюдается хорошая совместимость с некоторыми областями для роста. Карты советуют обратить внимание на развитие взаимопонимания и адаптацию.';
  } else if (score >= 40) {
    interpretation = 'Средний уровень совместимости. Потребуется работа над преодолением возможных препятствий и различий в подходах.';
  } else {
    interpretation = 'Карты предупреждают о возможных сложностях в совместной работе. Рекомендуется тщательно взвесить все за и против перед принятием решения.';
  }

  return { score, interpretation };
};