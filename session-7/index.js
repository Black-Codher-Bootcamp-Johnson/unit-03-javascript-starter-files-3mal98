// ****************************************************TASK 1****************************************************
const animals = ['cat', 'dog', 'wolf', 'lion', 'eagle', 'zebra'];
animals.pop();

console.log(animals);














// ****************************************************TASK 2****************************************************
const firstNames = ['Kelly', 'Jones', 'Will', 'Adam', 'Catherine', 'Zoe', 'Victor', 'Betty', 'Phil', 'Derick'];
firstNames.sort().reverse();

console.log(firstNames);










// ****************************************************TASK 3****************************************************

// Notice the backticks enclosing t'challa. Read https://www.javascripttutorial.net/es6/javascript-template-literals/ for an explanation on template literals
const people = [
  { name: `t'challa`, age: 37 },
  { name: 'shuri', age: 16 },
  { name: 'killmonger', age: 32 },
];

// This is a helper function that should be used in the final task of the session.
// You should pass this function to the sort method to sort the ages of each individiual in the people array of objects
// Note: this helper function is using a tertiary operator instead of an if/else statement
function compare(a, b) {
  const personA = a.age;
  const personB = b.age;

  return personA > personB ? true : false;
}
