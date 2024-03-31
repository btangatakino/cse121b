/* W06 Final Project */

//document.querySelector("#over90").addEventListener("click", filterHeroes);

// Declaring and initializing global variables
const heroesElement = document.querySelector("#heroes");

// Declare a global empty array variable to store a list of heroes named heroList.
let heroesList = [];

// Function: displayHeroes()
// function expression using an arrow function
const displayHeroes = (heroes => {    
    // Process the heroes array using a forEach method:
    heroes.forEach(hero => {
        // Create an HTML <article> element.
        const article = document.createElement("article");
        // Create an HTML <h3> element and add the heroe's name property to this new element.
        const heroName = document.createElement("h3");
        heroName.textContent = `${hero.name}`;

        const fullName = document.createElement("h4");
        fullName.textContent = `${hero.biography.fullName}`;

        const publisher = document.createElement("h4")
        publisher.textContent = `${hero.biography.publisher}`;

        const power =document.createElement("h4")
        power.textContent = `${hero.powerstats.power}`;
        // Create an HTML <img> element and add the heroes' images property to the src attribute and the heroes' name property to the alt attribute.
        const imageElement = document.createElement("img");
        imageElement.setAttribute("src", hero.images.sm);
        imageElement.setAttribute("alt", `${hero.name}`);
        // Appending the <h3> element and the <img> element to the <article> element as children.
        article.appendChild(heroName);
        article.appendChild(fullName);
        article.appendChild(publisher);
        article.appendChild(power);
        article.appendChild(imageElement);
        // Appending the <article> element to the global heroesElement variable.
        heroesElement.appendChild(article);

        //document.querySelector("#parentid .parenClass").insertAdjacentHTML('afterend', yourChildElement.outerHTML);
    })
});

// Async, anonymous, arrow function expression called getHeroes.
const getHeroes = async () => {
    // Declaring a const variable named response that awaits the built-in fetch method calling the hero data.
    const response = await fetch("https://raw.githubusercontent.com/btangatakino/cse121b/main/.vscode/heroes.json");
    // Converting the  fetch response into a JavaScript object (.json) and assigning the result to the heroesList global array variable.
    heroesList = await response.json();
    
    // Calling the displayHeroes function and passing it the heroesList.
    displayHeroes(heroesList);
}
/* reset Function */
// Declaring a function expression named reset that clears all of the <article> elements from the heroesElement.
function reset() { 
    heroesElement.innerHTML = "";
}

/* filterHeroes Function */
// Declaring a function expression named filterHeroes that accepts an argument named heroes.
function filterHeroes(heroes) {
    // Calling the reset function to clear the output.
    reset();
    // Defining a variable named filter that obtains the value of the HTML element with the ID of filtered.
    let filter = document.getElementById("filtered").value;
    // Using a switch statement that uses the filter value as the selector responding to four (4) cases.
    switch (filter) {
        // In each case, it calls the displayHeroes function using a filter statement that filters the heroes parameter for the four options provided.
        case "powerOver90":
            // Filter for heroes that have power over 90.
            let powerOver90 = heroes.filter(hero => Number(hero.powerstats.power > 90));
            displayHeroes(powerOver90);
            break;

        case "powerUnder20":
            // Filter for heroes that have power under20.
            let powerUnder20 = heroes.filter(hero => Number(hero.powerstats.power < 20));
            displayHeroes(powerUnder20);
            break;

        case "heightOver180cm":
            // Filter for heroes whose height is over 180cm.
            let heightOver180cm = heroes.filter(hero => (hero.appearance.height).slice(0, 2) > 180);
            displayHeroes(heightOver180cm);
            break;
            
        case "all":
            // Use no filter. Just use heroes as the argument.
            displayHeroes(heroes);
            break;
    }
}

// 8: Event Listener: fiterHeroes Element change
//8.1 Add a change event listener to the HTML element with an ID of filtered that calls the filterHeroes function and sends a arrow function result with the heroesList as the argument. 
document.querySelector("#filtered").addEventListener("change", () => {
    filterHeroes(heroesList);
});

// Call getHeroes function.
getHeroes();