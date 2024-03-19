import StockItemEmpty from "../exception/StockItemEmpty";
import StockDirection from "../types/StockDirection";
import Item from "./Item";
import Movement from "./Movement";

export default class StockItem {

    protected $movements: Movement[];

    constructor(private item: Item) {
        this.$movements = [];
    }

    get total(): number {
        let total = 0;
        for (const movement of this.$movements) {
            total += movement.quantityChange;
        }
        return total;
    }

    movement(direction: StockDirection): void {
        if (direction === "out" && this.total <= 0) throw new StockItemEmpty(this.item);
        this.$movements.push(new Movement(direction, this.item.price));
    }

}
