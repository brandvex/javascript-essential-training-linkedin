/**
 * Challenge: Create a new object type
 * 
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());

const bible = new Book(
  "The Old Testament",
  "Moses",
  1184
);

const minecraftBook = new Book(
  "Minecraft: Guide to Survival",
  "Mojang",
  96
);

const twilight = new Book(
  "Twilight",
  "Stephen Myers",
  544,
  true
);

const thirdTwin = new Book(
  "The Third Twin",
  "Ken Follet",
  482
);

const nightingale = new Book(
  "The Nightingale",
  "Kirstin Hannah",
  502
);

console.log(minecraftBook.purchase(true));
console.log(minecraftBook);