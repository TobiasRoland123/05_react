"use strict";

// 1. Re-write the following if statements to use the ternary operator

// const age = 28;
// const email = "jofh@kea.dk";

// let isEven;
// if (age % 2 === 0) {
//   isEven = true;
// } else {
//   isEven = false;
// }

// let role = "visitor";
// if (email === "jofh@kea.dk") {
//   if (age > 40) {
//     role = "admin";
//   }
// }
// //can be done in 1 line, if you merge the two if's

// const isItEven = age % 2 === 0;

// const theRole = email === "jofh@kea.dk" && age > 40 ? "Admin" : false;

// DONE

// 2. Re-write the following to arrow functions
// function setTitle(title) {
//   document.title = title;
// }

// function isEven(number) {
//   if (number % 2 === 0) {
//     return true;
//   }
//   return false;
// }

// function getRandBetween1and10() {
//   return Math.floor(Math.random() * 10) + 1;
// }

// // rewritten:
// const setTheTitle = (title) => (document.title = title);

// const isItEven = (number) => number % 2 === 0;

// const getRanNumbetw1and100 = () => Math.floor(Math.random() * 10) + 1;

// DONE

// 3.  Re-write the following to arrow functions

// const movies = [
//   {
//     name: "Hard Boiled",
//     genre: "Hong Kong Action",
//   },
//   {
//     name: "LOTR",
//     genre: "Fantasy",
//   },
// ];
// function showMovie(movie) {
//   console.log(`The movie ${movie.name} is a typical ${movie.genre} movie`);
// }

// //   rewritten:
// movies.forEach((movie) => console.log(`The movie ${movie.name} is a typical ${movie.genre} movie`));

// DONE

// 4. Re-write the following to use map
// Can you do implicit returns?

// const searchengines = [
//   { target: "https://google.com", name: "Google" },
//   { target: "https://bing.com", name: "Bing" },
// ];
// let links = "";
// searchengines.forEach((link) => {
//   links.push(`<a href="${link.target}">${link.name}</a>`);
// });

// const theLinks = searchengines.map((link) => `<a href="${link.target}">${link.name}</a>`);

// DONE

// 5. Follow the instructions

// const names = ["Jonas", "Dannie", "Peter", "Klaus"];
/* start by making a "bad" copy of this array 
	by writing something like const myBadCopy = names;
	then modify either array by changing one name
	then console log both, what happened
	*/

// const badCopy = names;
/*the reason this is a "bad" copy, is because it is not a copy, 
it's just linked to the original, so when the original is changed, then the copy 
changes too */

/* Then create a copy using the ... spread operator
	modify either array and console log them, what happens now?
	*/

// const goodCopy = [...names];
/* Here the goodCopy variable is actualy a copy of 
how names looks when the document is loaded, and doesn't change when you change 
the values in the names variable */

// DONE

// 6. Follow the instructions

// const me = {
//   name: "Jonas",
//   age: 43,
//   kids: 3,
// };

/* start by making a bad copy (reference) with something like
  const myCopy = me;
  change something, see what happens */

// const badCopy = me;

/* Then make a new copy using the spead operator, 
  change something and see what happens
  */

// const goodCopy = { ...me };

// 8. Follow the instructions

/* this function receives an object with stuff it does not need
	make it easier for the next developer by destructuring out the 
	parts we need 
	Then clean up the function by removing "person.x". */

// function personCard(person) {
//   return `<div class="person">
//               <h2>${person.name}</h2>
//               <ul>
//                   <li><a href="tel:+${person.phone}">Call</a></li>
//                   <li><a href="mailto:${person.email}">E-mail</a></li>
//               </ul>
//           </div>`;
// }
// const myPerson = {
//   name: "Clark Kent",
//   marriage: null,
//   glasses: true,
//   phone: 911,
//   street: "secret",
//   email: "clark@dailyplanet.com",
// };

// const { name, phone, email } = myPerson;

// personCard(myPerson);

// NOT DONE

// 9. Follow the instructions

/* this function return 4 random numbers in an array. Use destructuring 
	to pick out the two first items */

function getNums() {
  return [Math.random(), Math.random(), Math.random(), Math.random()];
}

const { first, second, ...theRest } = getNums;

console.log(getNums);
console.log(first);
console.log(second);
console.log(theRest);
