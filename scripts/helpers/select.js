//Import all 3 sort functions
import { sortByLikes, sortByDate, sortByTitle } from "./filter.js";
//Select combobox dropdown
export const select = document.getElementById("select");

//Change the direction of the background image arrow in the select dropdown
const flipArrowUp = () => {
    select.removeAttribute("class", "arrowDown");
    select.setAttribute("class", "filterSection__select arrowUp");
};

export const flipArrowDown = () => {
    select.removeAttribute("class", "arrowUp");
    select.setAttribute("class", "filterSection__select arrowDown");
};

//For each selected value, selectSomething() calls the corresponding sort function from filter.js
const selectSomething = () => {
    if (select.value === "popularité") {
        sortByLikes();
    }
    if (select.value === "date") {
        sortByDate();
    }
    if (select.value === "titre") {
        sortByTitle();
    }

    flipArrowDown();

};

select.addEventListener("change", selectSomething);
select.addEventListener("click", flipArrowUp);
select.addEventListener("focusout", flipArrowDown);

select.addEventListener("keydown", function(event){
    if(event.key === " "){
        flipArrowUp();
    }
});