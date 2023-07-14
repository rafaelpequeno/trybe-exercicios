const { log } = require('console');

const fs = require('fs').promises;

const archive = 'src/simpsons.json';

// #A

// const fs = require('fs');

// const data = fs.readFileSync(archive, 'utf-8');

// console.log(data);

// #B

// const readAsyncFile = async (characterId) => {
//     try {
//         const data = await fs.readFile(archive, 'utf-8');
//         const content = JSON.parse(data);
//         console.log(content.find((simpson) => Number(simpson.id) === characterId));
//     } catch (error) {
//         console.error('id não encontrado');
//     }
// };

// readAsyncFile(8);

// #C

// const readAsyncFile = async () => {
//         try {
//             const data = await fs.readFile(archive, 'utf-8');
//             const content = JSON.parse(data);
//             const newArray = content.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');
//             console.log(newArray);
//         } catch (error) {
//             console.error('id não encontrado');
//         }
//     };

//     readAsyncFile();

// #D

// const createSimpsonsFamily = async () => {
//                 const data = await fs.readFile(archive, 'utf-8');
//                 const content = JSON.parse(data);
//                 const familyIds = [1,2,3,4];
//                 const simpsonsFamily = content.
//                     filter((simpson) => familyIds.includes(Number(simpson.id)));
//                 await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
//         };
    
//     createSimpsonsFamily();

// #E

// const addToFamily = async () => {
//     const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
//     const simpsonsFamily = JSON.parse(fileContent)
//     simpsonsFamily.push({ id: '8', name: 'Nelson Muntz' });
//     await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
// };

// addToFamily();

// #F

// const updateCharacter = async () => {
//     const data = await fs.readFile('./simpsonsFamily.json', 'utf-8')
//     const content = JSON.parse(data);
//     const simpsonsWithoutNelson = content.filter((simpson) => simpson.id !== '8');

//     const addMargie = simpsonsWithoutNelson.concat([{ id: '15', name: 'Margie Simpson' }]);

//     return fs.writeFile('./simpsonsFamily.json', JSON.stringify(addMargie));
// }

// updateCharacter();