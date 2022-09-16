//Function to fetch data from the json
//Wait for the promise to resolve
//Return an object containing the 2 arrays from the .json - photographers[] and media[]
const getPhotographers = async () => {
    const response = await fetch("data/photographers.json");
    const photographers = await response.json();

    return photographers;
};

export default getPhotographers;