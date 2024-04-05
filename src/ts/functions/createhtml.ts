import { Product } from "../../../modules/product";
import { openModal } from "./openModal";

export function createHtml(list: Product[], container: HTMLElement) {
  container.innerHTML = "";
  list.forEach((product, i) => {
    const productContainer = document.createElement("div");
    productContainer.id = "productContainer" + product.id;
    productContainer.classList.add("productContainer");

    const imgContainer = document.createElement("div");
    imgContainer.id = "imgContainer" + product.id;
    imgContainer.classList.add("imgContainer");

    imgContainer.style.backgroundImage = `url(${product.img[0]})`;

    const infoContainer = document.createElement("div");
    infoContainer.id = "infoContainer" + (i + 1);
    infoContainer.classList.add("infoContainer");

    const productTitle = document.createElement("h3");
    productTitle.id = "productTitle" + product.id;
    productTitle.classList.add("productTitle");
    productTitle.innerText = product.name;

    const productPrice = document.createElement("p");
    productPrice.id = "productPrice" + product.id;
    productPrice.classList.add("productPrice");
    productPrice.innerText = product.price.toString() + " Kr";

    infoContainer.appendChild(productTitle);

    infoContainer.appendChild(productPrice);
    productContainer.appendChild(imgContainer);
    productContainer.appendChild(infoContainer);
    productContainer.addEventListener("click", () => {
      openModal(list[i]);
    });

    container.appendChild(productContainer);
  });
}
