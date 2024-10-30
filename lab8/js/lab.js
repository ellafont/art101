/**
 * lab.js - Takes a user's name as input and sorts the letters alphabetically
 * @author Ella
 * @date October 29, 2024
 * Comment block!
 */

// Code from console experiment:

var array = [1,2,3,4,5,6,7,8,9,10];
console.log("my array: " + array);

function multiplyByTwo(x){
    var results = x*2;
    return results;
}

var array2 = array.map(multiplyByTwo);
console.log("array multiplied by 2: " + array2);
// --> (10) [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

array.map(function(x){
    var results = x*3
    return results;
})
// --> (10) [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]

var mapResults = array.map(multiplyByTwo);
console.log("Results calling array map with multByTwo functon: ", mapResults)
// --> Results:  (10) [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

var mapResults = array.map(multiplyByTwo).map(multiplyByTwo);
console.log("Results calling array map with multByTwo functon, twice: ", mapResults)
