//Percorrendo um array
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log(numbers);
 
//Somando todos os valores em um array
let sum = numbers [0] + numbers [1] + numbers [2] + numbers [3] + numbers [4] + numbers [5] + numbers [6] + numbers [7] + numbers [8] + numbers [9]; {
console.log(sum);
}

//Calculando média em um array
let media = sum / numbers.length; {
console.log(media)   
}

//Se um valor for maior que outro no array imprima uma mensagem
if (media > 20) {
    console.log('valor maior que 20')
} else {
    console.log('valor menor ou igual a 20');
}

//Descubrindo maior valor em um array utilizando o for
let largest = 0
for (index = 0; index < numbers.length; index += 1) {
    if (largest < numbers[index]) {
        largest = numbers [index]; 
    } 
}
console.log(largest);

//Descobrindo valores ímpares em um array
let odds = 0;
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        odds += 1;
    }
}

if (odds === 0) {
    console.log('nenhum valor ímpar encontrado')
} else {
    console.log(odds);
} // Este código imprime quantos ímpares tem no array

// Ou 

let odds2 = numbers.filter(n => n%2)

console.log(odds2)
// Este código imprime os números ímpares fonte:https://stackoverflow.com/questions/45570965/javascript-how-to-return-an-array-with-odd-numbers

//Descobrindo menor valor em um array
let smaller = numbers[0]
for (let index = 0; index < numbers.length; index += 1) {
    if (smaller > numbers[index])
    smaller = numbers[index];
}
console.log(smaller);

//Criando um array de 1 a 25 utilizando o for 
// for (let arrayDeUmAVinteECinco = 1; arrayDeUmAVinteECinco <= 25; arrayDeUmAVinteECinco += 1) {
//     console.log(arrayDeUmAVinteECinco);
// }

//Utilizando o array criado anteriormente imprima a divisão de cada elemento por 2
for (let arrayDe1A25 = 1; arrayDe1A25 <= 25; arrayDe1A25 += 1) {
    console.log(arrayDe1A25 / 2);
}
