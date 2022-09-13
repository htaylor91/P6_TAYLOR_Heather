
const getPhotographers = async () => {
    //Function to fetch data from the json
    const response = await fetch("data/photographers.json");
    //Wait for the promise to resolve
    const photographers = await response.json();
    return photographers;
    //Return an object containing the 2 arrays from the .json - photographers[] and media[]
};

export default getPhotographers;