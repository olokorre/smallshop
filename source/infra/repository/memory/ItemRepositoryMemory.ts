import Item from "../../../domain/entity/Item";
import ItemRepository from "../../../domain/repository/ItemRepository";

export default class ItemRepositoryMemory implements ItemRepository {

    private items: Item[];

    constructor() {
        this.items = [];
    }

    async save(item: Item): Promise<void> {
        this.items.push(item);
    }

    async getAll(): Promise<Item[]> {
        return [...this.items];
    }

    async getByCode(code: number): Promise<Item> {
        const item = this.items.find($item => $item.code === code);
        if (!item) throw new Error(`Item ${code} não encontrado`);
        return item;
    }

}
