import Item from "../../source/domain/entity/Item";
import ItemRepository from "../../source/domain/repository/ItemRepository";
import ItemRepositoryMemory from "../../source/infra/repository/memory/ItemRepositoryMemory";

let itemRepository: ItemRepository;

beforeEach(function () {
    itemRepository = new ItemRepositoryMemory();
});

test("Deve armazenar um item no repostório", async function () {
    const item = new Item(12311, "Coca Cola 2L", 12);
    await itemRepository.save(item);
    const [output] = await itemRepository.getAll();
    expect(output.id).toBeTruthy();
    expect(output.code).toBe(12311);
    expect(output.description).toBe("Coca Cola 2L");
    expect(output.price).toBe(12);
});

test("Deve buscar um um item pelo código", async function () {
    const item = new Item(12311, "Coca Cola 2L", 12);
    await itemRepository.save(item);
    const output = await itemRepository.getByCode(12311);
    expect(output.id).toBeTruthy();
    expect(output.code).toBe(12311);
    expect(output.description).toBe("Coca Cola 2L");
    expect(output.price).toBe(12);
});

test("Deve disparar um erro ao não encontrar um item", async function () {
    await expect(() => itemRepository.getByCode(12311)).rejects.toThrow(new Error('Item 12311 não encontrado'));
});
