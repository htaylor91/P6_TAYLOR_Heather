//The Javascript code linked to the photographer.html pages
import getPhotographers from "../helpers/getPhotographers.js";
import photographerFactory from "../factories/photographer.js";
import mediaFactory from "../factories/media.js";

//"The searchParams readonly property of the URL interface returns a 
//URLSearchParams object allowing access to the GET decoded query arguments contained in the URL."
//https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams

let params = (new URL(document.location)).searchParams;
let identity = parseInt(params.get("id")); //Parse the photographer's id from the URL

//Call getPhotographers to obtain the json data
getPhotographers;

//Function to display the specific photographer's personal data in their page banner
//photographerModel is the photographer data... 
//...and factory functions getUserCardDOM() and getPageDOM()
//pageDOM is the <article> in the banner of photographer.html
const displayData = async (photographer) => { 
    const photographBanner = document.querySelector(".photographBanner");
    const photographerModel = photographerFactory(photographer);
    const pageDOM = photographerModel.getPageDOM();
    
    photographBanner.appendChild(pageDOM);
};

//Function to display the specific photographer's media in their gallery section
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
//mediaAssets is the array of the unique photographer's media (from the json media array )
//asset is each media object in the mediaAssets array
//mediaModel is the object returned by the function mediaFactory() in media.js
//mediaDOM is the <article> elements displayed in the .gallerySection of photographer.html

export const displayMedia = async (mediaAssets) => {
    const gallerySection = document.querySelector(".gallerySection");
    mediaAssets.forEach((asset) => {
        const mediaModel = mediaFactory(asset);
        const mediaDOM = mediaModel.getMediaDOM();
        
        gallerySection.appendChild(mediaDOM);
    });
};

//Function to display the specific photographer's name in their contact form
const customModal = async (photographer) => {
    const modalHeaderText = document.getElementById("modalHeader");
    const photographerModel = photographerFactory(photographer);
    const modalDOM = photographerModel.getModalDOM();

    modalHeaderText.append(modalDOM);
};

const footer = async (totalLikes) => {
    const photographerFooterLikes = document.querySelector(".photographerFooter__likes");
    const photographerFooterLikesTotal = document.createElement ("p");
    const photographerFooterLikesLabel = document.createElement ("p");

    photographerFooterLikesTotal.setAttribute("id", "totalLikes");
    photographerFooterLikesTotal.textContent = totalLikes;

    photographerFooterLikesLabel.setAttribute("id", "totalLikesLabel");
    photographerFooterLikesLabel.setAttribute("class", "hidden");
    photographerFooterLikesLabel.textContent = "likes";

    photographerFooterLikes.append(photographerFooterLikesTotal, photographerFooterLikesLabel);

    return totalLikes;
};

export const mainMedia = async () => {
    const {media} = await getPhotographers();

    let mediaAssets = media.filter(media => media.photographerId === identity);
    
    return mediaAssets;
};

//Main function to retrieve and display the data for the unique photographer.html page
//{photographers, media} is an object containing the arrays photographers[] and media[] from the .json 
//find() the first photographer with an id matching the identity / the current URL
//Call the function to display this specific photographer's personal data
//media is the array of every photographers' media assets
//mediaAssets is the array of this specfic photographer's media assets
//Call the function to display this specific photographer's media assets with displayMedia(mediaAssets)
//Call the function to display this specific photographer's name in the contact form with customModal(photographer) 
//Add each photographer's total number of liked media assets to the footer with footer(totalLikes)
const main = async () => {
    const {photographers, media} = await getPhotographers();
    
    let photographer = photographers.find(photographer => photographer.id === identity);
    
    displayData(photographer);
    
    let mediaAssets = media.filter(media => media.photographerId === identity);
   
    //console.log(mediaAssets); //array of media assets on page load, before filtering media
    displayMedia(mediaAssets);
    customModal(photographer);
    
    const photographerMediaAssets = mediaAssets;
    let totalLikes = photographerMediaAssets.reduce(function(total, mediaAssets) {
        return total + mediaAssets.likes;
    }, 0);

    footer(totalLikes);
};

main();
