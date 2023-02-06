// Variables store data for later use


// Create a variable with let
let myVariable = "value";
let myNewVariable = 7;
let myBool = true;



// Accessing variable values
console.log(myVariable);
console.log(myNewVariable + 5);
console.log(myBool && true);

//Update value stored in variable
myNewVariable = 10;
console.log(myNewVariable);

// Increase by 1
myNewVariable = myNewVariable + 1;
console.log(myNewVariable);

// Decrease by 1
myNewVariable = myNewVariable - 1;
console.log(myNewVariable);

// Multiply by 3
myNewVariable = myNewVariable * 3;
console.log(myNewVariable);

// Divide by 3
myNewVariable = myNewVariable / 3;
console.log(myNewVariable);

// Divide and return the remainder
myNewVariable = myNewVariable % 2; // 10/2 = 5 with 0 remainder
console.log(myNewVariable);



// Shortcuts!

//add one
let x=4;
x++; //x = x+1
//subtract one
let y = 21;
y--; //y = y-1

let z = 10;
z+=5; //z= z+5

let a = 10;
a-=2; //a = a-2

let b = 10;
b*=2; //b = b*2

let c = 10;
c/=2; //c = c/2


// Keywords
const pi = 3.14;
const userName = "myUser123";
// constants cannot change values, cannot be changed

var old = 123;
// var is the old way to create variables.
// DON'T USE IT. use let instead.