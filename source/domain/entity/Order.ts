import { v4 } from "uuid";
import Item from "./Item";
import OrderItem from "./OrderItem";

export default class Order {

    private orderItens: OrderItem[];

    constructor(readonly userCode: number, readonly id: string = v4()) {
        this.orderItens = [];
    }

    get total(): number {
        let total = 0;
        for (const orderItem of this.orderItens)
            total += orderItem.value;
        return total;
    }

    add(item: Item, quantity: number): void {
        this.orderItens.push(new OrderItem(item, quantity));
    }

}
