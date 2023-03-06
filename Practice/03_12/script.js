/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 **/

import Shirt from "./Shirt.js"

const workShirt = new Shirt(
    "darkBlue",
    "Large",
    false,
);

const animeShirt = new Shirt(
    "Black",
    "Large",
    true
);

const tommyShirt = new Shirt(
    "black",
    "Medium",
    false
)

console.log(workShirt)
console.log(animeShirt)
console.log(tommyShirt)