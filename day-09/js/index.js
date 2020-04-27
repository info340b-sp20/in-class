// Drawing circles in an svg with JavaSciprt 
'use strict';

// Constants / global variables
const HEIGHT = 255;
const WIDTH = 255;
const FILL = '#d3d3d3';
const NS = 'http://www.w3.org/2000/svg';

// State of our application
let state = {
    circles: [],
    size: 10
};

// Create a `p` element DOM
let p = document.createElement('p');

// Set the inner HTML of the paragraph to be some bold text
p.innerHTML = '<strong>Hello Circle World!</strong>';

// Select the element with class `container`, and append the paragraph to it
document.querySelector('.container').appendChild(p);

// Select `svg` element from the DOM
let svg = document.querySelector('svg');

// Set the width and height attributes using `setAttribute`
svg.setAttribute('height', HEIGHT);
svg.setAttribute('width', WIDTH);

// Add a `rect` with the same width and height, and set the fill to `fill`
// Note, you'll have to use `createElementNS` with our namespace
// Also, set the pointerEvents to 'none'. Then, append this `rect` to the svg
let rect = document.createElementNS(NS, 'rect');
rect.setAttribute('x', 0);
rect.setAttribute('y', 0);
rect.setAttribute('width', WIDTH);
rect.setAttribute('height', HEIGHT);
rect.setAttribute('fill', FILL);
rect.style.pointerEvents = 'none';
svg.appendChild(rect);

// Create a button with class "btn center-align" and append it to the element with class container.
// You want to have it *inserted before* the div with class `svg-wrapper`
let button = document.createElement('button');
button.className = "btn center-align";
button.textContent = "Clear!";
let svgWrapper = document.querySelector('.svg-wrapper');
document.querySelector('.container').insertBefore(button, svgWrapper);

// Function to render a circle in a parent element
function renderCircle(coord, parent) {
    // Create the circle
    let circle = document.createElementNS(NS, 'circle');
    circle.setAttribute('cx', coord.x);
    circle.setAttribute('cy', coord.y);
    circle.setAttribute('r', state.size); //do something cool here later

    // Define styles
    circle.style.opacity = 0.3;
    circle.style.pointerEvents = 'none';
    circle.style.fill = `rgb(0, ${coord.x}, ${coord.y})`;

    // Append
    parent.appendChild(circle);
}

// Function to draw all circles in a parent
function drawCircles(data, parent) {
    data.forEach(function (d) {
        renderCircle(d, parent);
    });
}

// Function to clear circles from a parent
function clearCircles(parent) {
    let elems = parent.querySelectorAll('circle');
    elems.forEach(function (d) {
        parent.removeChild(d);
    });
}

// Assign event listener - on click:
// - push a new data element into the state
// - call the `update` function
svg.addEventListener('click', function(event) {
    state.circles.push({ x: event.offsetX, y: event.offsetY });
    state.size++;
    update();
});

// Update function: call `clearCircles`, `drawCircles`, and `updateText`
function update() {
    // Clear container
    let container = svg;
    // Update container contents
    clearCircles(container);
    drawCircles(state.circles, container);
    updateText(state.circles);
}

// Text function: change paragraph text to display the number of circles, and avg. color.
// Avg. color (in rgb) is the avg. x position (green) and avg. y position (blue)
// Set the text to be that color
function updateText(data) {
    let text = document.querySelector('p');
    
    // Compute average in x direction (green)
    let green = Math.floor(data.reduce(function (a,b) {
        return a + b.x;
    }, 0) / data.length);

    // Compute average in x y direction (blue)
    let blue = Math.floor(data.reduce(function (a,b) {
        return a + b.y;
    }, 0) / data.length);

    // Set values to 0 if there is no data
    green = data.length === 0 ? 0 : green;
    blue = data.length === 0 ? 0 : blue;

    // Set text string and the color of the element
    text.innerHTML = `There are ${data.length} circles, the average color is rgb(0, ${green}, ${blue}), their size is ${state.size}`;
    text.style.color = `rgb(0,${green}, ${blue})`;
}

// Assign an event listener for the `clear` button
// Reset state.circles to an empty array and then `update`
button.addEventListener('click', function() { 
    state.circles = [];
    state.size = 10;
    update();
});