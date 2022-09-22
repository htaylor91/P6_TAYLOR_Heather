
const descriptionDialog = document.getElementById("descriptionDialog");
const closeDescription = document.getElementById("closeDescription");

function closeDescriptionModal() {
    descriptionDialog.close();
}

closeDescription.addEventListener("click", closeDescriptionModal);
