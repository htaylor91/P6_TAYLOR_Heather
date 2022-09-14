
import addGlobalEventListener from "./globalEvent.js";

const body = document.getElementById("body");
const modalDialog = document.getElementById("contact_modal");
const closeModalBtn = document.getElementById("closeModal");

addGlobalEventListener("click", "#displayModal", (event) => {
    console.log("Clicked Button");
    displayModal(event);
});

function displayModal() {
    modalDialog.showModal();
    body.setAttribute("class", "noScroll");
}

function closeModal() {
    modalDialog.close();
    body.removeAttribute("class", "noScroll");
}

closeModalBtn.addEventListener("click", closeModal);

export {body};
