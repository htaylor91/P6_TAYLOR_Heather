import { sortByLikes, sortByDate, sortByTitle } from "./filter.js";

const select = document.getElementById("select");

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
};

select.addEventListener("change", selectSomething);