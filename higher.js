//q1
// let arr = [1, 2, 3];

// function powerOfTwoUsingForEach(arr) {
//   const result = [];
//   arr.forEach((num) => result.push(2 ** num));
//   return result;
// }
// console.log(powerOfTwoUsingForEach(arr));

// //q1
// let arr = [1, 2, 3];
// function powerOfTwoUsingMap(arr) {
//   return arr.map((num) => 2 ** num);
// }
// console.log(arr);
// console.log(powerOfTwoUsingMap(arr));

//q2
// let arr = [1, 2, 3, "rawan"];
// function evenOrOdd(arr) {
//   return arr.map((item) => {
//     if (typeof item !== "number") {
//       return "N/A";
//     }
//     return item % 2 === 0 ? "even" : "odd";
//   });
// }
// console.log(evenOrOdd(arr));

// //q3
// const names = ["Rawan", "Wesam", "Hind", "Muhammad", "Esraa", "Dareen"];
// function getAllNames(names) {
//   const result = [];
//   names.forEach((name) => result.push(name));
//   return result;
// }
// console.log(getAllNames(names));

//q4
// function fizzbuzz(arr) {
//   return arr.map((num) => {
//     if (num % 3 === 0 && num % 5 === 0) {
//       return "Fizz Buzz";
//     } else if (num % 3 === 0) {
//       return "Fizz";
//     } else if (num % 5 === 0) {
//       return "Buzz";
//     }
//     return num;
//   });
// }

// const numbers = [1, 3, 5, 15, 7];
// console.log(fizzbuzz(numbers));
