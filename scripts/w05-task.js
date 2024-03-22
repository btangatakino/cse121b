/* W05: Programming Tasks */

/* Declare and initialize global variables */
// 3.1 Declare a const variable named templesElement that references the HTML div element that eventually will be populated with temple data.
const templesElement = document.querySelector("#temples");

// 3.2 Declare a global empty array variable to store a list of temples named templeList.
let templeList = [];

// let parentElement = document.body;
// creating new element
/*let element = document.createElement("IMG");

// adding attributes to the element
element.setAttribute("src", "https://i.imgur.com/Rnj7kZj.jpeg");
element.setAttribute("alt", "picture of pluto");
element.setAttribute("title", "picture of pluto");

parentElement.appendChild(element);*/

// 4.1 Declare a function expression using const named dislayTemples that uses an arrow function to accept a list of temples as an array argument.
const displayTemples = (temples => {
    document.createElement("article");
    document.createElement("h3");
    document.textContent = templeList;
    
});
/* async displayTemples Function */
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

    templeList = await response.json();
    console.log(templeList);

    displayTemples(templeList);
}

/* async getTemples Function using fetch()*/


/* reset Function */


/* filterTemples Function */


getTemples();

/* Event Listener */
