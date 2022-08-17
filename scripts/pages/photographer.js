//Mettre le code JavaScript lié à la page photographer.html
//https://developer.mozilla.org/en-US/docs/Web/API/Location/search
//https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams

let params = (new URL(document.location)).searchParams;

let id = parseInt(params.get('id')); // parse the photographer id from the URL

//let name = params.get('name'); 

async function getPhotographers() {
    // Fetch data from the json
    const response = await fetch('data/photographers.json');
    const photographers = await response.json();
    // return the array of photographers
    return photographers;
};

console.log(getPhotographers()); //returns the two arrays, photographers & media

async function getPhotographerById() {
    getPhotographers()
    .then(allResults => {
        for (result of allResults.photographers) {
            if (result.id === id) {
                console.log(result.id);
                console.log(result.name);
                console.log(result.city);
                console.log(result.country);
                console.log(result.price);
                console.log(result.tagline);
                console.log(result.portrait);
                console.log(result);
            }
        }
    });
}

console.log(getPhotographerById());