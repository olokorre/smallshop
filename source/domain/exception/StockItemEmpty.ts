import Item from "../entity/Item";

export default class StockItemEmpty extends Error {

    constructor(private item: Item) {
        super();
    }

    get message(): string {
        return `Item ${this.item.description} está indisponível`;
    }

}
