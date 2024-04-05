import { cart } from "../../../modules/newCart";

export function totalProducts() {
  const cartIconIndex = document.getElementById("cartIndex") as HTMLSpanElement;
  const cartIndex = document.getElementById("cartMenuIndex") as HTMLSpanElement;
  let sum: number = 0;
  cart.forEach((product) => (sum += product.quantity));

  if (cartIconIndex) {
    cartIconIndex.innerText = sum.toString();
  } else {
    return;
  }
  if (cartIndex) {
    cartIndex.innerText = sum.toString();
  } else {
    return;
  }
}
