const readLine = require('readline-sync');

// Problem #1
let numquest1Add = Number(readLine.question("Type in a number: "));
let numquest2Add = Number(readLine.question("Type in another number: "));
console.log(`The sum of your two numbers is : ${numquest1Add + numquest2Add}`);

//Problem #2
let numquest1moreSub = Number(readLine.question("Type in a number: "));
let numquest2moreSub = Number(readLine.question("Type in another number: "));
console.log(`The difference of those two numbers is ${numquest1moreSub - numquest2moreSub}`);

//Problem #3
let numquestIchiTimes = Number(readLine.question("Type in a number: "));
let numquestNiTimes = Number(readLine.question("Type in another number: "));
console.log(`The product of those two numbers is ${numquestIchiTimes * numquestNiTimes}`);

//Problem #4
let numquestUnoDivide = Number(readLine.question("Type in a number: "));
let numquestDosDivide = Number(readLine.question("Type in another number: "));
console.log(`The quotient of those two numbers is ${numquestUnoDivide / numquestDosDivide}`);

//Problem #5
let numquestOneRemainder = Number(readLine.question("Type in a number: "));
let numquestTwoRemainder = Number(readLine.question("Type in another number: "));
console.log(`The remainder of those two numbers is ${numquestOneRemainder % numquestTwoRemainder}`);

//Problem #6
let Firstnamerequest = readLine.question("What is your first name?: ");
let Lastnamerequest = readLine.question("What is your last name?: ");
console.log(`Greetings ${Lastnamerequest}, ${Firstnamerequest}`);

//Problem #7
let Titlerequest = readLine.question("What is your title? (Mr., Mrs., Ms., etc.): ");
let Lastnamerequest2 = readLine.question("What is your last name?: ");
let Suffixrequest = readLine.question("What is your suffix? (Jr., III, PhD., etc.)");
console.log(`Welcome ${Titlerequest} ${Lastnamerequest2}, ${Suffixrequest}`);

//Problem #8
let StreetNum = Number(readLine.question("What is your street number?: "));
let StreetName = readLine.question("What is your street's name?: ");
let StreetType = readLine.question("What is type of street are you on?: ");
let CityName = readLine.question("What is your city's name?: ");
let StateName = readLine.question("What state do you live in?: ");
let ZipCode = readLine.question("What is your zip code?: ");
console.log(`Your mailing label is ${StreetNum} ${StreetName} ${StreetType}, ${CityName}, ${StateName}, ${ZipCode}`);

//Problem #9
let numquestUnoIntegerQuotientandRemainder1 = Number(readLine.question("Type in a number: "));
let numquestDosIntegerQuotientandRemainder2 = Number(readLine.question("Type in another number: "));
console.log(`${numquestUnoIntegerQuotientandRemainder1} divided by ${numquestDosIntegerQuotientandRemainder2} equals ${numquestUnoIntegerQuotientandRemainder1 / numquestDosIntegerQuotientandRemainder2}. The remainder is ${numquestUnoIntegerQuotientandRemainder1 % numquestDosIntegerQuotientandRemainder2}`);

//Problem #10
let numRequest1 = Number(readLine.question("Type in a number: "));
let numRequest2 = Number(readLine.question("Type in another number: "));
if (numRequest1 > numRequest2){
    console.log(`${numRequest1} > ${numRequest2}`);
}else {
    console.log("That number is not bigger");
}

//Problem #11
let numRequestIchi = Number(readLine.question("Type in a number: "));
let numRequestNi = Number(readLine.question("Type in another number: "));
if (numRequestIchi < numRequestNi){
    console.log(`${numRequestIchi} < ${numRequestNi}`);
} else {
    console.log("That number is not smaller");
}

//Problem #12
let numnumOne = Number(readLine.question("Pick a number: "));
let numnumTwo = Number(readLine.question("Pickanother number: "));
let numquo = (numnumOne / numnumTwo);
let decimal = Number(readLine.question("How many decimal places do you wish to round to?: "));
if (decimal == 1) {
    console.log(`The quotient is ${(numquo).toFixed(1)}`);
}else if (decimal == 2) {
    console.log(`The quotient is ${(numquo).toFixed(2)}`);
}else if (decimal == 3) {
    console.log(`The quotient is ${(numquo).toFixed(2)}`);
}else if (decimal == 4) {
    console.log(`The quotient is ${(numquo).toFixed(2)}`);
}else if (decimal == 5) {
    console.log(`The quotient is ${(numquo).toFixed(2)}`);
}else if (decimal == 6) {
    console.log(`The quotient is ${(numquo).toFixed(2)}`);
}