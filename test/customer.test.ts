import Customer from "../source/domain/entity/Customer";

test("Deve criar um cliente simples", function () {
    const customer = new Customer(123123, "Andrei Steffens");
    expect(customer.id).toBeTruthy();
    expect(customer.name).toBe("Andrei Steffens");
    expect(customer.code).toBe(123123);
});
