
import {body} from "./displayContactForm.js";
import addGlobalEventListener from "./globalEvent.js";

const lightboxDialog = document.getElementById("lightboxModal");
const lightboxFrameMedia = document.getElementById("lightboxFrame__media");
const lightboxFrameTitle = document.getElementById("lightboxFrame__text");

const closeLightboxBtn = document.getElementById("closeLightbox");
const next = document.getElementById("next");
const previous = document.getElementById("previous");


//const gallerySection = document.getElementById("gallerySection");
//const mediaArticles = gallerySection.children; 
//console.log(mediaArticles); //HTML Collection containing all articles
//const mediaArticlesButtons = document.getElementsByClassName("mediaContainer");
//console.log(mediaArticlesButtons); //HTML Collection containing all media article buttons

const mediaAssets = document.getElementsByClassName("mediaAsset");
//console.log(mediaAssets); //HTML Collection containing all img and video tags

//Remove the <img> or <video> from its parent <div> lightboxFrameMedia
//Remove the text from the parent <h3> lightboxFrameTitle
//https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild
const clearLightbox = () => {
    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    removeAllChildNodes(lightboxFrameMedia);
    removeAllChildNodes(lightboxFrameTitle);
};

//Add a click event listener to all buttons with the class .mediaContainer
//Add the callback identifyMedia(event) to find the id of the button's child element
//Add the callback displayLightboxContent(event) to call the primary lightbox function
addGlobalEventListener("click", ".mediaContainer", (event) => {
    identifyMedia(event);
    displayLightboxContent(event);
});

//https://developer.mozilla.org/en-US/docs/Web/API/Event/target
//implement event delegation 
// evt.target.firstChild refers to the clicked .mediaAsset element
function identifyMedia(event) {
    let identity = event.target.firstChild.id;
    console.log(identity);
    return identity;
}

//Display lightbox content by clicking on a button with the class .mediaContainer
//All video and image elements in the gallery are children of a button with this class
const displayLightboxContent = (event) => {
    displayLightbox();
    let mediaIdentity = identifyMedia(event);
    //Locate(element) is the callback function to be used with the findIndex() method.
    //Returns a truthy value to indicate an element with an id equal to its own has been found.
    //As long as the selected element's id is equal to its own id, 
    ///the index of the element will be returned by the function findIndex(locate).
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
    function locate(element) {
        // eslint-disable-next-line no-undef
        return (element.id == mediaIdentity);
    }

    //Make a shallow-copied array from the HTML Collection "mediaAssets"
    ///in order to be able to iterate through "mediaAssets".
    //Store the shallow-copied array in the variable "mediaAssetsArray" for code readability.
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
    let mediaAssetsArray = Array.from(mediaAssets);

    //Call the callback function locate(element) to get the index of the selected media object 
    //The element's index will be returned once the value of the function locate(element) is truthy,
    ///that is once the selected element's id is equal to its own id.
    //Set the selected media object's index as the value of the variable "currentIndex"
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
    let currentIndex = mediaAssetsArray.findIndex(locate);
    console.log(currentIndex);

    //For each selected element that has an index equal to "currentIndex"
    //Clone the selected element and append the clone into the lightbox
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    function getLightboxContent() {
        mediaAssetsArray.forEach((element, index) => { 
            if (index === currentIndex){
                console.log(element, index);
      
                let lightboxMedia = element;
                //let lightboxMediaIndex = index;

                //Clone the selected element lightboxMedia
                //Set the parameter "deep" to "true"
                //The cloneNode(true) method copies the node and its subtree
                //The <source> tags inside of the <video> tags will be cloned
                //https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode
                let lightboxMediaClone = lightboxMedia.cloneNode(true);

                //console.log(lightboxMedia.cloneNode(true));
                //console.dir(lightboxMedia.cloneNode());

                lightboxMediaClone.classList.replace("mediaContainer__image", "lightboxFrame__media__asset");
                lightboxMediaClone.classList.replace("mediaContainer__video", "lightboxFrame__media__asset");

                let lightboxMediaCloneBaseIdentity = (lightboxMediaClone.id);

                //Modify the id attributes of the cloned elements using the orginal id plus BEM style nomenclature
                ///to retain a connection between the element's source and avoid repeated ids in the document
                let lightboxMediaCloneNewIdentity = (lightboxMediaCloneBaseIdentity + "--lightbox");

                lightboxMediaClone.setAttribute("id", lightboxMediaCloneNewIdentity);

                //Set the title of the lightbox media element to its data-title attribute
                let lightboxMediaCloneTitle = lightboxMediaClone.dataset.title;
      
                console.log(lightboxMediaClone);
                console.log(lightboxMediaCloneTitle);

                //Append the cloned element and its title into their parent containers
                lightboxFrameMedia.append(lightboxMediaClone);
                lightboxFrameTitle.append(lightboxMediaCloneTitle);
            }
        });
    }

    //Call getLightboxContent() to insert the cloned media into the lightbox
    getLightboxContent();

    //When the next arrow is clicked,
    ///Increase the currentIndex by 1 until the end of the mediaAssetsArray
    //Clear the lightbox content
    //Call getLightboxContent() to fill the lightbox with the content of 
    ///the element that has an index equal to the new currentIndex
    //At the end of the mediaAssetsArray, the currentIndex is equal to itself
    function nextMediaAsset() {
        console.log("next was clicked");
        if (currentIndex < mediaAssetsArray.length - 1) {
            currentIndex = (currentIndex + 1);
            clearLightbox();
        }else {
            // eslint-disable-next-line no-self-assign
            currentIndex = currentIndex;
            clearLightbox();
        }
        getLightboxContent();
    }

    //When the previous arrow is clicked, 
    ///Decrease the currentIndex by 1 until the beginning of the mediaAssetsArray
    //Clear the lightbox content
    //Call getLightboxContent() to fill the lightbox with the content of 
    ///the element that has an index equal to the new currentIndex
    //At the beginning of the mediaAssetsArray, the currentIndex is equal to itself
    function previousMediaAsset() {
        console.log("previous was clicked");
        if (currentIndex <= 0) {
            // eslint-disable-next-line no-self-assign
            currentIndex = currentIndex;
            clearLightbox();
        }else {
            currentIndex = (currentIndex - 1);
            clearLightbox();
        }
        getLightboxContent();
    }

    next.addEventListener("click", nextMediaAsset);
    previous.addEventListener("click", previousMediaAsset);
};

//Display the lightbox modal
function displayLightbox() {
    lightboxDialog.showModal();
    body.setAttribute("class", "noScroll");
}

//Close the lightbox modal
//Call clearLightbox() to reset the modal's contents
function closeLightbox() {
    lightboxDialog.close();
    clearLightbox();
    body.removeAttribute("class", "noScroll");
}

//Close the lightbox modal when the close button is clicked
closeLightboxBtn.addEventListener("click", closeLightbox);
