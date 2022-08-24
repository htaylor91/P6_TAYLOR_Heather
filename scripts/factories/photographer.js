function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;
    //console.log(data);

    const profilePicture = `assets/images/photographers/${portrait}`;
    const profileAlt = `Portrait de ${name}`;

    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    //https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings#concatenation_using_

    function getUserCardDOM() {
        const article = document.createElement( 'article' );

        const anchor = document.createElement( 'a' );
        anchor.setAttribute("href", `./photographer.html?id=${id}`);

        const imgContainer = document.createElement( 'div' );
        imgContainer.setAttribute("class", 'imgContainer');

        const img = document.createElement( 'img' );
        img.setAttribute("src", profilePicture);
        img.setAttribute("alt", profileAlt);

        const photographerName = document.createElement( 'h2' );
        photographerName.textContent = name;
        photographerName.setAttribute("class", 'photographerName photographerName--homepage');

        const textContainer = document.createElement( 'div' );
        textContainer.setAttribute("class", 'textContainer');

        const photographerLocation = document.createElement( 'p' );
        photographerLocation.textContent = `${city}, ${country}`;
        photographerLocation.setAttribute("class", 'photographerLocation photographerLocation--homepage');
        
    
        const photographerTagline = document.createElement( 'p' );
        photographerTagline.textContent = tagline;
        photographerTagline.setAttribute("class", 'photographerTagline photographerTagline--homepage');

        const photographerPrice = document.createElement( 'p' );
        photographerPrice.textContent = `${price}€/jour`;
        photographerPrice.setAttribute("class", 'photographerPrice');

        article.appendChild(anchor);

        anchor.appendChild(imgContainer);
        imgContainer.appendChild(img);
        
        anchor.appendChild(photographerName);

        article.appendChild(textContainer);

        textContainer.appendChild(photographerLocation);
        textContainer.appendChild(photographerTagline);
        textContainer.appendChild(photographerPrice);

        return (article);
    }

    function getPageDOM() {

        const article = document.createElement( 'article' );
        article.setAttribute("class", 'photographBanner__article');

        const photographerName = document.createElement( 'h1' );
        photographerName.textContent = name;
        photographerName.setAttribute("class", 'photographerName photographerName--profile');

        const textContainer = document.createElement( 'div' );
        textContainer.setAttribute("class", 'textContainer');
        textContainer.style.display = "flex";
        textContainer.style.alignItems = "start";
        textContainer.style.justifyContent = "center";

        const photographerLocation = document.createElement( 'p' );
        photographerLocation.textContent = `${city}, ${country}`;
        photographerLocation.setAttribute("class", 'photographerLocation photographerLocation--profile');

        const photographerTagline = document.createElement( 'p' );
        photographerTagline.textContent = tagline;
        photographerTagline.setAttribute("class", 'photographerTagline photographerTagline--profile');
        
        const imgContainer = document.createElement( 'div' );
        imgContainer.setAttribute("class", 'imgContainer');
        
        const img = document.createElement( 'img' );
        img.setAttribute("src", profilePicture);
        img.setAttribute("alt", profileAlt); //corrected duplication
        img.setAttribute("width", img.width);
        img.setAttribute("height", img.height);
        
        article.appendChild(textContainer);

        const contactButton = document.createElement( 'button' );
        contactButton.setAttribute("class", 'button button--contact');
        contactButton.textContent = `Contactez-moi`;
        contactButton.addEventListener("click", displayModal);

        article.appendChild(contactButton);

        article.appendChild(imgContainer);

        textContainer.appendChild(photographerName);
        textContainer.appendChild(photographerLocation);
        textContainer.appendChild(photographerTagline);

        imgContainer.appendChild(img);
        
        return (article);
    }
   
    return { 
        data, getUserCardDOM, getPageDOM
    }
    
}
