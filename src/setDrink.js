const setDrink = (section) => {
  section.addEventListener("click", (e) => {
    // e.preventDefault(); do this just to make sure you get the id back
    const id = e.target.parentElement.dataset.id;
    // console.log(id);
    // use local storage to store and access the id
    localStorage.setItem("drink", id);
  });
};

export default setDrink;
