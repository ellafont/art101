// // js/lab.js
// /**
//  * Author:    Ella Fontenot
//  * Created:   11.25.2024
//  * 
//  */

// lab16.js
/**
 * Author:    Ella
 * Created:   12/2/24
 * 
 * JavaScript file for Lab 16: JSON and APIs 
 */
// lab16.js
/**
 * Author:    [Your name]
 * Created:   [Date]
 * 
 * JavaScript file for Lab 16: JSON and APIs (XKCD comic)
 */

 /**
 * lab16.js - XKCD Comic Viewer
 * Author: [Your name]
 * Created: [Date]
 * 
 * This program fetches and displays XKCD comics using their JSON API.
 * It retrieves the comic data and displays it with appropriate HTML tags.
 */

// Store the current comic object globally for navigation
let comicObj;

// Function to fetch and display comic data
function getAndPutData(number) {
    // Construct the URL - if no number, get the latest comic
    let targetURL = number ? 
        `https://xkcd.com/${number}/info.0.json` : 
        'https://xkcd.com/info.0.json';

    // Using the core $.ajax() method
    $.ajax({
        // The URL for the request (from the api docs)
        url: targetURL,
        // Whether this is a POST or GET request
        type: "GET",
        // The type of data we expect back
        dataType: "json",
        // What do we do when the api call is successful
        success: function(data) {
            // Store the comic object for navigation
            comicObj = data;
            
            // Log data for debugging
            console.log("Current comic:", comicObj);
            
            // Create HTML for the comic
            let str = `<h3>${comicObj.title}</h3>`;
            str += `<img src="${comicObj.img}" alt="${comicObj.alt}" title="${comicObj.alt}">`;
            
            // Add it to the webpage
            $("#output").html(str);
        },
        // What we do if the api call fails
        error: function (jqXHR, textStatus, errorThrown) { 
            // Log error for debugging
            console.log("Error:", textStatus, errorThrown);
            // Display error message to user
            $("#output").html("Error loading comic");
        }
    });
}

// When the document is ready
$(document).ready(function() {
    // Load the latest comic initially
    getAndPutData();
    
    // Add click handlers for navigation buttons
    $("#prev").click(function(){
        if (comicObj && comicObj.num > 1) {
            getAndPutData(comicObj.num - 1);
        }
    });
    
    $("#next").click(function(){
        if (comicObj) {
            getAndPutData(comicObj.num + 1);
        }
    });
});
