// This file converts a shop object into HTML and returns it back to where the function was called
export const shopHTMLer = (shopObject) =>{
    return `
        <article class="shop__list">
            <ul class ="shop__list__item">
                <h2>${shopObject.name}</h2>
                <li>${shopObject.address}</li>
                <li>${shopObject.phone}</li>
                <li><a href="${shopObject.website}">Website</a></li>
                <li><a href="${shopObject.menu}">Menu</a></li>
            </ul>
        </article>
    `
}