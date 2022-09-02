
const filterArrow = document.getElementById("filterArrow");

const popularityLabel = document.getElementById("listbox-1");
const dateLabel = document.getElementById("listbox-2");
const titleLabel = document.getElementById("listbox-3");

const popularityBtn = document.getElementById("popularityBtn");
const dateBtn = document.getElementById("dateBtn");
const titleBtn = document.getElementById("titleBtn");

const toggleArrow = document.getElementById('toggleArrow');

function displayDropdown() {
    popularityBtn.style.display = "flex";
    popularityLabel.style.display = "flex";
    dateBtn.style.display = "flex";
    dateLabel.style.display = "flex";
    titleBtn.style.display = "flex";
    titleLabel.style.display = "flex";
}

function hideDropdown() {
    dateBtn.style.display = "none";
    dateLabel.style.display = "none";
    titleBtn.style.display = "none";
    titleLabel.style.display = "none";
}

//Filter dropdown toggle 
let toggle = true;

filterArrow.addEventListener("click", function() {

    toggle = !toggle;

    if(toggle){
        toggleArrow.src = `assets/icons/arrow-down.svg`;
        hideDropdown();
    }else {
        toggleArrow.src = `assets/icons/arrow-up.svg`;
        displayDropdown();
    }
});

//console.log(filterArrow);