//"use strict";

//let value = ;

//let value = "Caroline";

//let obj = {
//value,
//};
//Type error
//Ex: reference properties from undefined values
//has to do with objects a lot.

//console.log(obj.value);

//obj.value.array.forEach((letter) => console.log(letter));
//this doesnt work because you can't use ForEach on a string, only arrays.
//Data type is undefined - therefore is not a function.
//You can't call a function on something that is not a function

//Reference Errors
//When you reference a variable you haven't written.
//below, I'm accessing something before I've defined it.

//display("Hello World!");

//const display = (msg) => {
//console.log(msg);
//};

const display = (msg) => {
  console.log(msg);
};

display("Hello World!");

/**Strict Mode
 * Will eliminate global variables
 * "use strict" at the top of the JS, makes the For loop below not work, because it creates
i as a global variable.
*/

for (i = 0; i < 6; i++) {
  console.log(i);
}
/**
 * @param {number []} scores
 * Returns the sum of all numbers in an array.
 */

function add(scores) {
  return scores.reduce((sum, num) => sum + num, 0);
}
let arr = [1, 2, 3, 4, 5];

console.log(add(arr));

try {
  value = "Caroline";
} catch (error) {
  console.log(error);
}
console.log("After the value initialization");

let guess = prompt("Give me a number!");

class InvalidNumberError extends Error {
  name = "InvalidNumberError";

  constructor(msg, invalidValue) {
    super(msg);

    this.value = invalidValue;
  }
}

try {
  guess = parseInt(guess);
  if (isNaN(guess)) {
    throw new InvalidNumberError("Not a valid number!", guess);
  }

  if (guess > 5) {
    alert("Too high!");
  } else if (guess < 5) {
    alert("Too low!");
  } else {
    alert("Correct!");
  }
} catch (err) {
  if (err instanceof InvalidNumberError) {
    alert(err.message);
  } else {
    console.error(err);
    alert("Something went wrong. Try again.");
  }
} finally {
  //finally will run code in this block even if the  block before has an error.
  console.log("After the number guessing");
}
