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
// let smWord = array[0]
// for (let index = 0; index < array.length; index += 1)
//     if( array[index].length < smWord.length  ) {
//         smWord = array[index];
//     }
//     console.log(smWord);

// let maiorNumPrimo
// for (indexNumero = 2; indexNumero <= 50; indexNumero += 1) {
//     let numPrimo = true;
//     for (indexDivisor = 2; indexDivisor < indexNumero; indexDivisor += 1) {
//         if (indexNumero % indexDivisor === 0) {
//             numPrimo = false;
//         }
//     }
// if (numPrimo) {
//     maiorNumPrimo = indexNumero;
// }    
// }
// console.log(maiorNumPrimo);

//**Bonus */

let n = 5;
let forma = '*'   
let saidal = ''
let saidac = n - 1;
// for (index = 0; index < n; index += 1) {
// saida = saida + forma;
// };
// for (index = 0; index < n; index += 1) {
//     console.log(saida);
// } 

// for (index = 0; index <= n; index += 1) {
//     console.log(saida);
//     saida = saida + forma;
// };


for (indexl = 0; indexl <= n; indexl +=1) {
for (let indexc = 0; indexc < n; indexc += 1) {
    if (indexc < indexl) {
        saidal = saidal + ' ';
    } else {
        saidal = saidal + forma;
    }
}
    console.log(saidal);
    saidal = '';
    saidac -= 1;
}
