export class CartProduct {
  public quantity: number = 1;
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public img: string,
    public size: string,
    public color: string,
    public brand?: string
  ) {}
}
