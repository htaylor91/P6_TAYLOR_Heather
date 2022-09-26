
import addGlobalEventListener from "./globalEvent.js";

const body = document.getElementById("body");
const headerSection = document.getElementById("headerSection");
const mainSection = document.getElementById("mainSection");

const modalDialog = document.getElementById("contact_modal");
const form = document.getElementById("form");
const closeModalBtn = document.getElementById("closeModal");

addGlobalEventListener("click", "#displayModal", (event) => {
    console.log("Clicked Button");
    displayModal(event);
});

function displayModal() {
    headerSection.setAttribute("aria-hidden", true);
    mainSection.setAttribute("aria-hidden", true);
    modalDialog.setAttribute("aria-hidden", false);
    modalDialog.showModal();
    body.setAttribute("class", "noScroll");
}

function closeModal() {
    modalDialog.close();
    modalDialog.setAttribute("aria-hidden", true);
    headerSection.setAttribute("aria-hidden", false);
    mainSection.setAttribute("aria-hidden", false);
    body.removeAttribute("class", "noScroll");
}

closeModalBtn.addEventListener("click", closeModal);

export {body, headerSection, mainSection, modalDialog, form, closeModal};
