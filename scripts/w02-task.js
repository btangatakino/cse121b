/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
/* Declare and instantiate variable as "fullName"*/
const fullName = "Beniamina Tangatakino";

/* Declare and instantiate variable as "currentYear"*/
const currentYear = new Date().getFullYear();

/* Declare and instantiate a variable to hold the path and file name of the image in the images folder as "profilePicture" */
const profilePicture = "images/bens_profile_photo.png";

/* Step 3 - Element Variables */
/* Use the document.getElementById() method to get the HTML
element with the id of name and store in as "nameElement"*/
const nameElement = document.getElementById("name");

/* Use the document.getElementById() method to get the HTML
element with the id of food and store in as "foodElement"*/
const foodElement = document.getElementById("food");

/* Use the document.querySelector() method to get the HTML
element with the id of "year" and store in as "yearElement"*/
const yearElement = document.querySelector("#year");

/* Use any viable method to get the profile image element
stored into a variable named "imageElement".*/
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
/* Assign the nameElement's innerHTML property
the fullName variable value.*/
/* Surround the fullName value with <strong> tags, (use template literal).*/
nameElement.innerHTML = `<strong>${fullName}</strong>`;

/* Use the textContent property to set the value of the element to the value of the variable currentYear.*/
yearElement.textContent = currentYear;

/*Use the setAttribute method to set the src property of the image element and set its value to the file path variable set in Step 2.*/
imageElement.setAttribute("src", profilePicture);

/* Use the setAttribute method to set the alt property of the image element and set its value to equal 'Profile image of [Insert Name Variable]' where the name variable comes from Step 2.*/
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */
/* Declare an array variable to hold your favorite foods.*/
favFood = ["Ice Cream", "Oysters", "Lobster", "Mussels", "Fish"];

/*Modify the HTML element with the id of food to display your favorite foods array*/
foodElement.innerHTML = favFood;

/*Declare and instantiate a variable to hold another single favorite food item.*/
let newFavFood = "Crab"
favFood.push(newFavFood);
foodElement.innerHTML += `<br>${favFood}`;

/* Remove the first element in the favorite food array.*/
favFood.shift();
foodElement.innerHTML += `<br>${favFood}`;

/* Remove the last element in the favorite food array.*/
favFood.pop();
foodElement.innerHTML += `<br>${favFood}`;