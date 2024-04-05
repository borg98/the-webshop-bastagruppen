import { cart } from "../../../modules/newCart";
import { createIndexElement } from "./cartButton";
import { saveToLs } from "./localStorage";
import { totalPrice } from "./totalPrice";
import { totalProducts } from "./totalProducts";

export function createHtmlForCart() {
  totalProducts();

  totalPrice();
  const cartPageContainer = document.querySelector(
    "#productInventory"
  ) as HTMLDivElement;
  cartPageContainer.innerHTML = "";
  cart.forEach((product, index) => {
    const cartContainer = document.createElement("div");
    cartContainer.id = "cartContainer" + product.id;
    cartContainer.classList.add("cartContainer");

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("cartImgContainer");
    imgContainer.style.backgroundImage = `url(${product.img})`;

    const infoContainer = document.createElement("div");
    infoContainer.classList.add("infoContainer");

    const priceContainer = document.createElement("div");
    priceContainer.classList.add("priceContainer");

    const cartTitle = document.createElement("h3");
    cartTitle.id = "cartTitle" + product.id;
    cartTitle.classList.add("cartTitle");
    cartTitle.innerText = product.name;

    const cartPrice = document.createElement("p");
    cartPrice.id = "cartPrice" + product.id;
    cartPrice.classList.add("cartPrice");
    cartPrice.innerText = product.price.toString() + " Kr";

    const amountIndex = createIndexElement(index);

    const sizeTag = document.createElement("p");
    sizeTag.id = "sizeTag" + product.id;
    sizeTag.classList.add("sizeTag");
    sizeTag.innerText = product.size;

    const colorTag = document.createElement("p");
    colorTag.id = "colorTag" + product.id;
    colorTag.classList.add("colorTag");
    colorTag.innerText = product.color;

    const plusButton = document.createElement("button");
    plusButton.id = "plusButton" + product.id;
    plusButton.classList.add("plusButton");
    plusButton.innerText = "+";

    plusButton.addEventListener("click", () => {
      cart[index].quantity += 1;
      totalProducts();
      createHtmlForCart();
      saveToLs(cart);
    });

    const minusButton = document.createElement("button");
    minusButton.id = "minusButton" + product.id;
    minusButton.classList.add("minusButton");
    minusButton.innerText = "-";

    minusButton.addEventListener("click", () => {
      cart[index].quantity -= 1;
      totalProducts();
      createHtmlForCart();
      saveToLs(cart);

      if (cart[index].quantity === 0) {
        cart.splice(index, 1);
        totalProducts();
        createHtmlForCart();
        saveToLs(cart);
      }
    });

    infoContainer.appendChild(cartTitle);
    infoContainer.appendChild(sizeTag);
    infoContainer.appendChild(colorTag);

    priceContainer.appendChild(plusButton);
    priceContainer.appendChild(amountIndex);
    priceContainer.appendChild(minusButton);
    priceContainer.appendChild(cartPrice);

    cartContainer.appendChild(imgContainer);
    cartContainer.appendChild(infoContainer);
    cartContainer.appendChild(priceContainer);
    cartPageContainer.appendChild(cartContainer);
  });
}
