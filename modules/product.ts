export class Product {
  public sizeList: string[] = ["XS", "S", "M", "L", "XL", "XXL"];
  public colorList: string[] = ["Black", "Blue", "Green", "Orange", "Beige"];
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public category: string,
    public img: string[],
    public description: string,
    public selected: boolean,
    public gender: string
  ) {}
}
