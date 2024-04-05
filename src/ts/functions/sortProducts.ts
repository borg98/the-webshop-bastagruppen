import { Product } from "../../../modules/product";
import { createHtml } from "./createhtml";
import { sortOnId, sortPriceDecr, sortPriceIncr } from "./sortTypes";

export function sortProducts(list: Product[], container: HTMLDivElement) {
  const selectTag = document.getElementById("sortSelect") as HTMLSelectElement;

  selectTag.addEventListener("change", () => {
    if (selectTag.value == "incr") {
      sortPriceIncr();
      createHtml(list, container);
    }
    if (selectTag.value == "decr") {
      sortPriceDecr();
      createHtml(list, container);
    }
    if (selectTag.value == "standard") {
      sortOnId();
      createHtml(list, container);
    }
  });
}
