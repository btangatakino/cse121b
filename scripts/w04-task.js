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
    { place: "Mangaia, Cook Islands", duration: "22 years"},
    { place: "Rarotonga, Cook Islands", duration: "20 years"},
    { place: "Manihiki, Cook Islands", duration: "2 years"},
    { place: "Laie, Hawaii", duration: "3 years"},
    { place: "Auckland, New Zealand", duration: "7 years"}
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
myProfile.placesLived.forEach( place => {
    let dt = document.createElement("dt");
    dt.textContent = place;    
    document.querySelector("#places-lived").appendChild(dt);
});

myProfile.placesLived.forEach(duration => {
    let dd = document.createElement("dd");
    dd.textContent = duration;
    document.querySelector("#places-lived").appendChild(dd);
});

document.querySelector("#places-lived").place = myProfile.placesLived.place;
document.querySelector("#places-lived").duration = myProfile.placesLived.duration;

