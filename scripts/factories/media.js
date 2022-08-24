function mediaFactory(data) {
    const { id, photographerId, title, image, video, likes, date, price } = data;
   
    const galleryImage = `assets/images/${photographerId}/${image}`;
    const galleryVideo = `assets/images/${photographerId}/${video}`;
    const galleryAlt = `${title}`;

    const heartIcon = `assets/icons/heart.svg`;

    function getMediaDOM() {
        
        const article = document.createElement( 'article' );

        const anchor = document.createElement( 'a' );
        anchor.setAttribute("href", `./photographer.html?id=${photographerId}/${id}`);

        const mediaContainer = document.createElement( 'div' );
        mediaContainer.setAttribute("class", 'mediaContainer');

        article.appendChild(anchor);
        anchor.appendChild(mediaContainer);

        function createImage() {
            const img = document.createElement( 'img' );
            img.setAttribute("src", galleryImage);
            img.setAttribute("alt", galleryAlt);
            img.setAttribute("class", 'mediaContainer__image');

            mediaContainer.appendChild(img);
        };

        function createVideo() {
            const video = document.createElement( 'video' );
            video.setAttribute("alt", galleryAlt);
            video.setAttribute("class", 'mediaContainer__video');
            video.setAttribute("controls", 'controls');
            video.setAttribute("preload", "metadata");

            const source = document.createElement('source');
            source.setAttribute("src", galleryVideo + '#t=0.1');
            source.setAttribute("type", 'video/mp4');

            mediaContainer.appendChild(video);
            video.appendChild(source);
        };

        //need to update this to display video assets correctly
        if (galleryImage == undefined) {
            createVideo();
        } else {
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

        const mediaLikesButton = document.createElement('img');
        mediaLikesButton.setAttribute("src", heartIcon);
        mediaLikesButton.setAttribute("alt", 'likes');
        mediaLikesButton.setAttribute("class", 'infoContainer__likesContainer__button');
        
        article.appendChild(infoContainer);
        infoContainer.appendChild(mediaTextContainer);
        infoContainer.appendChild(mediaLikesContainer);

        mediaTextContainer.appendChild(mediaTitle);
        mediaTextContainer.appendChild(mediaDate);

        mediaLikesContainer.appendChild(mediaLikes);
        mediaLikesContainer.appendChild(mediaLikesButton);
    
        return (article);
    }

    return { 
       price, getMediaDOM
    }
}