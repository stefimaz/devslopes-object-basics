/* 
Module Two Exercise: Object Methods
Start with exercise-2.md if you haven't read it! 
*/

//  DO NOT EDIT THE BELOW OBJECT // 

const papaJohns = {
  name: "Papa John's",
  slogan: "Better Ingredients. Better Pizza. Papa John's.",
  cuisines: ["italian", "american", "pizza"],
  pizzaToppings: {
    pepperoni: 2,
    peppers: 0.6,
    extraCheese: 1.5,
    olives: 0.5,
    bacon: 3,
    extraSauce: 1,
  },
  numberOfStars: 3.5,
  favorited: false,
  address: "555 Main Street",
  zipcode: 11234,
  acceptsReservations: false,
};

// DO NOT EDIT THE ABOVE OBJECT // 

// YOUR WORK GOES HERE // 

function grabCategories(obj) {
  return console.log(Object.keys(obj));
};

grabCategories(papaJohns);
grabCategories(papaJohns.pizzaToppings);

function verifyValues(obj, num) {
  return console.log(Object.values(obj).length === num);
};

verifyValues(papaJohns, 9);
verifyValues(papaJohns, 3);

function getToppingsInfo() {
  return console.log(Object.entries(papaJohns.pizzaToppings));
};

getToppingsInfo();

papaJohns.printAd = function(topping) {
  console.log(`"Welcome to Papa John's! We are located at ${papaJohns.address}. This week, we are having a sale on ${topping} for $ ${papaJohns.pizzaToppings[topping]}. ${papaJohns.slogan}"`);
};

papaJohns.printAd("bacon");

papaJohns.slogan = "Get yours now!";
papaJohns.address = "123 center st";

papaJohns.printAd("bacon");

