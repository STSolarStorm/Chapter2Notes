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


//Activity Number 5, 6, 7 and 8
let mealcost = Number(readLine.question('What us the price of the meal?: $'));
let tax = (mealcost * 0.08);
let mealaftertax = (mealcost + tax);
if (mealcost <= 0){
    console.log("That number is not acceptable.");
}else {
    console.log(`Price of the meal with tax: $${mealaftertax.toFixed(2)}`);
}

let Great = (mealaftertax * 0.20);
let Good = (mealaftertax * 0.15);
let Average = (mealaftertax * 0.10);
let rating = readLine.question('How was the service?: Great/Good/Average \nAnswer here: ');
if (rating == "Great"){
    console.log(`You should tip the restaurant $${Great.toFixed(2)}`);
} else if (rating == "great"){
    console.log(`You should tip the restaurant $${Great.toFixed(2)}`);
}
if (rating == "Good"){
    console.log(`You should tip the restaurant $${Good.toFixed(2)}`);
} else if (rating == "good"){
    console.log(`You should tip the restaurant $${Good.toFixed(2)}`);
}
if (rating == "Average"){
    console.log(`You should tip the restaurant $${Average.toFixed(2)}`);
} else if (rating == "average"){
    console.log(`You should tip the restaurant $${Average.toFixed(2)}`);
}

let FinalMealCostGreat = (mealaftertax + Great);
let FinalMealCostGood = (mealaftertax + Good);
let FinalMealCostAverage = (mealaftertax + Average);
if (rating == "Great"){
    console.log(`The final cost of the meal with tax and tip included is $${FinalMealCostGreat.toFixed(2)}`);
} else if (rating == "great"){
    console.log(`The final cost of the meal with tax and tip included is $${FinalMealCostGreat.toFixed(2)}`);
}
if (rating == "Good"){
    console.log(`The final cost of the meal with tax and tip included is $${FinalMealCostGood.toFixed(2)}`);
} else if (rating == "good"){
    console.log(`The final cost of the meal with tax and tip included is $${FinalMealCostGood.toFixed(2)}`);
}
if (rating == "Average"){
    console.log(`The final cost of the meal with tax and tip included is $${FinalMealCostAverage.toFixed(2)}`);
} else if (rating == "average"){
    console.log(`The final cost of the meal with tax and tip included is $${FinalMealCostAverage.toFixed(2)}`);
}
