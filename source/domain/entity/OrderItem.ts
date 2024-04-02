import InvalidQuantity from "../exception/InvalidQuantity";
import Item from "./Item";

export default class OrderItem {

    constructor(readonly item: Item, readonly quantity: number) {
        if (this.quantity <= 0) throw new InvalidQuantity();
    }

    get value(): number {
        return this.item.price * this.quantity;
    }

}
