function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );

        const a = document.createElement( 'a' );
        a.setAttribute("href", `./photographer.html`);

        const imgContainer = document.createElement( 'div' );
        imgContainer.setAttribute("class", 'imgContainer');

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);
        img.setAttribute("width", img.width);
        img.setAttribute("height", img.height);

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        const h3 = document.createElement( 'h3' );
        h3.textContent = `${city}, ${country}`;

        const h4 = document.createElement( 'h4' );
        h4.textContent = tagline;

        const p = document.createElement( 'p' );
        p.textContent = `${price}€/jour`;

        article.appendChild(a);

        a.appendChild(imgContainer);

        imgContainer.appendChild(img);
        
        a.appendChild(h2);

        article.appendChild(h3);
        article.appendChild(h4);
        article.appendChild(p);

        console.log(article);
        return (article);
    }
    return { name, id, city, country, tagline, price, picture, getUserCardDOM }
}