import { shopHTMLer } from "./shop.js";
import { copyOfShops } from "./shopProvider.js";

// Takes a copy of the shop list and the HTML'er JS files and 
// combines them in order to convert all shops into HTML and send them to the webpage
export const addShopsToPage = () =>{
    const contentElement = document.querySelector(".listContainer");
    copyOfShops.forEach(shop => {
        const shopHTML = shopHTMLer(shop);
        contentElement.innerHTML += shopHTML;
    });
}