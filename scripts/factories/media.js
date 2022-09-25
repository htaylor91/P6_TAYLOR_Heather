
const mediaFactory = asset => {
  
    const { id, photographerId, title, image, video, likes, date, price } = asset;
    
    const galleryImage = `assets/media/${photographerId}/avif/${image}.avif`;
    const galleryVideo = `assets/media/${photographerId}/videos/${video}`;
    const galleryVideoTranscript = `assets/media/${photographerId}/videos/${id}.vtt`;
    const galleryAlt = `${title}`;
    const galleryHeadingIdentifier = `${id}--label`;
    // eslint-disable-next-line quotes
    const transcriptIcon = `assets/icons/file-lines.svg`;

    //eslint-disable-next-line quotes
    const heartIcon = `assets/icons/heart.svg`;

    function getMediaDOM() {
        
        const article = document.createElement( "article" );
        article.setAttribute("class", "mediaArticle");

        const mediaAssetButton = document.createElement( "button" );
        mediaAssetButton.setAttribute("class", "mediaContainer button");
        mediaAssetButton.setAttribute("aria-label", title); ///
        mediaAssetButton.setAttribute("type", "button");

        article.append(mediaAssetButton);

        const infoContainer = document.createElement( "div" );
        infoContainer.setAttribute("class", "infoContainer");

        const mediaTextContainer = document.createElement("div");
        mediaTextContainer.setAttribute("class", "infoContainer__textContainer");

        const mediaTitle = document.createElement( "h2" );
        mediaTitle.textContent = title;
        mediaTitle.setAttribute("class", "infoContainer__textContainer__title");
        mediaTitle.setAttribute("lang", "en");
        mediaTitle.setAttribute("translate", "yes");
        mediaTitle.setAttribute("id", galleryHeadingIdentifier);
        mediaTitle.setAttribute("aria-hidden", "true"); ///

        const mediaLikesContainer = document.createElement("div");
        mediaLikesContainer.setAttribute("class", "infoContainer__likesContainer");

        const mediaLikes = document.createElement("p");
        mediaLikes.textContent = likes;
        mediaLikes.setAttribute("class", "infoContainer__likesContainer__likes");
        
        const mediaLikesLabel = document.createElement("p");
        mediaLikesLabel.setAttribute("class", "hidden");
        mediaLikesLabel.textContent = "likes";

        const mediaLikesButton = document.createElement("button");
        mediaLikesButton.setAttribute("class", "infoContainer__likesContainer__button button button--like");
        mediaLikesButton.setAttribute("type", "button");
        mediaLikesButton.setAttribute("aria-label", "ajouter un like");

        const mediaLikesButtonImage = document.createElement("img");
        mediaLikesButtonImage.setAttribute("src", heartIcon);
        mediaLikesButtonImage.setAttribute("alt", "");
        mediaLikesButtonImage.setAttribute("class", "infoContainer__likesContainer__button__image");
        mediaLikesButtonImage.setAttribute("height", "18.35");
        mediaLikesButtonImage.setAttribute("width", "17.5");
        mediaLikesButtonImage.setAttribute("aria-hidden", true);

        article.append(infoContainer);

        const mediaDescriptionButtonContainer = document.createElement("div");
        mediaDescriptionButtonContainer.setAttribute("class", "infoContainer__descriptionContainer hidden");
        mediaDescriptionButtonContainer.setAttribute("aria-hidden", true);

        const mediaDescriptionButton = document.createElement("button");
        mediaDescriptionButton.setAttribute("class", "button descriptionButton infoContainer__descriptionContainer__button");
        mediaDescriptionButton.setAttribute("type", "button");
        mediaDescriptionButton.setAttribute("aria-label", "ouvrir la description de la vidéo");
        mediaDescriptionButton.setAttribute("disabled", "");
        mediaDescriptionButton.setAttribute("aria-hidden", true);

        const mediaDescriptionButtonImage = document.createElement("img");
        mediaDescriptionButtonImage.setAttribute("src", transcriptIcon);
        mediaDescriptionButtonImage.setAttribute("alt", "");
        mediaDescriptionButtonImage.setAttribute("class", "infoContainer__descriptionContainer__button__image");
        mediaDescriptionButtonImage.setAttribute("height", "18.35");
        mediaDescriptionButtonImage.setAttribute("width", "17.5");
        mediaDescriptionButtonImage.setAttribute("aria-hidden", true);

        mediaDescriptionButtonContainer.append(mediaDescriptionButton);
        mediaDescriptionButton.appendChild(mediaDescriptionButtonImage);

        const descriptionDialog = document.getElementById("descriptionDialog");
        function displayDescriptionModal() {
            descriptionDialog.showModal();
        }

        function createImage() {
            const img = document.createElement( "img" );
            img.setAttribute("src", galleryImage);
            img.setAttribute("class", "mediaContainer__image mediaAsset");
            img.setAttribute("alt", "");
            img.setAttribute("data-title", galleryAlt);
            img.setAttribute("id", id);
            img.setAttribute("height", img.height);
            img.setAttribute("width", img.width);
            
            mediaAssetButton.appendChild(img);
            article.classList.add("imageArticle");

            infoContainer.append(mediaTextContainer, mediaLikesContainer);
        }

        function createVideo() {
            const video = document.createElement( "video" );
            video.setAttribute("src", galleryVideo + "#t=0.01");
            video.setAttribute("class", "mediaContainer__video mediaAsset");
            video.setAttribute("preload", "metadata");
            video.setAttribute("aria-labelledby", galleryHeadingIdentifier);
            video.setAttribute("data-title", galleryAlt);
            video.setAttribute("id", id);
            video.setAttribute("muted", "muted");

            const source = document.createElement("source");
            source.setAttribute("src", galleryVideo + "#t=0.01");
            source.setAttribute("alt", galleryAlt);
            source.setAttribute("type", "video/mp4");

            const track = document.createElement("track");
            track.setAttribute("kind", "descriptions");
            track.setAttribute("src", galleryVideoTranscript);
            track.setAttribute("srclang", "en");
            track.setAttribute("label", galleryAlt);

            const embed = document.getElementById("descriptionEmbed");
            embed.setAttribute("src", galleryVideoTranscript);

            mediaAssetButton.append(video);
            video.append(source, track);

            article.classList.add("videoArticle");
            mediaAssetButton.classList.add("videoButton");

            infoContainer.append(mediaTextContainer, mediaDescriptionButtonContainer, mediaLikesContainer);
            mediaDescriptionButton.addEventListener("click", displayDescriptionModal);
        }

        if (galleryVideo !== `assets/media/${photographerId}/videos/undefined`) {
            createVideo();
        }
        
        if (galleryImage !== `assets/media/${photographerId}/avif/undefined.avif`) {
            createImage(); 
        } 

        
        mediaTextContainer.append(mediaTitle);

        mediaLikesContainer.append(mediaLikes, mediaLikesLabel, mediaLikesButton);
        mediaLikesButton.appendChild(mediaLikesButtonImage);

        //Add up to 1 like per media asset with a click event
        function addLike() {
            let likesCount = likes;
            likesCount++;
            mediaLikes.innerText = likesCount;
            return likesCount;
        }

        mediaLikesButton.addEventListener("click", addLike);
        
        //Add new likes to likes total in the footer
        function addLikeToTotal() {
            const photographerFooterLikes = document.getElementById("totalLikes");
            let totalLikesCount = photographerFooterLikes.innerText;
            totalLikesCount++;
            photographerFooterLikes.innerText = totalLikesCount;
            mediaLikesButton.removeEventListener("click", addLikeToTotal);
            return totalLikesCount;
        }

        mediaLikesButton.addEventListener("click", addLikeToTotal);

        return (article);
    }

    return { 
        id, title, date, price, likes, getMediaDOM
    };

};

export default mediaFactory;

