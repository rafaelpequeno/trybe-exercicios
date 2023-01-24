// const a = 10;
// const b = 20;

// const adição = a + b;
// const subtração = a - b;
// const multiplicação = a * b;
// const divisão = a / b;
// const modulo = a % b;

// console.log(adição);
// console.log(subtração);
// console.log(multiplicação);
// console.log(divisão);
// console.log(modulo);

// a = 10;
// b = 20;
// let maiorNumero;
// if (a > b) {
//     maiorNumero = a;
// } else {
//     maiorNumero = b;
// }
// console.log(maiorNumero);

// let maiorDeTres;
// a = 10;
// b = 20;
// const c = 30;
// if (a > b & c) {
//     maiorDeTres = a;
// } else if (b > a & c) {
//     maiorDeTres = b;
// } else {
//     maiorDeTres = c;
// }
// console.log(maiorDeTres);

// let retorno = '';
// let parametro = -1;
// if (parametro === 0) {
//     retorno = 'zero';
// } else if (parametro > 0) {
//     retorno = 'positivo';
// } else {
//     retorno = 'negativo';
// }
// console.log(retorno);


// const anguloA = 70;
// const anguloB = 60;
// const anguloC = 60;
// let triangulo;

// if (anguloA + anguloB + anguloC === 180) {
//     triangulo = true;
// } else {
//     triangulo = false + ' Não é triangulo';
// }
// console.log(triangulo);

peça = 'CAVALO'.toLowerCase
let movimentos = '?'
switch (peça) {
    case 'peão':
    movimentos = 'Somente para frente.';
    break;
    case 'bispo':
        movimentos = 'Linha reta diagonalmente.';
        break;
    case 'torre':
        movimentos = 'A torre se move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas.';
        break;
    case 'cavalo':
        movimentos = 'Movimento em L.'
        break;
    case 'rainha':
        movimentos = 'Qualquer numero de casas em linha reta em qualquer direção';
        break;        
    case 'rei':
        movimentos = 'Uma casa vazia em qualquer direção';
}
console.log(movimentos);

