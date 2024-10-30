/**
 * lab.js - Takes a user's name as input and sorts the letters alphabetically
 * @author Ella
 * @date October 24, 2024
 */

//got help on this assignment from claude ai

// Function to sort the letters of a name
function sortUserName() {
  // Get user input using window.prompt()
  let userName = window.prompt("Please enter your name :)");
  
  // Check if user entered a name
  if (userName) {
      // Convert string to array, sort it, and join back to string
      let nameArray = userName.split("");
      let sortedArray = nameArray.sort();
      let sortedName = sortedArray.join("");
      
      return sortedName;
  } else {
      return "You didn't enter a name!";
  }
}

// Output the sorted name to the webpage
document.writeln("<div class='sorted-name'>", 
              "Your sorted name is: ",
              sortUserName(),
              "</div>");

