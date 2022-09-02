//The Javascript code linked to the photographer.html pages

//"The searchParams readonly property of the URL interface returns a 
//URLSearchParams object allowing access to the GET decoded query arguments contained in the URL."
//https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams

let params = (new URL(document.location)).searchParams;
let identity = parseInt(params.get('id')); //Parse the photographer's id from the URL

async function getPhotographers() {
    //Function to fetch data from the json
    const response = await fetch('data/photographers.json');
     //Wait for the promise to resolve
    const photographers = await response.json();
    return photographers
    //Return an object containing the 2 arrays from the .json - photographers[] and media[]
};

async function displayData(photographer) {
    //Function to display the specific photographer's personal data in their page banner
    const photographBanner = document.querySelector(".photographBanner");
        const photographerModel = photographerFactory(photographer);
        //photographerModel is the photographer data... 
        //...and factory functions getUserCardDOM() and getPageDOM()
        const pageDOM = photographerModel.getPageDOM();
        //pageDOM is the <article> in the banner of photographer.html
        photographBanner.appendChild(pageDOM);
};

async function displayMedia(mediaAssets) {
    //Function to display the specific photographer's media in their gallery section
    const gallerySection = document.querySelector(".gallerySection");
    mediaAssets.forEach((asset) => {
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
        //mediaAssets is the array of the unique photographer's media (from the json media array )
        //asset is each media object in the mediaAssets array
        const mediaModel = mediaFactory(asset);
        //mediaModel is the object returned by the function mediaFactory() in media.js
        const mediaDOM = mediaModel.getMediaDOM();
        //mediaDOM is the <article> elements displayed in the .gallerySection of photographer.html
        gallerySection.appendChild(mediaDOM);
    });
};

async function customLikes(photographer) {
    const photographerFooterLikes = document.querySelector(".photographerFooter__likes");
    const photographerModel = photographerFactory(photographer);
    const likesDOM = photographerModel.getLikesDOM();
    photographerFooterLikes.appendChild(likesDOM);
};
    
async function customModal(photographer) {
    //Function to display the specific photographer's name in their contact form
    const modalHeaderText = document.querySelector(".modal__header__text");
    const photographerModel = photographerFactory(photographer);
    const modalDOM = photographerModel.getModalDOM();
    modalHeaderText.appendChild(modalDOM);
}

async function footer(totalLikes) {
    const photographerFooterLikes = document.querySelector(".photographerFooter__likes");
    const photographerFooterLikesTotal = document.createElement ('p');
    photographerFooterLikesTotal.setAttribute('id', 'totalLikes');
    photographerFooterLikesTotal.textContent = totalLikes;
    photographerFooterLikes.appendChild(photographerFooterLikesTotal);
    return totalLikes;
}

async function main() {
    //Main function to retrieve and display the data for the unique photographer.html page
    const {photographers, media} = await getPhotographers();
    //{photographers, media} is an object containing the arrays photographers[] and media[] from the .json 
    let photographer = photographers.find(photographer => photographer.id === identity);
    //find() the first photographer with an id matching the identity / the current URL
    displayData(photographer);
    //Call the function to display this specific photographer's personal data

    let mediaAssets = media.filter(media => media.photographerId === identity);
    //media is the array of every photographers' media assets
    //mediaAssets is the array of this specfic photographer's media assets
   
    displayMedia(mediaAssets); 
    //Call the function to display this specific photographer's media assets
    
    customModal(photographer);
    //Call the function to display this specific photographer's name in the contact form

    //Add each photographer's total number of liked media assets to the footer
    const photographerMediaAssets = mediaAssets;
    let totalLikes = photographerMediaAssets.reduce(function(total, mediaAssets) {
        return total + mediaAssets.likes;
    }, 0);

    footer(totalLikes);

};

main();
