import {headerSection, mainSection} from "./../helpers/displayContactForm.js";

const pageLoader = document.getElementById("pageLoader");

window.onload = () => {
    console.log("page is fully loaded");
    setTimeout(displayPage, 1500);
};

const displayPage = () => {
    pageLoader.style.display = "none";
    pageLoader.setAttribute("class", "hidden");
    headerSection.style.display = "flex";
    mainSection.style.display = "block";
};
