// Exercise 1
"use strict";

//Exercise 2
// function parseToJSON(data) {
//   // TODO: Add a try/catch block to
//   // attempt to convert 'data' to JSON
//   return JSON.parse(data);

//   // TODO: if an exception is raised
//   // print the error to the console
//   // and return null
// }

// //Exercise 3
// // TODO: Fix the following parameter list
// function parseToJSON(data) {
//   try {
//     return JSON.parse(data);
//   } catch (error) {
//     console.error;
//   }

function parseToJSON(value) {
  try {
    // let Value = "data";
    return JSON.parse(value);
  } catch (error) {
    console.log(error);
    // console.log(failData);
    return null;
  }
}
//Exercise 4
// TODO: if an exception is raised
// print the error to the console
// and return null

let failData = "<h1>Hello World!</h1>";

let passData = JSON.stringify({ success: true });

console.log(parseToJSON(failData));

console.log(parseToJSON(passData));
