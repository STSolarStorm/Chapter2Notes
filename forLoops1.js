const readLine = require('readline-sync');


// // Problem Number 1
// for (let i = 0; i <= 150; i++){
//     console.log(i)
// }


// // Problem Number 2
// for(let i = 0; i <= 40; i++){
//     console.log(i*i);
// }


// // Problem Number 3
// for(let i = 0; i <= 30; i++){
//     console.log(i*i*i);
// }


// // Problem Number 4
// for(let i = 0; i <= 700; i++){
//     if(i % 5 == 0){
//         console.log(i);
//     }
// }


// // Problem Number 5
// for(let i = 350; i <= 1000; i++){
//     if(i % 10 == 0){
//         console.log(i);
//     }
// }


// // Problem Number 6
// let sum = 0;
// for(let i = 0; i <= 50; i++){
//         sum += i;
// }
// console.log(sum);


// // Problem Number 7
// let sum = 35;
// for(let i = 35; i <= 70; i++){
//     sum += i;
// }
// console.log(sum);


// // Problem Number 8
// let product = 1;
// for(let i = 1; i <= 15; i++){
//     product *= i;
// }
// console.log(product);


// // Problem Number 9
// let product = 10;
// for(let i = 10; i <= 35; i++){
//     product *= i;
// }
// console.log(product);


// // Problem Number 10
// for(let i = 0; i < 12; i++){
//     console.log("Happy Holidays!");
// }


// // Problem Number 11
// let NumberInput = readLine.question('Choose a number to determine the amount of times "Happy Holidays!" will be printed. It must be a positive integer: ');
// while (NumberInput < 0){
//     console.log("That is not a positive integer. Do it again!!!");
//     NumberInput = readLine.question('Choose a number to determine the amount of times "Happy Holidays!" will be printed. It must be a positive integer: ');
// }
// for(let i = 0; i < NumberInput; i++){
//     if(i < NumberInput){
//         console.log("Happy Holidays!");
//     }
// }



// // Problem Number 12
// let sum = 0;
// for(let i = 100; i <= 200; i++){
//     if(i % 2 == 1){
//         sum += i;
//     }
// }
// console.log(sum);


// Problem Number 13
let product = 1;
for(let i = 25; i <= 50; i++){
    if(i % 2 == 1){
        product *= i;
    }
}
console.log(product);
