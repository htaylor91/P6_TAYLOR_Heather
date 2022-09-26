//Function to close the video description dialog
const descriptionDialog = document.getElementById("descriptionDialog");
const closeDescription = document.getElementById("closeDescription");

function closeDescriptionModal() {
    descriptionDialog.close();
    descriptionDialog.setAttribute("aria-hidden", true);
}

closeDescription.addEventListener("click", closeDescriptionModal);

export { descriptionDialog };