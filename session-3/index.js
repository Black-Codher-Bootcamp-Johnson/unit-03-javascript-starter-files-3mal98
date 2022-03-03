// This is a comment in JavaScript
// You can see where this file is connected to your HTML in the index.html on line 14
// ****************************************************TASK 1****************************************************
const name = 'Bill';
const age = '19';

console.log( name + "," + " " + age);


let a = 5;
let b = 10;

console.log(a + b);

a = 20;

console.log(a + b);









// ****************************************************TASK 2****************************************************

function sayHey() {
    console.log("Hey!");
}

function conversation() {
    sayHey();
    console.log("How are you>?");
    console.log("Goodbye");
}

conversation();









// ****************************************************TASK 3****************************************************

function futureAge(name, currentAge) {
    const answer = currentAge + 5;
    return name + "you will be " + answer + " " + "years old " + "in 5 years!";
}

console.log(futureAge("Mike ", 20));










