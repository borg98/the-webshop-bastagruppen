import { loadFromLs, saveToLs } from "../src/ts/functions/localStorage";
import { CartProduct } from "./CartProduct";

export let cart: CartProduct[] = loadFromLs();
saveToLs(cart);
