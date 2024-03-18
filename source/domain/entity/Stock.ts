import StockDirection from "../types/StockDirection";
import Item from "./Item";
import Movement from "./Movement";

export default class Stock {

    protected $movements: Movement[];

    constructor(private item: Item) {
        this.$movements = [];
    }

    get total(): number {
        let total = 0;
        for (const movement of this.$movements) {
            total += movement.direction == "in" ? 1 : -1;
        }
        return total;
    }

    movement(direction: StockDirection): void {
        this.$movements.push(new Movement(direction, this.item.price));
    }

}
