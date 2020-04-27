'use strict';

let body = document.querySelector('body');

let paragraph = document.createElement('p');
paragraph.className = "highlight";
paragraph.classList.add('important');
paragraph.innerText = "hello JS world!";
paragraph.style.fontSize = "2em";

body.appendChild(paragraph);

// use querySelector and css selectors to get the none.css href
// log it
let css = document.querySelector('[href*="css/none.css"]');
console.log(css);

//select h1 and modify it's font-size
let h1 = document.querySelector('h1');
h1.style.fontSize = "5em";



//add event listener to the button to track x and y of clicks
//log them
//log the target
let button = document.querySelector('button');
button.addEventListener('click', function() {
    let message = `You clicked ${event.offsetX} and ${event.offsetY}`;

    let clickedElem = event.target;

    console.log(message);
    console.log(clickedElem);
});



//key press event listener
document.addEventListener('keydown', function(event){
    if(event.key === 'ArrowUp'){
        console.log("Going up!")
    }

});

function doSomething(id) {
    document.querySelector(`#${id}`).addEventListener('click', function(){
        css.setAttribute('href', `css/${id}.css`);
    });
}

//get all style sheet links, log them, then add even listeners to each
let listItems = document.querySelectorAll('.styles li');
//console.log(listItems);

for(var i in Object.keys(listItems)) {
    doSomething(listItems[i].id);
}



// track state of clicks
let clickCount = 0;  //keep track of the "state" (global)
document.querySelector('button.clickAgain').addEventListener('click', function() {
    if(clickCount > 10) {  //decide what to do
        console.log("I think you've had enough");
    }
    else {
        clickCount++;  //change state (+1)
        console.log(`You clicked me ${5*clickCount} times!`);
    }
});