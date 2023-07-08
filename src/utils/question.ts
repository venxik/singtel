export const shuffleArray = <T>(array: T[]): T[] => {
  const arrayCopy = [...array];
  for (let i = arrayCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
  }
  return arrayCopy;
};

export const convertQuestion = (data: string): { word: string; isSelected: boolean }[] => {
  let temp: { word: string; isSelected: boolean }[] = [];
  data.split('').map((item) => {
    temp.push({ word: item, isSelected: false });
  });
  return temp;
};
