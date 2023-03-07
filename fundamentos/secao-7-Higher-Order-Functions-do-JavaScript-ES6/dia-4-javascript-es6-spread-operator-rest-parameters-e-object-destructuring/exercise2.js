const sum = (...num) => num.reduce((prev, curl) => prev + curl, 0);
console.log(sum(4, 5, 6));