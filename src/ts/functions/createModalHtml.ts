import { Product } from "../../../modules/product";
import { addToCart } from "./addToCart";
import { createHtmlForCart } from "./createHtmlForCart";
import { createImg } from "./createImg";
import { openSmallModal } from "./openModal";

export function createModalHtml(product: Product) {
  (document.getElementById("modalTitle") as HTMLHeadingElement).innerText =
    product.name;
  const modalBody = document.getElementById("modalBody") as HTMLDivElement;

  const addBtn = document.getElementById("addToCartBtn") as HTMLButtonElement;

  modalBody.innerHTML = "";
  const productInfoContainer = document.createElement("div");
  productInfoContainer.classList.add("productInfoContainer");

  const infoHead = document.createElement("div");
  infoHead.classList.add("infoHead");

  const imgContainer = document.createElement("div");
  imgContainer.id = "ModalImgContainer" + product.id;
  imgContainer.classList.add("ModalImgContainer");

  createImg(imgContainer, product.img);

  const productTitle = document.createElement("h3");
  productTitle.id = "ModalProductTitle" + product.id;
  productTitle.classList.add("ModalProductTitle");
  productTitle.innerText = product.name;

  const productCategory = document.createElement("p");
  productCategory.id = "ModalProductCategory" + product.id;
  productCategory.classList.add("ModalProductCategory");
  productCategory.innerText = product.category;

  const productDescription = document.createElement("p");
  productDescription.id = "ModalProductDescription" + product.id;
  productDescription.classList.add("ModalProductDescription");
  productDescription.innerText = product.description;

  const productPrice = document.createElement("p");
  productPrice.id = "ModalProductPrice" + product.id;
  productPrice.classList.add("ModalProductPrice");
  productPrice.innerText = product.price.toString() + " Kr";

  const sizeSelect = document.getElementById("sizeSelect") as HTMLSelectElement;
  sizeSelect.innerHTML = "";
  product.sizeList.forEach((size: string) => {
    const productSize = document.createElement("option");
    productSize.value = size;
    productSize.innerText = size;
    sizeSelect.appendChild(productSize);

    const productColor = document.createElement("p");
    productColor.id = "ModalProductColor" + product.id;
    productCategory.classList.add("ModalProductColor");
  });
  const colorSelect = document.getElementById(
    "colorSelect"
  ) as HTMLSelectElement;
  colorSelect.innerHTML = "";
  product.colorList.forEach((color: string) => {
    const productcolor = document.createElement("option");
    productcolor.value = color;
    productcolor.innerText = color.charAt(0).toUpperCase() + color.slice(1);
    colorSelect.appendChild(productcolor);
  });

  addBtn.addEventListener(
    "click",
    () => {
      addToCart(product);
      createHtmlForCart();
      openSmallModal();
    },
    { once: true }
  );

  infoHead.appendChild(productTitle);
  infoHead.appendChild(productPrice);
  productInfoContainer.appendChild(productCategory);
  productInfoContainer.appendChild(productDescription);

  modalBody.appendChild(imgContainer);
  modalBody.appendChild(infoHead);
  modalBody.appendChild(productInfoContainer);
}
