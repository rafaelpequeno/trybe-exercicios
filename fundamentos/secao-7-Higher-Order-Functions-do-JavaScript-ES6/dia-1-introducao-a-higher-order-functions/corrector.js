const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (rightAnswer , studantAnswer) => {
    if (rightAnswer === studantAnswer) {
        return 1;
    }
    if (STUDENT_ANSWERS === 'N.A') {
        return 0;
    }
    return -0.5;
};

const countPoints = (rightAnswer, studantAnswer, action) => {
    let contador = 0;
    for (let index = 0; index < rightAnswer.length; index += 1) {
        const actionReturn = action(rightAnswer[index], studantAnswer[index]);
        contador += actionReturn;
    }
    return `Resultado final: ${contador} pontos`;
};

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));