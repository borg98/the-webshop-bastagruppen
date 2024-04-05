import { cart } from "../../../modules/newCart";
import { Product } from "../../../modules/product";
import { saveToLs } from "./localStorage";
import { CartProduct } from "../../../modules/cartProduct";
import { findProductIndex } from "./findProductIndex";

export function addToCart(product: Product) {
  const size = (document.getElementById("sizeSelect") as HTMLSelectElement)
    .value;
  const color = (document.getElementById("colorSelect") as HTMLSelectElement)
    .value;

  const existingProductIndex = findProductIndex(product.id, size, color);

  if (existingProductIndex !== -1) {
    cart[existingProductIndex].quantity++;
  } else {
    const cartProduct = new CartProduct(
      product.id,
      product.name,
      product.price,
      product.img[0],
      size,
      color
    );

    cart.push(cartProduct);
  }

  saveToLs(cart);
}
