
const yearSeasons = {
    spring: ['March', 'April', 'May'],
    summer: ['June', 'July', 'August'],
    autumn: ['September', 'October', 'November'],
    winter: ['December', 'January', 'February'],
  };
  // yearSeasons: estações do ano.

  // // Eu fiz assim 
// const {spring} = yearSeasons;
// const {summer} = yearSeasons;
// const {autumn} = yearSeasons;
// const {winter} = yearSeasons;

// Assim é mais limpo e é o correto
const {spring, summer, autumn, winter} = yearSeasons;
const year = [...spring, ...summer, ...autumn, ...winter]
console.log(year);