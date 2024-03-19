import { v4 } from "uuid";
import StockDirection from "../types/StockDirection";

export default class Movement {

    constructor(readonly direction: StockDirection, readonly value: number, readonly id: string = v4()) {
    }

    get quantityChange(): number {
        return this.direction == "in" ? 1 : -1;
    }

}
