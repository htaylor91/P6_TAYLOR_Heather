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
    //Function to display the unique photographer's personal data in their page banner
    const photographBanner = document.querySelector(".photographBanner");
        const photographerModel = photographerFactory(photographer);
        //photographerModel is the photographer data... 
        //...and factory functions getUserCardDOM() and getPageDOM()
        const pageDOM = photographerModel.getPageDOM();
        console.log(pageDOM);
        //pageDOM is the <article> in the banner of photographer.html
        photographBanner.appendChild(pageDOM);
};

async function main() {
    //Main function to retrieve and display the data for the unique photographer.html page
    const {photographers, media} = await getPhotographers();
    //{photographers, media} is an object containing the arrays photographers[] and media[] from the .json 
    let photographer = photographers.find(photographer => photographer.id === identity);
    //find() the first photographer with an id matching the identity / the current URL
    displayData(photographer);
    //Call the function to display this specific photographer's personal data

};

main();
