/* LESSON 3 - Programming Tasks */

/* Profile Object  */
/* Populate Profile Object with placesLive objects */
let myProfile = {
    name: "Beniamina Tangatakino",
    photo: {
        src: "images/bens_profile_photo.png",
        alt: "My Profile Picture"
    },
    favoriteFoods: ["Ice Cream", "Oysters", "Lobster", "Mussels", "Fish"],
    hobbies: ["Studying", "Site Seeing", "Travelling", "Motor Cross", "Service"],
    placesLived: []
};


myProfile.placesLived.push(
    {
        place: "Mangaia, Cook Islands",
        length: "23 years",
        place: 
    }
)



/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
document.querySelector("#photo").innerHTML = myProfile.photo; 

/* Favorite Foods List*/
/* document.body.onload = addElement;

function addElement() {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
} */

//document.body.onload = addElement;

//create a new <li> element
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});
/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let ul = document.createElement("ul");
    ul.textContent = hobby;
    document.querySelector("#hobbies").appendChild(ul);
});

/* Places Lived DataList */


