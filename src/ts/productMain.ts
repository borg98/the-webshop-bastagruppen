import "../scss/productPage.scss";
import { createHtml } from "./functions/createhtml.ts";
import { products } from "../../modules/productList";
import { createHtmlForCart } from "./functions/createHtmlForCart.ts";
import { sortProducts } from "./functions/sortProducts.ts";

const pageContainer = document.querySelector("#app") as HTMLDivElement;
sortProducts(products, pageContainer);
createHtml(products, pageContainer);
createHtmlForCart();
