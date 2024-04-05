import { loadFromLs, saveToLs } from "../src/ts/functions/localStorage";
import { CartProduct } from "./cartProduct";

export let cart: CartProduct[] = loadFromLs();
saveToLs(cart);
