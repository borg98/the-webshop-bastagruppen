import { CartProduct } from "../../../modules/cartProduct";

export function saveToLs(cart: CartProduct[]) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function loadFromLs(): CartProduct[] {
  return JSON.parse(localStorage.getItem("cart") || "[]");
}
