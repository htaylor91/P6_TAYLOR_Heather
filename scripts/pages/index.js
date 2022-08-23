async function getPhotographers() {
    //Function to fetch data from the json
    const response = await fetch('data/photographers.json');
     //Wait for the promise to resolve
    const photographers = await response.json();
    return photographers
    //Return an object containing the 2 arrays from the .json - photographers[] and media[]
};

async function displayData(photographers) {
    ////Function to display all photographers
    const photographersSection = document.querySelector(".photographer_section");
    photographers.forEach((photographer) => {
        //for each photographer in the .json array photographers[] ...
        const photographerModel = photographerFactory(photographer);
        //photographerModel is all 6 photographers as objects
        const userCardDOM = photographerModel.getUserCardDOM();
        //userCardDOM is the 6 HTML <article> elements
        photographersSection.appendChild(userCardDOM);
    });
};


async function init() {
    //Function to retrieve and display the photographer data for the index.html page
    const {photographers} = await getPhotographers();
    //{photographers} is an object containing the array photographers[] from the .json 
    displayData(photographers);
    //Call the function to display all photographers' data
};

init();