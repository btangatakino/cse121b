/* W05: Programming Tasks */

// 3. Declare and initialize global variables
// 3.1 Declare a const variable named templesElement that references the HTML div element that eventually will be populated with temple data.
document.querySelector("#over90").addEventListener("click", filterHeroes);


const heroesElement = document.querySelector("#heroes");

// 3.2 Declare a global empty array variable to store a list of heroes named heroList.
let heroesList = [];

// 4: Function: displayHeroes()
// 4.1 Declare a function expression using const named dislayHeroes that uses an arrow function to accept a list of heroes as an array argument.
const displayHeroes = (heroes => {    
    // 4.2 Process each temple in the temple array using a forEach method and do the following for each temple item:
    heroes.forEach(hero => {
        // 4.2.1 Create an HTML <article> element.
        const article = document.createElement("article");
        // 4.2.2 Create an HTML <h3> element and add the heroe's name property to this new element.
        const heroName = document.createElement("h3");
        heroName.textContent = `${hero.name}`;

        const fullName = document.createElement("h4");
        fullName.textContent = `${hero.biography.fullName}`;

        const publisher = document.createElement("h4")
        publisher.textContent = `${hero.biography.publisher}`;

        const power =document.createElement("h4")
        power.textContent = `${hero.powerstats.power}`;
        // 4.2.3 Create an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's location property to the alt attribute.
        const imageElement = document.createElement("img");
        imageElement.setAttribute("src", `${hero.images.sm}`);
        imageElement.setAttribute("alt", `${hero.name}`);
        // 4.2.4 Append the <h3> element and the <img> element to the <article> element as children.
        article.appendChild(heroName);
        article.appendChild(fullName);
        article.appendChild(publisher);
        article.appendChild(power);
        article.appendChild(imageElement);
        // 4.2.5 Append the <article> element to the global templesElement variable declared in Step 2.
        heroesElement.appendChild(article);

        //document.querySelector("#parentid .parenClass").insertAdjacentHTML('afterend', yourChildElement.outerHTML);

    })
});

/* 5: async getTemples Function using fetch()*/
// 5.1 Create another function expression called getTemples. Make it an async anonymous, arrow function.
const getHeroes = async () => {
    // 5.2 In the function, declare a const variable named response that awaits the built-in fetch method calling the hero data.
    const response = await fetch("https://raw.githubusercontent.com/btangatakino/cse121b/main/.vscode/heroes.json");
    // 5.3 Convert your fetch response into a JavaScript object (.json) and assign the result to the templeList global array variable you declared in Step 3 above. Make sure the the execution of the code waits here as well until it finishes.
    heroesList = await response.json();
    
    // 5.4 The last statement in the getTemples function calls the displayTemples function and passes it the list of temples (templeList).
    displayHeroes(heroesList);
}
/* 6: reset Function */
// 6.1 Declare a function expression named reset that clears all of the <article> elements from the templesElement.
function reset() { 
    heroesElement.innerHTML = "";
}

/* 7: filterTemples Function */
// 7.1 Declare a function expression named filterTemples.
// 7.2 The function should accept a argument in a parameter named temples.
function filterHeroes(heroes) {
    // 7.3 In this function, first call the reset function to clear the output.
    reset();
    // 7.4 Define a variable named filter that obtains the value of the HTML element with the ID of filtered (The pull-down menu).
    let filter = document.getElementById("filtered").value;
    // 7.5 Use a switch statement that uses the filter value as the selector responding to four (4) cases.
    switch (filter) {
        // 7.6 For each case, call the displayTemples function using an filter statement that filters the temples parameter for the four options provided.
        case "powerOver90":
            // 7.6.1 "utah": filter for temples where the location contains "Utah" as a string.
            let powerOver90 = heroes.filter(hero => Number(hero.powerstats.power) >= 90);
            displayHeroes(powerOver90);
            break;
        /*case "notutah":
            // 7.6.2 "notutah": filter for temples where the location does not contain "Utah" as a string.
            let notUtahTemples = temples.filter(temple => !(temple.location.toLowerCase().includes("utah")));
            displayTemples(notUtahTemples);
            break;
        case "older":
            // 7.6.3 "older": filter for temples where the dedicated date is before 1950. (compare versus new Date(1950, 0, 1)).
            //let date = new Date(temples.dedicated);
            let older = temples.filter(temple => (temple.dedicated).split(",")[0] < 1950);
            displayTemples(older);
            /*let older = temples.filter(temple => Number(temple.dedicated.slice(0,4) < 1950));
            displayTemples(older);
            break;*/
        case "all":
            // 7.6.4 "all": no filter. Just use temples as the argument.
            displayHeroes(heroes);
            break;
    }
}

// 8: Event Listener: fiterTemples Element change
//8.1 Add a change event listener to the HTML element with an ID of filtered that calls the filterTemples function and sends a arrow function result with the templeList as the argument. 
document.querySelector("#filtered").addEventListener("change", () => {
    filterHeroes(heroesList);
});

// Call getTemples function.
getHeroes();