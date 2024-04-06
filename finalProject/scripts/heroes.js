/* W06 Final Project 
Author: Beniamina Tangatakino*/

// Declaring and initializing global variables
const heroesElement = document.querySelector("#heroes");

// Declaring a global empty array variable to store a list of heroes named heroList.
let heroesList = [];

// Function: displayHeroes()
// Declaring a function expression named displayHeroes using an arrow function
const displayHeroes = (heroes => {    
    // Process the heroes array using a forEach method:
    heroes.forEach(hero => {
        // Creating an HTML <article> element.
        const article = document.createElement("article");
        // Creating HTML <h3> and <h4> elements and adding some heroe's properties to them.
        const heroName = document.createElement("h3");
        heroName.textContent = `${hero.name}`;

        const fullName = document.createElement("h4");
        fullName.textContent = `${hero.biography.fullName}`;

        const gender = document.createElement("h4");
        fullName.textContent = `${hero.appearance.gender}`;

        const publisher = document.createElement("h4")
        publisher.textContent = `${hero.biography.publisher}`;

        const power = document.createElement("h4")
        power.textContent = `${hero.powerstats.power}`;

        const height = document.createElement("h4")
        height.textContent = `${hero.appearance.height[1]}`;

        // Creating an HTML <img> element and adding the heroes' images property to the src attribute and the heroes' name property to the alt attribute.
        const imageElement = document.createElement("img");
        imageElement.setAttribute("src", hero.images.xs);
        imageElement.setAttribute("alt", `${hero.name}`);
        // Appending the <h3> element and the <img> element to the <article> element as children.
        article.appendChild(heroName);
        article.appendChild(fullName);
        article.appendChild(publisher);
        article.appendChild(power);
        article.appendChild(imageElement);
        article.appendChild(height);
        article.appendChild(gender);
        // Appending the <article> element to the global heroesElement variable.
        heroesElement.appendChild(article);
    })
});

// Async, anonymous, arrow function expression called getHeroes.
const getHeroes = async () => {
    // Declaring a const variable named response that awaits the built-in fetch method calling the hero data.
    const response = await fetch("https://raw.githubusercontent.com/btangatakino/cse121b/main/.vscode/heroes.json");
    // Converting the fetch response into a JavaScript object (.json) and assigning the result to the heroesList global array variable.
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
    const filter = document.getElementById("filtered").value;

    // Using a switch statement that uses the filter value as the selector responding to four (4) cases.
    switch (filter) {
        // In each case, it calls the displayHeroes function using a filter statement that filters the heroes parameter for the six options provided.
        case "male":
            // Filter for heroes that are male.
            const male = heroes.filter(hero => hero.appearance.gender.includes("Male"));
            displayHeroes(male);
            break;

        case "female":
            // Filter for heroes that are female.
            const female = heroes.filter(hero => hero.appearance.gender.toLowerCase().includes("female"));
            displayHeroes(female);
            break;

        case "powerOver90":
            // Filter for heroes that have power over 90.
            let powerOver90 = heroes.filter(hero => Number(hero.powerstats.power > 90));
            displayHeroes(powerOver90);
            break;

        case "powerUnder25":
            // Filter for heroes that have power under20.
            let powerUnder25 = heroes.filter(hero => Number(hero.powerstats.power < 25));
            displayHeroes(powerUnder25);
            break;

        case "heightOver180":
            // Filter for heroes whose height is over 180cm.
            let heightOver180 = heroes.filter(hero => {
                let heightInCm = parseInt(hero.appearance.height[1].split(" ")[0]);
            return heightInCm > 180;
            });
            displayHeroes(heightOver180);
            break;

        case "heightUnder170":
            // Filter for heroes whose height is under 170cm.
            let heightUnder170 = heroes.filter(hero => {
                let heightInCm = parseInt(hero.appearance.height[1].split(" ")[0]);
            return (0 < heightInCm > 0 && heightInCm < 170);
            });
            displayHeroes(heightUnder170);
            break;
        
        case "marvelComics":
            // Filter for heroes published by Marvel Comics.
            let marvelComics = heroes.filter(hero => hero.biography.publisher.toLowerCase().includes("marvel comics"));
            displayHeroes(marvelComics);
            break;

        case "redRobin":
            // Filter for heroes published by Red Robin.
            let redRobin = heroes.filter(hero => hero.biography.publisher.toLowerCase().includes("red robin"));
            displayHeroes(redRobin);
            break;
        
        case "abcStudios":
            // Filter for heroes published by ABC Studios.
            let abcStudios = heroes.filter(hero => hero.biography.publisher.toLowerCase().includes("abc studios"));
            displayHeroes(abcStudios);
            break;

        case "dcComics":
            // Filter for heroes published by DC Comics.
            let dcComics = heroes.filter(hero => hero.biography.publisher.toLowerCase().includes("dc comics"));
            displayHeroes(dcComics);
            break;

        case "nbcHeroes":
            // Filter for heroes published by NBC - Heroes.
            let nbcHeroes = heroes.filter(hero => hero.biography.publisher.toLowerCase().includes("nbc - heroes"));
            displayHeroes(nbcHeroes);
            break;
            
        case "universalStudios":
            // Filter for heroes published by Universal Studios.
            let universalStudios = heroes.filter(hero => hero.biography.publisher.toLowerCase().includes("universal studios"));
            displayHeroes(universalStudios);
            break;

        case "marvelComicsAndFemaleAndPowerOver90":
            // Filter for heroes published by Marvel Comics and also a Female.
            let marvelComicsAndFemaleAndPowerOver90 = heroes.filter(hero => (hero.biography.publisher.toLowerCase().includes("marvel comics") && hero.appearance.gender.toLowerCase().includes("female") && Number(hero.powerstats.power > 90)));
            displayHeroes(marvelComicsAndFemaleAndPowerOver90);
            break;

        case "all":
            // Use no filter. Just use heroes as the argument.
            displayHeroes(heroes);
            break;
    }
}

// Event Listener: fiterHeroes Element change
// Adding a change event listener to the HTML element with an ID of filtered that calls the filterHeroes function and sends an arrow function result with the heroesList as the argument. 
document.querySelector("#filtered").addEventListener("change", () => {
    filterHeroes(heroesList);
});

// Calling getHeroes function.
getHeroes();