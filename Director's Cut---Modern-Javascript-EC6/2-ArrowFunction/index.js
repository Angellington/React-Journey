console.clear();

// Function Greetings

const greetings = (name) => `Greetings ${name}`;

console.log(greetings('Minerva'));

const double_number = (n) => n * 2;

console.log(double_number(5));

const last_letter = (str) => str.charAt(str.length - 1);

console.log(last_letter('Minerva'));

// Medium

const sumArrow = (a, b) => a + b;

console.log(sumArrow(5, 10));

const OddEven = (n) => n % 2 === 0 ? 'Even' : 'Odd';

console.log(OddEven(5));
console.log(OddEven(2));

const array = [2, 4, 6, 8, 4, 6, 7, 9, 11, 10];

const square = array.map(n => n * n);

console.log(square);

/// Advanced

const filterEven =(arr) => arr.filter(n => n % 2 === 0);
console.log(filterEven(array))

const sumArray = (arr) => arr.reduce((acc, curr) => acc + curr)

console.log(sumArray(array))

const names = ['Wellington', 'Matheus', 'Dudu', 'Kakau', 'Kayo', 'Maria']

const objArr = names.map((name, index) => ({id: index, name}))

console.log(objArr)