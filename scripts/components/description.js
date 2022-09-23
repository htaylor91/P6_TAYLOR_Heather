
const descriptionDialog = document.getElementById("descriptionDialog");
const closeDescription = document.getElementById("closeDescription");

function closeDescriptionModal() {
    descriptionDialog.close();
    descriptionDialog.setAttribute("aria-hidden", true);
}

closeDescription.addEventListener("click", closeDescriptionModal);
