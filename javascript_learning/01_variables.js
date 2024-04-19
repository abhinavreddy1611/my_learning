const account_id=144553;
let accountEmail="hitesh@gmail.com"
var accountPassword="12345";
let accountState;
accountCity="Jaipur";
//  account_id=2; not allowed

// you can use var and let to declare variables 
// but usually you use let only
// {} <- scope
// var has scope problems if there is a var inside a for loop if would even change outside the for loop there is no scope
/*
no var because of issue in block scope and var scope

*/
// if you declare  a varible and do not initialize it will be undefined
/*Example of Scope
javascript
Copy code
function testVar() {
    for (var i = 0; i < 5; i++) {
        console.log("Inside loop: " + i);
    }
    console.log("Outside loop: " + i); // Works and outputs: Outside loop: 5
}

function testLet() {
    for (let j = 0; j < 5; j++) {
        console.log("Inside loop: " + j);
    }
    console.log("Outside loop: " + j); // Error: j is not defined
}

testVar();
testLet();
2. Hoisting
var: Variables declared with var are hoisted to the top of their scope and initialized with undefined. This means they can be accessed before their actual declaration in the code.

let: Variables declared with let are also hoisted, but unlike var, the initialization is not hoisted. Accessing the variable before the declaration results in a ReferenceError. The time between the start of the block and the initialization is sometimes referred to as the "temporal dead zone."

Example of Hoisting
javascript
Copy code
function hoistExample() {
    console.log(x); // Outputs: undefined
    var x = 10;
    
    console.log(y); // ReferenceError: Cannot access 'y' before initialization
    let y = 10;
}

hoistExample();
3. Re-declaration
var: You can re-declare the same variable within the same scope using var without causing an error.

let: If you try to re-declare a variable within the same scope using let, it will result in a SyntaxError.

Example of Re-declaration
javascript
Copy code
var a = 3;
var a = 10; // No problem

let b = 3;
let b = 10; // SyntaxError: Identifier 'b' has already been declar*/

console.log(ass)
for(let i=0;i<4;i++){
    var ass="lol"
    let b="ass"
}

// var is hoisted to top of the enclosing function or to the top of global encolser


