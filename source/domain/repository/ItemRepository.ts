import Item from "../entity/Item";

export default interface ItemRepository {

    save(item: Item): Promise<void>;
    getAll(): Promise<Item[]>;
    getByCode(code: number): Promise<Item>;

}
