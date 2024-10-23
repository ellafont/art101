// index.js - purpose and description here
// Author: Ella
// Date: Oct. 22nd, 2024
/*
* comment block, woohoo
*/

// Variables
myTransport = ["bus", "car", "foot"]; 

var myMainRide = { // Defining Variables
  make: "Volvo",
  model: "xc70",
  color: "Silver",
  year: 2011,
  
  //calculate age
  age: function() { 
    2024 - this.year; 
  }  
} 

//output
document.writeln("My Transports: " + myTransport + "<br>");
//object to doc:
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "<pre>");





// Functions

// // this is an example function and this comment tells what it doees and what parameters are passed to it.
// function myFunction(param1, param2) {
//   // some code here
//   // return results;// }

// function main() {
//   console.log("Main function started.");
//   // the code that makes everything happen
// }

// // let's get this party started
// main();
