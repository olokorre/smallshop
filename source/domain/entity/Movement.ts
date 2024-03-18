import StockDirection from "../types/StockDirection";

export default class Movement {

    constructor(readonly direction: StockDirection, readonly value: number) {
    }

}
