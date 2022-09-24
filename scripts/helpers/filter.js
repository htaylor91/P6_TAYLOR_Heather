//Import functions to display the unique photographer's media assets
import {displayMedia, mainMedia} from "../pages/photographer.js";

//Import function to change the direction of the select dropdown arrow
import { flipArrowDown } from "../helpers/select.js";

//Delete media assets from the gallery section to clear space for sort output
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
export const sortByLikes = async () => {
    clearGallery();
    const mediaAssets = await mainMedia();
    const sortedLikes = mediaAssets.sort(function (a, b) {
        return b.likes - a.likes;
    });

    flipArrowDown();
    displayMedia(sortedLikes);
};

//Sort by Title
export const sortByTitle = async () => {
    clearGallery();
    const mediaAssets = await mainMedia();
    const sortedTitles = mediaAssets.sort(function(a, b) {
        let x = a.title.toLowerCase();
        let y = b.title.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
    });

    flipArrowDown();
    displayMedia(sortedTitles);
};

//Sort by Date
export const sortByDate = async () => {
    clearGallery();
    const mediaAssets = await mainMedia();
    const sortedDates= mediaAssets.sort(function(a, b) {
        return new Date(b.date) - new Date(a.date);
    });

    flipArrowDown();
    displayMedia(sortedDates);
};
