//Encontrando o fatorial de 10//

// let fatorial = 10;
// for (index = 1; index <= 10; index += 1) {
// fatorial *= index;
// console.log(fatorial)
// }

//Criando algoritimo para inverter uma palavra.//
// let word = 'tryber';
// for (let index = word.length - 1; index >= 0; index -= 1) {
//     console.log(word[index]);
// }

//Imprimindo maiores e menores palavras em um array//
let array = ['java','css', 'javascript', 'python', 'html' ];
// let bgWord = '';
// for (let index = 0; index < array.length; index += 1) {
//     if (bgWord.length < array[index].length ) {
//         bgWord = array[index]
//     }
// }
// console.log(bgWord)
let smWord = ''
for (let index = 0; index < array.length; index += 1)
    if(smWord.length  < array[index].length) {
        smWord = array[index]
    }
    console.log(smWord);