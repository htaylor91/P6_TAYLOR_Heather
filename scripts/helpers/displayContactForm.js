
import addGlobalEventListener from "./globalEvent.js";

const body = document.getElementById("body");
const modalDialog = document.getElementById("contact_modal");
const form = document.getElementById("form");
const closeModalBtn = document.getElementById("closeModal");

addGlobalEventListener("click", "#displayModal", (event) => {
    console.log("Clicked Button");
    displayModal(event);
});

function displayModal() {
    modalDialog.setAttribute("aria-hidden", false);
    modalDialog.showModal();
    body.setAttribute("class", "noScroll");
}

function closeModal() {
    modalDialog.close();
    modalDialog.setAttribute("aria-hidden", true);
    body.removeAttribute("class", "noScroll");
}

closeModalBtn.addEventListener("click", closeModal);

export {body, form, closeModal};
