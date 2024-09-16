/* 
Module One Exercise: Object Syntax & Notation
Start with exercise-1.md if you haven't read it! 
*/

// YOUR WORK GOES HERE //
const bond45 = {
   name: "Bond 45",
   cuisine: ["Italian", "steaks"],
   numberOfStars: 4,
   favorited: true
};

bond45.address = "123 main st";
bond45.zipcode = 10012;
bond45.acceptsReservations = true;

bond45.numberOfStars += 1;
bond45.favorited = !bond45.favorited;
bond45.cuisine.push("pastas");

function retrieveProperty(key, obj) {
   if (obj[key]) {
      return object[key];
   } else {
      return "The information you requested does not exist."
   }
};

