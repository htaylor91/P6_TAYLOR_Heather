
import getPhotographers from "../helpers/getPhotographers.js";
import photographerFactory from "../factories/photographer.js";

getPhotographers;

async function displayData(photographers) {
    ////Function to display all photographers
    const photographersSection = document.querySelector(".photographerSection");
    photographers.forEach((photographer) => {
        //for each photographer in the .json array photographers[] ...
        const photographerModel = photographerFactory(photographer);
        //photographerModel is all 6 photographers as objects
        const userCardDOM = photographerModel.getUserCardDOM();
        //userCardDOM is the 6 HTML <article> elements
        photographersSection.appendChild(userCardDOM);
    });
}

async function main() {
    //Main function to retrieve and display the photographer data for the index.html page
    const {photographers} = await getPhotographers();
    //{photographers} is an object containing the array photographers[] from the .json 
    displayData(photographers);
    //Call the function to display all photographers' data
}

main();