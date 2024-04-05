import { cart } from "../../../modules/newCart";

export function findProductIndex(
  productId: number,
  size: string,
  color: string
): number {
  if (cart.length === 0) {
    return -1;
  }
  return cart.findIndex(
    (item) =>
      item.id === productId && item.size === size && item.color === color
  );
}
