//Conditionals are if-statements

let x=5;
if (x==5){
    console.log("It's 5!");
}
console.log("end of program");

let y = 10;
if (y == 5){
    console.log("It's 5!");
}
console.log("end of program");

let z = 20;
if (z == 5){
    console.log("option1");
}else{
    console.log("option2");
}
console.log("end of program");

let w = 20;
if (w == 20){
    console.log("option1");
}else{
    console.log("option2");
}
console.log("end of program");

let num1 = 100;
if (num1 == 10){
    console.log("it's 10!");
}else if (num1 == 6){
    console.log("it's 6");
}else{
    console.log("it's something else");
}
console.log("end of program");

let num2 = 6;
if (num2 == 10){
    console.log("it's 10!");
}else if (num2 == 6){
    console.log("it's 6");
}else{
    console.log("it's something else");
}
console.log("end of program");

let secret = 7;
if (secret % 7 ==0){
    console.log("divisible by 7");
}else if(secret % 3 ==0){
    console.log("divisible by 3");
}
console.log("end of program");

let rand = 3.4567;
if (rand > 1){
    console.log("greater than 1");
}
if (rand > 2){
    console.log("greater than 2");
}
console.log("end of program");


let number = 100;
if (number % 2 ==0){
    console.log(`${number} is even.`);
}
if (number % 5 ==0){
    console.log(`${number} is divisible by 5.`);
}
if (number % 10 ==0){
    console.log(`${number} is divisible by 10.`);
}