
import {displayMedia, mainMedia} from "../pages/photographer.js";

const listbox = document.getElementById("listbox");
const filterArrow = document.getElementById("filterArrow");

const firstLabel = document.getElementById("listbox-1");
const secondLabel = document.getElementById("listbox-2");
const thirdLabel = document.getElementById("listbox-3");

const popularityBtn = document.getElementById("popularityBtn");
const dateBtn = document.getElementById("dateBtn");
const titleBtn = document.getElementById("titleBtn");

const toggleArrow = document.getElementById("toggleArrow");

function displayDropdown() {

    listbox.setAttribute("aria-expanded", true);

    secondLabel.classList.remove("hide");
    thirdLabel.classList.remove("hide");

    secondLabel.classList.add("show");
    thirdLabel.classList.add("show");

    toggleArrow.src = "assets/icons/arrow-up.svg";
    filterArrow.removeEventListener("click", displayDropdown);
    filterArrow.addEventListener("click", hideDropdown );
    
}

function hideDropdown() {

    listbox.setAttribute("aria-expanded", false);

    secondLabel.classList.remove("show");
    thirdLabel.classList.remove("show");
    
    secondLabel.classList.add("hide");
    thirdLabel.classList.add("hide");

    toggleArrow.src = "assets/icons/arrow-down.svg";
    filterArrow.removeEventListener("click", hideDropdown);
    filterArrow.addEventListener("click", displayDropdown);
}

filterArrow.addEventListener("click", displayDropdown);

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

//Clear all filterSection list item children 
//to make room to append new children to them
//when a filter option is selected
const clearLabel = () => {
    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    removeAllChildNodes(firstLabel);
    removeAllChildNodes(secondLabel);
    removeAllChildNodes(thirdLabel);

};

function popularityDropdown() {
    clearLabel();

    firstLabel.removeAttribute("aria-selected", false);
    firstLabel.appendChild(popularityBtn);
    firstLabel.setAttribute("aria-selected", true);
    
    secondLabel.appendChild(dateBtn);
    thirdLabel.appendChild(titleBtn);

    hideDropdown();
    listbox.focus();

    sortByLikes();
    
}

function dateDropdown() {
    clearLabel();

    firstLabel.removeAttribute("aria-selected", false);
    firstLabel.appendChild(dateBtn);
    firstLabel.setAttribute("aria-selected", true);
    
    secondLabel.appendChild(titleBtn);
    thirdLabel.appendChild(popularityBtn);

    hideDropdown();
    listbox.focus();
    sortByDate();
}

function titleDropdown() {
    clearLabel();

    firstLabel.removeAttribute("aria-selected", false);
    firstLabel.appendChild(titleBtn);
    firstLabel.setAttribute("aria-selected", true);

    secondLabel.appendChild(popularityBtn);
    thirdLabel.appendChild(dateBtn);

    hideDropdown();
    listbox.focus();
    sortByTitle();
    
}

//Sort by Likes
async function sortByLikes() {
    clearGallery();
    const mediaAssets = await mainMedia();
    const sortedLikes = mediaAssets.sort(function (a, b) {
        return b.likes - a.likes;
    });
    
    displayMedia(sortedLikes);
}

//Sort by Title
async function sortByTitle() {
    clearGallery();
    const mediaAssets = await mainMedia();
    const sortedTitles = mediaAssets.sort(function(a, b) {
        let x = a.title.toLowerCase();
        let y = b.title.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
    });

    displayMedia(sortedTitles);
}

//Sort by Date
async function sortByDate() {
    clearGallery();
    const mediaAssets = await mainMedia();
    const sortedDates= mediaAssets.sort(function(a, b) {
        return new Date(b.date) - new Date(a.date);
    });

    displayMedia(sortedDates);
}

popularityBtn.addEventListener("click", popularityDropdown);
dateBtn.addEventListener("click", dateDropdown);
titleBtn.addEventListener("click", titleDropdown);