
const headerHome = document.getElementById("headerHome");
const mainHome = document.getElementById("mainHome");
const pageLoader = document.getElementById("pageLoader");

window.onload = () => {
    console.log("page is fully loaded");
    setTimeout(displayPage, 1500);
};

const displayPage = () => {
    pageLoader.style.display = "none";
    pageLoader.setAttribute("class", "hidden");
    headerHome.style.display = "flex";
    mainHome.style.display = "grid";
};