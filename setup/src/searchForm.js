// console.log("bennie!");
// don't have to import this module, you do it so you can use the name and organize better
// for search, it is clear what it is used for so no need to import

import get from "./getElement.js";
import presentDrinks from "./presentDrinks.js";

const searchURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const form = get(".search-form");
const input = get("[name=drink]");

form.addEventListener("keyup", (e) => {
  e.preventDefault();
  const value = input.value;
  if (!value) return;
  presentDrinks(`${searchURL}${value}`);
});
