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
    { place: "Mangaia, Cook Islands", length: "22 years"},
    { place: "Rarotonga, Cook Islands", length: "20 years"},
    { place: "Manihiki, Cook Islands", length: "2 years"},
    { place: "Laie, Hawaii", length: "3 years"},
    { place: "Auckland, New Zealand", length: "7 years"}
)

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo.src;
document.querySelector("#photo").alt = myProfile.name.alt;

/* Favorite Foods List*/
//create a new <li> element
myProfile.favoriteFoods.forEach(food => {
    let favFoodElem = document.createElement("li");
    favFoodElem.textContent = food;
    document.querySelector("#favorite-foods").appendChild(favFoodElem);
});
/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let hobbyElem = document.createElement("ul");
    hobbyElem.textContent = hobby;
    document.querySelector("#hobbies").appendChild(hobbyElem);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(placeLived => {
    let placesLivedPlace = document.createElement("dt");
    placesLivedPlace.textContent = placeLived.place;
    
    let placesLivedLength = document.createElement("dd");
    placesLivedLength.textContent = placeLived.length;

    document.querySelector("#places-lived").appendChild(placesLivedPlace);
    document.querySelector("#places-lived").appendChild(placesLivedLength);
});
