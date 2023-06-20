// Single Drink API
// www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007

import presentDrinks from "./src/presentDrinks.js";
import "./src/searchForm.js";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";

window.addEventListener("DOMContentLoaded", () => {
  presentDrinks(URL);
});
