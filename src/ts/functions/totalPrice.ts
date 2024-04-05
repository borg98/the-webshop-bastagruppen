import { cart } from "../../../modules/newCart";

export function totalPrice() {
  const totalPriceTag = document.getElementById(
    "totalPrice"
  ) as HTMLSpanElement;

  let sum: number = 0;
  cart.forEach((product) => (sum += product.quantity * product.price));
  totalPriceTag.innerText = sum.toString() + " Kr";
}
