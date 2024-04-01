import Item from "../source/domain/entity/Item";
import Order from "../source/domain/entity/Order";

test("Deve criar um pedido com nenhum item e com valor de R$0,00", function () {
    const order = new Order(1234567);
    expect(order.total).toBe(0);
});

test("Deve criar um pedido com um item e com valor de R$5,00", function () {
    const order = new Order(1234567);
    const item = new Item(130000, "Coca Lata", 5);
    order.add(item, 1);
    expect(order.total).toBe(5);
});

test("Deve criar um pedido com duas quantidades de um item e com valor de R$10,00", function () {
    const order = new Order(1234567);
    const item = new Item(130000, "Coca Lata", 5);
    order.add(item, 2);
    expect(order.total).toBe(10);
});

test("Deve criar um pedido com dois item e com valor de R$15,00", function () {
    const order = new Order(1234567);
    const item1 = new Item(130000, "Coca Lata", 5);
    const item2 = new Item(130000, "Coca Litro", 10);
    order.add(item1, 1);
    order.add(item2, 1);
    expect(order.total).toBe(15);
});
