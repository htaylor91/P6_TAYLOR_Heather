

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
    //need to consider videos
    lightboxFrame.src = element.target.src;
    console.log(lightboxFrame);
    lightboxDialog.style.display = "block";
    lightboxDialog.setAttribute("aria-hidden", 'false');
    mainSection.setAttribute("aria-hidden", 'true');
    mainSection.setAttribute("tab-index", '-1');
    body.setAttribute("class", 'noScroll');
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