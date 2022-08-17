function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );

        const anchor = document.createElement( 'a' );
        anchor.setAttribute("href", `./photographer.html?id=${id}`);

        const imgContainer = document.createElement( 'div' );
        imgContainer.setAttribute("class", 'imgContainer');

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", ""); //empty alt to avoid repetition of name
        img.setAttribute("width", img.width);
        img.setAttribute("height", img.height);

        const photographerName = document.createElement( 'h2' );
        photographerName.textContent = name;
        photographerName.setAttribute("class", 'photographerName');

        const textContainer = document.createElement( 'div' );
        textContainer.setAttribute("class", 'textContainer');

        const photographerLocation = document.createElement( 'p' );
        photographerLocation.textContent = `${city}, ${country}`;
        photographerLocation.setAttribute("class", 'photographerLocation');

        const photographerTagline = document.createElement( 'p' );
        photographerTagline.textContent = tagline;
        photographerTagline.setAttribute("class", 'photographerTagline');

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

        console.log(article);
        return (article);
    }

    return { 
        name, id, city, country, tagline, price, picture, getUserCardDOM 
    }
}