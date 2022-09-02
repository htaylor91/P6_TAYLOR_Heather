function mediaFactory(data) {
    const { id, photographerId, title, image, video, likes, date, price } = data;
   
    const galleryImage = `assets/images/${photographerId}/${image}`;
    const galleryVideo = `assets/images/${photographerId}/${video}`;
    const galleryAlt = `${title}`;
    const mediaIdentifier = `${id}`;

    const heartIcon = `assets/icons/heart.svg`;

    function getMediaDOM() {
        
        const article = document.createElement( 'article' );
        article.setAttribute("class", 'articleMedia');

        const anchor = document.createElement( 'a' );
        //anchor.setAttribute("href", `./photographer.html?id=${photographerId}/${id}`);
        anchor.setAttribute("class", 'articleMedia__anchor');
        anchor.setAttribute("target", '_parent');

        anchor.addEventListener("click", displayLightbox);

        function createImage() {
            const img = document.createElement( 'img' );
            img.setAttribute("src", galleryImage);
            img.setAttribute("alt", galleryAlt);
            img.setAttribute("class", 'mediaContainer__image');
            img.setAttribute("id", mediaIdentifier);
            anchor.appendChild(img);
        };

        function createVideo() {
            const video = document.createElement( 'video' );
            video.setAttribute("alt", galleryAlt);
            video.setAttribute("class", 'mediaContainer__video');
            video.setAttribute("controls", 'controls');
            video.setAttribute("preload", "metadata");
            video.setAttribute("aria-label", galleryAlt);
            video.setAttribute("id", mediaIdentifier);

            const source = document.createElement('source');
            source.setAttribute("src", galleryVideo + '#t=0.01');
            source.setAttribute("type", 'video/mp4');

            anchor.appendChild(video);
            video.appendChild(source);
        };

        if (galleryVideo !== `assets/images/${photographerId}/undefined`) {
            createVideo();
        };
        
        if (galleryImage !== `assets/images/${photographerId}/undefined`) {
            createImage(); 
        }; 

        const infoContainer = document.createElement( 'div' );
        infoContainer.setAttribute("class", 'infoContainer');

        const mediaTextContainer = document.createElement('div');
        mediaTextContainer.setAttribute("class", 'infoContainer__textContainer');

        const mediaTitle = document.createElement( 'h2' );
        mediaTitle.textContent = title;
        mediaTitle.setAttribute("class", 'infoContainer__textContainer__title');

        const mediaDate = document.createElement('p');
        mediaDate.textContent = date;
        mediaDate.setAttribute("class", 'infoContainer__textContainer__date');

        const mediaLikesContainer = document.createElement('div');
        mediaLikesContainer.setAttribute("class", 'infoContainer__likesContainer');

        const mediaLikes = document.createElement('div');
        mediaLikes.textContent = likes;
        mediaLikes.setAttribute("class", 'infoContainer__likesContainer__likes');

        const mediaLikesButton = document.createElement('button');
        mediaLikesButton.setAttribute("class", 'infoContainer__likesContainer__button button button--like');
        mediaLikesButton.setAttribute("type", 'button');

        const mediaLikesButtonImage = document.createElement('img');
        mediaLikesButtonImage.setAttribute("src", heartIcon);
        mediaLikesButtonImage.setAttribute("alt", 'likes');
        mediaLikesButtonImage.setAttribute("class", 'infoContainer__likesContainer__button__image');

        article.append(anchor, infoContainer);

        
        infoContainer.append(mediaTextContainer, mediaLikesContainer);

        mediaTextContainer.append(mediaTitle, mediaDate);

        mediaLikesContainer.append(mediaLikes, mediaLikesButton);

        mediaLikesButton.appendChild(mediaLikesButtonImage);

        //Add up to 1 like per media asset with a click event
       
        function addLike() {
            let likesCount = likes;
            likesCount++;
            mediaLikes.innerText = likesCount;
            return likesCount;
        };

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

        anchor.addEventListener("click", displayLightbox);
        return (article);
    }

    return { 
       id, price, likes, getMediaDOM
    }
}