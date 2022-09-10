function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait} = data;

    const profilePicture = `assets/images/photographers/${portrait}`;
    const profileAlt = `Portrait de ${name}`;
    const heartIcon = `assets/icons/heart.svg`;
    const profileName = `${name}`;

    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    //https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings#concatenation_using_

    function getUserCardDOM() {
        
        const article = document.createElement( 'article' );

        const anchor = document.createElement( 'a' );
        anchor.setAttribute("href", `./photographer.html?id=${id}`);

        const img = document.createElement( 'img' );
        img.setAttribute("src", profilePicture);
        img.setAttribute("alt", profileAlt);
        img.setAttribute("class", 'img--profile');

        const photographerName = document.createElement( 'h2' );
        photographerName.textContent = name;
        photographerName.setAttribute("class", 'photographerName photographerName--homepage');
        photographerName.setAttribute("translate", 'no');

        const textContainer = document.createElement( 'div' );
        textContainer.setAttribute("class", 'textContainer--homepage');

        const photographerLocation = document.createElement( 'p' );
        photographerLocation.textContent = `${city}, ${country}`;
        photographerLocation.setAttribute("class", 'photographerLocation photographerLocation--homepage');
        
    
        const photographerTagline = document.createElement( 'p' );
        photographerTagline.textContent = tagline;
        photographerTagline.setAttribute("class", 'photographerTagline photographerTagline--homepage');
        photographerTagline.setAttribute("lang", 'fr');

        const photographerPrice = document.createElement( 'p' );
        photographerPrice.textContent = `${price}€/jour`;
        photographerPrice.setAttribute("class", 'photographerPrice photographerPrice--homepage');
        photographerPrice.setAttribute("lang", 'fr');

        article.append(anchor, textContainer);

        //anchor.append(imgContainer, photographerName);
        anchor.append(img, photographerName);
        
        //imgContainer.append(img);

        textContainer.append(photographerLocation, photographerTagline, photographerPrice);

        return (article);
    }

    function getPageDOM() {

        const article = document.createElement( 'article' );
        article.setAttribute("class", 'photographBanner__article');

        const photographerName = document.createElement( 'h1' );
        photographerName.textContent = name;
        photographerName.setAttribute("class", 'photographerName photographerName--profile');
        photographerName.setAttribute("translate", 'no');

        const textContainer = document.createElement( 'div' );
        textContainer.setAttribute("class", 'textContainer--profile');

        const photographerLocation = document.createElement( 'p' );
        photographerLocation.textContent = `${city}, ${country}`;
        photographerLocation.setAttribute("class", 'photographerLocation photographerLocation--profile');

        const photographerTagline = document.createElement( 'p' );
        photographerTagline.textContent = tagline;
        photographerTagline.setAttribute("class", 'photographerTagline photographerTagline--profile');
        photographerTagline.setAttribute("lang", 'fr');
        
        const contactButton = document.createElement( 'button' );
        contactButton.setAttribute("class", 'button button--form button--form--contact');
        contactButton.setAttribute("id", 'displayModal');
        contactButton.textContent = `Contactez-moi`;
        contactButton.setAttribute("lang", 'fr');
        contactButton.addEventListener("click", displayModal);
        
        const img = document.createElement( 'img' );
        img.setAttribute("src", profilePicture);
        img.setAttribute("alt", profileAlt); //corrected duplication
        img.setAttribute("width", img.width);
        img.setAttribute("height", img.height);
        img.setAttribute("class", 'img--profile');

        const photographerFooter = document.createElement( 'div' );
        photographerFooter.setAttribute("class", 'photographerFooter');

        const photographerFooterLikes = document.createElement( 'div' );
        
        photographerFooterLikes.setAttribute("class", 'photographerFooter__likes');

        const photographerFooterIcon = document.createElement('img');
        photographerFooterIcon.setAttribute("src", heartIcon);
        photographerFooterIcon.setAttribute("alt", 'heart icon');
        photographerFooterIcon.setAttribute("class", 'photographerFooter__icon');

        const photographerFooterPrice = document.createElement( 'p' );
        photographerFooterPrice.textContent = `${price}€ / jour`;
        photographerFooterPrice.setAttribute("class", 'photographerPrice--profile photographerFooter__price');
        photographerFooterPrice.setAttribute("lang", 'fr');
        
        article.append(textContainer, contactButton, img, photographerFooter);

        textContainer.append(photographerName, photographerLocation, photographerTagline);

        photographerFooter.append(photographerFooterLikes, photographerFooterIcon, photographerFooterPrice);
        
        return (article);
    }

    function getModalDOM() {
        
        const contactName = document.createElement ('h2');
        contactName.textContent = profileName;
        contactName.setAttribute("class", "modal__header__text__heading");

        const closeModalButton = document.getElementById("closeModal");
        closeModalButton.addEventListener("click", closeModal);
        
        return(contactName);
    }

    return { 
        data, getUserCardDOM, getPageDOM, getModalDOM
    }
    
}
