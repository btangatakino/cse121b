/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
/* Declare and instantiate variable as "fullName"*/
let fullName = "Beniamina Tangatakino";

const d = new Date();
/* Declare and instantiate variable as "currentYear"*/
let currentYear = d.getFullYear();

/* Declare and instantiate a variable to hold the path and file name of the image in the images folder as "profilePicture" */
const profilePicture = "images/bens_profile_photo.png"
/*const profilePicture = document.createElement("img");
profilePicture.setAttribute("src", "images/bens_profile_photo.png");
profilePicture.setAttribute("alt", "Profile image");
document.body.appendChild(profilePicture);*/

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");

const foodElement = document.getElementById("food");

const yearElement = document.querySelector("#year");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;



profilePicture.setAttribute("src", profilePicture);

profilePicture.setAttribute(`"alt", "Profile image of ${fullName}"`)

/* Step 5 - Array */






