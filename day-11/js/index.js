'use strict';

// Base of the api
const URLBASE = "https://api.github.com/search/repositories?sort=stars&q=";

// Create a click event for your button
$('form').submit(function (event) {
    // Prevent the default behavior for your event
    event.preventDefault();

    // Get the value of your queryInput, and construct your API query
    let query = $('#queryInput').val();
    console.log(query);
    let url = URLBASE + query;
    console.log(url);

    // Fetch the data at that URL, THEN
    // Return the `.json()` of the response, THEN
    // Pass the results to renderSearchResults, make sure to CATCH
    // Any of your errors

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(renderSearchResults)
        .catch(function (error){
            console.error(error);
        });

    return false; // prevent unwanted page behavior
});

// Write a function to render an <li> inside of a parent
// You should display the title as a link, and
// The description of the repo
function renderItem(item, parent) {
    let ele = $('<li>');
    parent.append(ele);
    ele.append(`<strong><a href="${item.html_url}">${item.full_name}</a></strong>`);
    ele.append(`<span>: ${item.description}</span>`);
}

// Write a function to render search results. 
// It should iterate through items and call the renderItem method
function renderSearchResults(results) {
    //Empty out the #content div
    $('#content').empty();

    // Create a new ul as the parent + append it to the body
    let ul = $('<ul>');
    $('#content').append(ul);

    // Iterate through results and call the renderItem method
    results.items.map(function (d){
        renderItem(d, ul);
    });
}