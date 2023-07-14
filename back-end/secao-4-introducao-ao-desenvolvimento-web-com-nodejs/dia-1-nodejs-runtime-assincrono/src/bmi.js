const readline = require('readline-sync');

const weight = readline.questionFloat("What's your weight? ");
const height = readline.questionFloat("What's your height? ");

const bmi = (weight, height) => {
    let category;
    
    const value = (weight / (height ** 2)).toFixed(1);

    switch (true) {
        case (value < 18.5):
        category = 'under weight';
        break;
     case (value >= 18.5 && value < 25):
        category = 'normal weight';
        break;
     case (value >= 25 && value < 30):
        category = 'over weight';
        break;
     case (value >= 30 && value < 35):
        category = 'class 1 obesity (low risk)';
        break;
     case (value >= 35 && value < 40):
        category = 'class 2 obesity (moderate-risk)';
        break;
     case (value > 40):
        category = 'class 3 obesity (high-risk)';
        break;
    }

    const message = `Your result is ${value}, ${category}.`;

    return console.log(message);;
};

bmi(weight, height);