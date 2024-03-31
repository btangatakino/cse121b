/* W05: Programming Tasks */

// 3. Declare and initialize global variables
// 3.1 Declare a const variable named templesElement that references the HTML div element that eventually will be populated with temple data.
const templesElement = document.querySelector("#temples");

// 3.2 Declare a global empty array variable to store a list of temples named templeList.
let templeList = [];

// 4: Function: displayTemples()
// 4.1 Declare a function expression using const named dislayTemples that uses an arrow function to accept a list of temples as an array argument.
const displayTemples = (temples => {    
    // 4.2 Process each temple in the temple array using a forEach method and do the following for each temple item:
    temples.forEach(temple => {
        // 4.2.1 Create an HTML <article> element.
        const article = document.createElement("article");
        // 4.2.2 Create an HTML <h3> element and add the temple's templeName property to this new element.
        const heading = document.createElement("h3");
        heading.textContent = `${temple.templeName}`;
        // 4.2.3 Create an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's location property to the alt attribute.
        const imageElement = document.createElement("img");
        imageElement.setAttribute("src", `${temple.imageUrl}`);
        imageElement.setAttribute("alt", `${temple.location}`);    
        // 4.2.4 Append the <h3> element and the <img> element to the <article> element as children.
        article.appendChild(heading);
        article.appendChild(imageElement);
        // 4.2.5 Append the <article> element to the global templesElement variable declared in Step 2.
        templesElement.appendChild(article);
    })
});

/* 5: async getTemples Function using fetch()*/
// 5.1 Create another function expression called getTemples. Make it an async anonymous, arrow function.
const getTemples = async () => {
    // 5.2 In the function, declare a const variable named response that awaits the built-in fetch method calling the temple data, absolute URL given in Step 2 above.
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    // 5.3 Convert your fetch response into a JavaScript object (.json) and assign the result to the templeList global array variable you declared in Step 3 above. Make sure the the execution of the code waits here as well until it finishes.
    templeList = await response.json();
    
    // 5.4 The last statement in the getTemples function calls the displayTemples function and passes it the list of temples (templeList).
    displayTemples(templeList);
}
/* 6: reset Function */
// 6.1 Declare a function expression named reset that clears all of the <article> elements from the templesElement.
function reset() { 
    templesElement.innerHTML = "";
}

/* 7: filterTemples Function */
// 7.1 Declare a function expression named filterTemples.
// 7.2 The function should accept a argument in a parameter named temples.
function filterTemples(temples) {
    // 7.3 In this function, first call the reset function to clear the output.
    reset();
    // 7.4 Define a variable named filter that obtains the value of the HTML element with the ID of filtered (The pull-down menu).
    let filter = document.getElementById("filtered").value;
    // 7.5 Use a switch statement that uses the filter value as the selector responding to four (4) cases.
    switch (filter) {
        // 7.6 For each case, call the displayTemples function using an filter statement that filters the temples parameter for the four options provided.
        case "utah":
            // 7.6.1 "utah": filter for temples where the location contains "Utah" as a string.
            let utahTemples = temples.filter(temple => temple.location.toLowerCase().includes("utah"));
            displayTemples(utahTemples);
            break;
        case "notutah":
            // 7.6.2 "notutah": filter for temples where the location does not contain "Utah" as a string.
            let notUtahTemples = temples.filter(temple => !(temple.location.toLowerCase().includes("utah")));
            displayTemples(notUtahTemples);
            break;
        case "older":
            // 7.6.3 "older": filter for temples where the dedicated date is before 1950. (compare versus new Date(1950, 0, 1)).
            //let date = new Date(temples.dedicated);
            /*let older = temples.filter(temple => (temple.dedicated).split(",")[0] < 1950);
            displayTemples(older);*/
            let older = temples.filter(temple => Number(temple.dedicated.slice(0,4) < 1950));
            displayTemples(older);
            break;
        case "all":
            // 7.6.4 "all": no filter. Just use temples as the argument.
            displayTemples(temples);
            break;
    }
}

// 8: Event Listener: fiterTemples Element change
//8.1 Add a change event listener to the HTML element with an ID of filtered that calls the filterTemples function and sends a arrow function result with the templeList as the argument. 
document.querySelector("#filtered").addEventListener("change", () => {
    filterTemples(templeList);
});

// Call getTemples function.
getTemples();