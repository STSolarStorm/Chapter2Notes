const readLine = require('readline-sync');

// // Problem Number 11 and Number 12
// let Prob11and12 = readLine.question("Do you wish to quit? Y/N: ");
// while (Prob11and12 != "Y" && Prob11and12 != "N" && Prob11and12 != "y" && Prob11and12 != "n"){
//     console.log("Invalid Input");
//     Prob11and12 = readLine.question("Do you wish to quit? Y/y/N/n: ");
// }

// // Problem Number 13
// let Prob13 = readLine.question("Pick either option A, option B, or option C: ");
// while (Prob13 != "A" && Prob13 != "B" && Prob13 != "C"){
//     console.log("Invalid Input");
//     Prob13 = readLine.question("Pick either option A, option B, or option C: ");
// }


// // Problem Number 14
// let Prob14 = readLine.question("Pick either option 1, option 2, or option 3: ");
// while (Prob14 != "1" && Prob14 != "2" && Prob14 != "3"){
//     console.log("Invalid Input");
//     Prob14 = readLine.question("Pick either option 1, option 2, or option 3: ");
// }


// // Problem Number 15
// let Prob15 = readLine.question("Pick a number from 0 to 10: ");
// while (Prob15 > 10){
//     console.log("Invalid Input");
//     Prob15 = readLine.question("Pick a number from 0 to 10: ");
// }
// while (Prob15 < 0){
//     console.log("Invalid Input");
//     Prob15 = readLine.question("Pick a number from 0 to 10: ");
// }



// // Problem Number 16
// let Prob16 = readLine.question("Enter a positive number: ");
// while (Prob16 < 0){
//     console.log("Invalid Input");
//     Prob16 = readLine.question("Enter a positive number: ");
// }


// // Problem Number 17
// let Prob17 = readLine.question("Enter a negative number: ");
// while (Prob17 > -1){
//     console.log("Invalid Input");
//     Prob17 = readLine.question("Enter a negative number: ");
// }


// // Problem Number 18
// let Prob18 = readLine.question("Enter an even number: ");
// while (Prob18 % 2 != 0){
//     console.log("Invalid Input");
//     Prob18 = readLine.question("Enter an even number: ");
// }


// // Problem Number 19
// let Prob19 = readLine.question("Enter a number that is between 0-10 or between 20-30: ");
// while (Prob19 < 0){
//     console.log("Invalid Input. That number is not between the two ranges given.");
//     Prob19 = readLine.question("Enter a number that is between 0-10 or between 20-30: ");
// }
// while (Prob19 > 10 && Prob19 < 20 || Prob19 > 30){
//     console.log("Invalid Input. That number is not between the two ranges given.");
//     Prob19 = readLine.question("Enter a number that is between 0-10 or between 20-30: ");
// }


// // Problem Number 20
// let Prob20 = readLine.question("Choose a month: ");
// let January = 31;
// let February = 28;
// let March = 31;
// let April = 30;
// let May = 31;
// let June = 30;
// let July = 31;
// let August = 31;
// let September = 30;
// let October = 31;
// let November = 30;
// let December = 31;
// while (Prob20 != "January" && Prob20 != "February" && Prob20 != "March" && Prob20 != "April" && Prob20 != "May" && Prob20 != "June" && Prob20 != "July" && Prob20 != "August" && Prob20 != "September" && Prob20 != "October" && Prob20 != "November" && Prob20 != "December"){
//     console.log ("That is not one of the months. Do it again.");
//     Prob20 = readLine.question("Choose a month: ");
// }
// if (Prob20 == "January"){
//     console.log(` January has ${January} days in it.`);
// }else if(Prob20 == "February"){
//     console.log(`February has ${February} days in it.`);
// }else if(Prob20 == "March"){
//     console.log(`March has ${March} days in it.`);
// }else if(Prob20 == "April"){
//     console.log(`April has ${April} days in it.`);
// }else if(Prob20 == "May"){
//     console.log(`May has ${May} days in it.`);
// }else if(Prob20 == "June"){
//     console.log(`June has ${June} days in it.`);
// }else if(Prob20 == "July"){
//     console.log(`July has ${July} days in it.`);
// }else if(Prob20 == "August"){
//     console.log(`August has ${August} days in it.`);
// }else if(Prob20 == "September"){
//     console.log(`September has ${September} days in it.`);
// }else if(Prob20 == "October"){
//     console.log(`October has ${October} days in it.`);
// }else if(Prob20 == "November"){
//     console.log(`November has ${November} days in it.`);
// }else if(Prob20 == "December"){
//     console.log(`December has ${December} days in it.`);
// }



// Problem 21 UNFINISHED
let Prob21Number1 = Number(readLine.question("Choose a number between 1 and 3: "));
let Prob21Number2 = Number(readLine.question("Choose a number between 10 and 20: "));
while (Prob21Number1 > 3){
    console.log("That number is not within the given range");
    Prob21Number1 = Number(readLine.question("Choose a number between 1 and 3: "));
}
while (Prob21Number1 < 1){
    console.log("That number is not within the given range");
    Prob21Number1 = Number(readLine.question("Choose a number between 1 and 3: "));
}
while (Prob21Number2 < 10){
    console.log("That number is not within the given range");
    Prob21Number2 = Number(readLine.question("Choose a number between 10 and 20: "));
}
while (Prob21Number2 > 20){
    console.log("That number is not within the given range");
    Prob21Number2 = Number(readLine.question("Choose a number between 10 and 20: "));
}
let Prob21Sums = Prob21Number1 + Prob21Number2;
console.log(`The value between the two chosen numbers is ${Prob21Sums}.`);


