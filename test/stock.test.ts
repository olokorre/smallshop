import Item from "../source/domain/entity/Item";
import Stock from "../source/domain/entity/Stock";

test("Deve criar um estoque de Coca Lata", function () {
    const item = new Item(130000, "Coca Lata", 6.50);
    const stock = new Stock(item);
    expect(stock.total).toBe(0);
});

test("Deve gerar uma movimentação de entrada no estoque", function () {
    const item = new Item(130000, "Coca Lata", 6.50);
    const stock = new Stock(item);
    stock.movement("in");
    expect(stock.total).toBe(1);
});

test("Deve gerar uma movimentação de entrada e saida no estoque, e permanecer no zero", function () {
    const item = new Item(130000, "Coca Lata", 6.50);
    const stock = new Stock(item);
    stock.movement("in");
    stock.movement("out");
    expect(stock.total).toBe(0);
});

test("Deve gerar uma movimentação de 3 entrada e duas saida no estoque, e permanecer com 2 itens", function () {
    const item = new Item(130000, "Coca Lata", 6.50);
    const stock = new Stock(item);
    stock.movement("in");
    stock.movement("in");
    stock.movement("in");
    stock.movement("out");
    expect(stock.total).toBe(2);
});

test("Deve gerar uma movimentação de 3 entrada e 2 saida no estoque, e permanecer com 1 item", function () {
    const item = new Item(130000, "Coca Lata", 6.50);
    const stock = new Stock(item);
    stock.movement("in");
    stock.movement("in");
    stock.movement("in");
    stock.movement("out");
    stock.movement("out");
    expect(stock.total).toBe(1);
});
