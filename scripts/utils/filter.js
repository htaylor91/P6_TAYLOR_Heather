
import {displayMedia, mainMedia} from "../pages/photographer.js";

const filterArrow = document.getElementById("filterArrow");

const popularityLabel = document.getElementById("listbox-1");
const dateLabel = document.getElementById("listbox-2");
const titleLabel = document.getElementById("listbox-3");

const popularityBtn = document.getElementById("popularityBtn");
const dateBtn = document.getElementById("dateBtn");
const titleBtn = document.getElementById("titleBtn");

const toggleArrow = document.getElementById("toggleArrow");

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

hideDropdown();

//Filter dropdown toggle 
let toggle = true;

filterArrow.addEventListener("click", function() {

    toggle = !toggle;

    if(toggle){
        toggleArrow.src = "assets/icons/arrow-down.svg";
        hideDropdown();
    }else {
        toggleArrow.src = "assets/icons/arrow-up.svg";
        displayDropdown();
    }
});

//Delete media assets from the gallery section
const clearGallery = () => {
    const gallerySection = document.querySelector(".gallerySection");
    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    removeAllChildNodes(gallerySection);
};

//Sort by Likes
async function sortByLikes() {
    clearGallery();
    // eslint-disable-next-line no-undef
    const mediaAssets = await mainMedia();
    const sortedLikes = mediaAssets.sort(function (a, b) {
        return b.likes - a.likes;
    });
  
    //console.log(sortedLikes);
    //console.table(sortedLikes);
    // eslint-disable-next-line no-undef
    displayMedia(sortedLikes);
}

//Sort by Title
async function sortByTitle() {
    clearGallery();
    // eslint-disable-next-line no-undef
    const mediaAssets = await mainMedia();
    const sortedTitles = mediaAssets.sort(function(a, b) {
        let x = a.title.toLowerCase();
        let y = b.title.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
    });
 
    //console.log(sortedTitles);
    //console.table(sortedTitles);
    // eslint-disable-next-line no-undef
    displayMedia(sortedTitles);
}

//Sort by Date
async function sortByDate() {
    clearGallery();
    // eslint-disable-next-line no-undef
    const mediaAssets = await mainMedia();
    const sortedDates= mediaAssets.sort(function(a, b) {
        return new Date(b.date) - new Date(a.date);
    });

    //console.log(sortedDates);
    //console.table(sortedDates);
    // eslint-disable-next-line no-undef
    displayMedia(sortedDates);
}

popularityBtn.addEventListener("click", sortByLikes);
dateBtn.addEventListener("click", sortByDate);
titleBtn.addEventListener("click", sortByTitle);