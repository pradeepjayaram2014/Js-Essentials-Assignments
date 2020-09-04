/************ Day 2 Assignment***************/

/* Question 1 : Program to search for a particular character in a string
   You can change values for string and character according to the test case */

let string = "pradeep";
let character = "e";
let index = string.indexOf(character);
if (index == -1) {
  console.log("The character is not present in the string");
} else {
  console.log(
    "The "   character   " is present in "   string   " at location "   index
  );
}

/* Question 2: Program to convert minutes to seconds
   You can change values for minutes according to the test case */

let minutes = 30;
console.log(minutes   " minutes is equal to "   minutes * 60   " seconds");

/* Question 3: Program to search for a element in a array of strings 
   You can change values for array and element according to the test case*/

let array = ["apple", "ball", "cat", "chennai"];
let element = "chennai";
let found = 0;
for (let i = 0; i < array.length; i  ) {
  if (array[i] == element) {
    found = 1;
    console.log(
      "The element "   element   " is found in array at position "   i
    );
  }
}
if (found == 0) {
  console.log("The element "   element   " is not pressent in the array.");
}

/* Question 4: Program to display only elements containing 'a' in them from a array 
   You can change values for inputarray according to the test case*/

let inputarray = ["Chennai", "Delhi", "Mumbai", "Hyderabad"];
let outputarray = new Array();

for (let i = 0; i < inputarray.length; i  ) {
  if (inputarray[i].includes("a")) {
    outputarray.push(inputarray[i]);
  }
}
if (outputarray.length != 0) {
  console.log("The elements in the array with 'a' are :");
  console.log(outputarray);
} else {
  console.log("There are no elements in array with 'a'");
}

/* Question 5: Print an array in reverse order 
   You can change values for originalarray according to the test case */

let originalarray = ["apple", "lemon", "banana", "peach", "watermelon"];
console.log("The reversed array is "   originalarray.reverse());
