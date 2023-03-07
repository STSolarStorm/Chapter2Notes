const readLine = require('readline-sync');

//Partner was Efren Torres Sanchez

// let number = 1;
// while (number <= 100){
//     if(number % 15 == 0) {
//         console.log("Fizzbuzz");
//     } else if (number % 5 == 0){
//         console.log("Buzz");
//     } else if (number % 3 == 0){
//         console.log("Fizz");
//     } else {
//         console.log(number);
//     }
//     number++;
// }

// //Problem 1
// let numberInput = Number(readLine.question("Enter a positive integer: "));
// let number = 1;
// while (number <= numberInput){
//     if(number % 15 == 0) {
//         console.log("Fizzbuzz");
//     } else if (number % 5 == 0){
//         console.log("Buzz");
//     } else if (number % 3 == 0){
//         console.log("Fizz");
//     } else {
//         console.log(number);
//     }
//     number++;
// }

//Problem 2
let numberInput1 = Number(readLine.question("Enter a positive integer: "));
let numberInput2 = Number(readLine.question("Enter a another positive integer: "));
while (numberInput1 <= numberInput2){
    if(numberInput1 % 15 == 0) {
        console.log("Fizzbuzz");
    } else if (numberInput1 % 5 == 0){
        console.log("Buzz");
    } else if (numberInput1 % 3 == 0){
        console.log("Fizz");
    } else {
        console.log(numberInput1);
    }
    numberInput1++;
}