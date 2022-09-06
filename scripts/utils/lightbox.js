

//  https://codepen.io/nicolaspatschkowski/pen/wvKxrov

//const body = document.getElementById('body');
const displayLightboxBtn = document.querySelector('.articleMedia__anchor');
//console.log(displayLightboxBtn); //null
//const mainSection = document.getElementById('mainSection');
const lightboxDialog = document.getElementById('lightbox');
const lightboxFrame = document.getElementById("lightboxFrame");
const lightboxTitle = document.getElementById('lightboxTitle');
const closeLightboxBtn = document.getElementById('closeLightbox');


function displayLightbox(element) {
    //console.dir(element.target);
    lightboxFrame.src = element.target.src;
    lightboxFrame.alt = element.target.alt;
    lightboxFrame.ariaLabel = element.target.ariaLabel;
    //console.log(lightboxFrame.src);
    lightboxDialog.style.display = "block";
    lightboxDialog.setAttribute("aria-hidden", 'false');
    mainSection.setAttribute("aria-hidden", 'true');
    mainSection.setAttribute("tab-index", '-1');
    body.setAttribute("class", 'noScroll');

    let lightboxImageSource = lightboxFrame.src;
    let lightboxVideoSource = lightboxFrame.src;
    let lightboxMediaTitle = lightboxFrame.ariaLabel;
    console.log(lightboxMediaTitle);

    function displayLightboxMedia() {
        let lightboxImage = `<img class="lightboxFrame__image" alt="${lightboxMediaTitle}" aria-label="${lightboxMediaTitle}" src="${lightboxImageSource}"/>`;
        let lightboxVideo = `<video controls class="lightboxFrame__video" aria-label="${lightboxMediaTitle}"><source src="${lightboxVideoSource}" type="video/mp4"></video>`;
        let lightboxMedia = (element.target.classList[0] == "mediaContainer__video") ? lightboxVideo : lightboxImage;

        //console.dir(element.target.classList[0]);
        //console.log(lightboxMediaTitle);

        lightboxFrame.innerHTML = `${lightboxMedia}<div class="lightboxFrame__text"><h3>${lightboxMediaTitle}</h3></div>`;
    }

    displayLightboxMedia();
    closeLightboxBtn.focus();

   
}

function closeLightbox() {
    lightboxDialog.style.display = "none";
    lightboxDialog.setAttribute("aria-hidden", 'true');
    mainSection.setAttribute("aria-hidden", "false");
    body.removeAttribute("class", 'noScroll');
    //const displayLightboxBtn = document.getElementById('displayLightboxBtn');
    //displayLightboxBtn.focus();
}


//displayLightboxBtn.addEventListener('click', displayLightbox);

 // Close modal when escape key is pressed
document.addEventListener('keydown', function(event){
	if(event.key === "Escape"){
        closeLightbox();
	}
});

closeLightboxBtn.addEventListener("click", closeLightbox);