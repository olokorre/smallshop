import Item from "../source/domain/entity/Item";

test("Deve criar um item simples com código, descricão e preço", function () {
    const item = new Item(130000, "Coca Lata", 6.50);
    expect(item.code).toBe(130000);
    expect(item.description).toBe("Coca Lata");
    expect(item.price).toBe(6.50);
});
