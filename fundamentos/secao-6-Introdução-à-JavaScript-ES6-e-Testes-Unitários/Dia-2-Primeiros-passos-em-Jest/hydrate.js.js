const hydrate = (string) => {
  const splitString = string.split('');
  let glassesofWater = 0;

  for (let i = 0; i < splitString.length; i += 1) {
    const parsedCharacter = parseInt(splitString[i]) 
  
  if (parsedCharacter) {
    glassesofWater += parsedCharacter;
  } };
  let glass = 'copo';

  if (glassesofWater > 1) {
    glass = 'copos'; 
  }
  return `${glassesofWater} ${glass} de água`
}

module.exports = hydrate;