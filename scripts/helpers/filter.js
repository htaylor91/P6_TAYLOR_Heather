
import {displayMedia, mainMedia} from "../pages/photographer.js";

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
export const sortByLikes = async () => {
    clearGallery();
    const mediaAssets = await mainMedia();
    const sortedLikes = mediaAssets.sort(function (a, b) {
        return b.likes - a.likes;
    });
    
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

    displayMedia(sortedTitles);
};

//Sort by Date
export const sortByDate = async () => {
    clearGallery();
    const mediaAssets = await mainMedia();
    const sortedDates= mediaAssets.sort(function(a, b) {
        return new Date(b.date) - new Date(a.date);
    });

    console.table(sortedDates);
    displayMedia(sortedDates);
};
