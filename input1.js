const readLine = require('readline-sync');

//Activity Number 1
let answer = readLine.question('Would you like to hear a joke? \nYes/No: ');
if (answer == "Yes"){
    console.log("Your Mom");
}else if (answer == "No"){
    console.log("Well that was certainly very disappointing... \nyou should feel ashamed.\nOf yourself that is.");
}else if (answer == "yes"){
    console.log('Your Mom');
}else if (answer == "no"){
    console.log("Well that was certainly very disappointing... \nyou should feel ashamed.\nOf yourself that is.");
}else {
    console.log("Invalid Response. Please type 'Yes' or 'No'.");
}

//Activity Number 2 and 3
let number = readLine.question('Type in a number: ');
if (number % 2 == 0){
    console.log("This number is divisible by 2");
}else {
    console.log("This number is not divisible by 2");
}
if (number % 3 == 0){
    console.log("This number is divisible by 3");
}else {
    console.log("This number is not divisible by 3");
}
if (number % 4 == 0){
    console.log("This number is divisible by 4");
}else {
    console.log("This number is not divisible by 4");
}
if (number % 5 == 0){
    console.log("This number is divisible by 5");
}else {
    console.log("This number is not divisible by 5");
}
if (number % 6 == 0){
    console.log("This number is divisible by 6");
}else {
    console.log("This number is not divisible by 6");
}

//Activity Number 4
let secretnumber = readLine.question('Guess my secret number: ');
if (secretnumber == 21){
    console.log("You're right! The secret number is 21.");
}else if (secretnumber > 21){
    console.log("Incorrect. The number is smaller.");
}else if (secretnumber < 21){
    console.log("Incorrect. The number is larger.");
}

//Activity Number 5
let mealcost = readLine.question('What us the price of the meal?: ');
let tax = (mealcost / 0.08).toFixed(2);
let mealtax = mealcost + tax;
console.log(`Price of the meal with tax: $${mealtax}`);

