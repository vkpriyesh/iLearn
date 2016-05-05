//USING STRINGS
// Setup
var myStr = "Jello World";

// Only change code below this line

myStr = "Hello World"; // Fixed

//***********************************//

// Example
var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;

// Setup
var lastNameLength = 0;
var lastName = "Lovelace";

// Only change code below this line.

lastNameLength = lastName.length;
// Example
var firstLetterOfFirstName = "";
var firstName = "Ada";

///////////////////////////////////////////////
//Array Usage:

// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]); 
// ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.
myArray.push(["dog", 3]);



//here starts ARRAYing:
// Example
var array = ["John", 23];

// Only change code below this line.
var myArray = ["Wow", 21];



firstLetterOfFirstName = firstName[0];

// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0];

//MANIPULATING ARRAYS USING SHIFT:

// Example
var ourArray = ["Stimpson", "J", ["cat"]];
removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line.
var removedFromMyArray;
removedFromMyArray = myArray.shift();

//MANIPULATION OVER
//FUNCTION BEGINS:

// Example
function reusableFunction() {
  console.log("Heyya, World");
}

reusableFunction();

// Only change code below this line
function reusableFunction(){
  console.log("Hi World");
}

reusableFunction();
//FUNCTION ENDDS
//SCOPING

// Declare your variable here


function fun1() {
  // Assign 5 to oopsGlobal Here
  
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

//loc/Global

function myLocalScope() {
  'use strict';
  var myVar = "asdf";
  
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope


// Now remove the console log line to pass the test

//OVERRIDING OF VARIABLE SCOPES

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater";
  
  
  // Only change code above this line
  return outerWear;
}

myOutfit();
//OVER OVERRIDING
