import { Product } from "../../../modules/product";
import { createModalHtml } from "./createModalHtml";

export function openModal(product: Product) {
  createModalHtml(product);
  $("#productModal").modal("show");
}

export function openSmallModal() {
  $("#productModal").modal("hide");
  $("#addedToCart").modal("show");
  setTimeout(() => {
    $("#addedToCart").modal("hide");
  }, 1500);
}
