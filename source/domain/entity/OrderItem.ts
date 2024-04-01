import Item from "./Item";

export default class OrderItem {

    constructor(readonly item: Item, readonly quantity: number) {
    }

    get value(): number {
        return this.item.price * this.quantity;
    }

}
