const numbers = [1, 2, 3, 4, 5]
const evens = numbers.filter(item => item % 2 === 0)
console.log(evens); // [2, 4]


const students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
];

const studentGrades = students.filter(student => student.grade >= 90);
console.log(studentGrades); // [ { name: 'Quincy', grade: 96 }, { name: 'Alexis', grade: 100 }, { name: 'Katie', grade: 90 } ]