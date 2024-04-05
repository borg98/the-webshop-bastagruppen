import { Product } from "./product";

export const products: Product[] = [
  new Product(
    1,
    "Jacket",
    899,
    "Jackets",
    ["../../assets/Male/mJacketNavy.jpg", "../../assets/Male/mJacketNavy2.jpg"],
    "Regular Fit Wool-blend jacket",
    false,
    "male"
  ),
  new Product(
    2,
    "Jeans",
    299,
    "Jeans",
    ["../../assets/Male/mJeansBlack.jpg", "../../assets/Male/mJeansBlue.jpg"],
    "5-pocket jeans in cotton",
    false,
    "male"
  ),
  new Product(
    3,
    "Zip jumper",
    299,
    "Jumpers",
    [
      "../../assets/Male/mKnittedBeige.jpg",
      "../../assets/Male/mKnittedBeige2.jpeg",
    ],
    "en svart t-shirt",
    false,
    "male"
  ),
  new Product(
    4,
    "T-Shirt",
    399,
    "T-shirt",
    [
      "../../assets/Male/mTshirtBlue.jpg",
      "../../assets/Male/mTshirtGreen.jpg",
      "../../assets/Male/mTshirtPink.jpg",
    ],
    "Cotton t-shirt",
    false,
    "male"
  ),
  new Product(
    5,
    "Chiffon dress",
    399,
    "Dresses",
    [
      "../../assets/Womens/wDressGreen.jpg",
      "../../assets/Womens/wDressGreen2.jpg",
    ],
    "Long sleeve dress",
    false,
    "womens"
  ),
  new Product(
    6,
    "Jacket",
    499,
    "Jackets",
    [
      "../../assets/Womens/wJacketBeige.jpg",
      "../../assets/Womens/wJacketBeige2.jpg",
    ],
    "2-pocket jacket",
    false,
    "womens"
  ),
  new Product(
    7,
    "Jeans",
    699,
    "Jeans",
    [
      "../../assets/Womens/wJeansBlue.jpg",
      "../../assets/Womens/wJeansBlack.jpg",
    ],
    "5-pocket denim",
    false,
    "womens"
  ),
  new Product(
    8,
    "Knitted polo",
    599,
    "Knitwear",
    [
      "../../assets/Womens/wKnittedPurple.jpg",
      "../../assets/Womens/wKnittedBlack.jpg",
    ],
    "Oversized Polo",
    false,
    "womens"
  ),
  new Product(
    9,
    "Cap",
    149,
    "Caps",
    ["../../assets/Unisex/uCapBlue.jpg", "../../assets/Unisex/uCapOrange.jpg"],
    "100% organic cotton",
    false,
    "unisex"
  ),
  new Product(
    10,
    "Sneakers",
    599,
    "Shoes",
    [
      "../../assets/Unisex/uSneakersBlack.jpg",
      "../../assets/Unisex/uSneakersBlack.jpg",
    ],
    "Black suede sneakers",
    false,
    "unisex"
  ),
];
