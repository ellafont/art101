/*
 * lab.js - implementation for Lab 12
 * 
 * @author Ella
 * @date Nov 12th 2024
 */

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
    // We have to convert our string to an array and back again to sort it
    return inputString.split('').sort().join('');
}

function sortingHat(str) {
    var length = str.length; 
    console.log(length);

    var mod = length % 4;
    if (mod == 0) {
        return "Gryffindor";
    }
    if (mod == 1){
        return "Ravenclaw";
    }
    if (mod == 2){
        return "Slytherin";
    }
    if (mod == 3){
        return "Hufflepuff";
    }

}

// click listener for button
$("#submit").click(function(){
    // get value of input field
    const userName = $("#user-name").val();
    // run conditional function on name
    var house = sortingHat(userName);
    
    // append a new div to our output div
    $("#output").html('<div class="text"><p>' + "The Sorting Hat has sorted you into " + house + '</p></div>');

});



