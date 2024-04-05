import { cart } from "../../../modules/newCart";

export function createIndexElement(index: number): HTMLSpanElement {
  const amountIndex = document.createElement("span");
  amountIndex.classList.add("index");
  amountIndex.innerText = cart[index].quantity.toString();
  return amountIndex;
}
