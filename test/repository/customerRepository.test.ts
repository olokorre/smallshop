import Customer from "../../source/domain/entity/Customer";
import CustomerRepositoryMemory from "../../source/infra/repository/memory/CustomerRepositoryMemory";

test("Deve salvar um cliente no repositório", async function () {
    const customerRepository = new CustomerRepositoryMemory();
    const customer = new Customer(123123, "Andrei Steffens");
    await customerRepository.save(customer);
    const [output] = await customerRepository.getAll();
    expect(output.id).toBe(customer.id);
    expect(output.name).toBe(customer.name);
    expect(output.code).toBe(customer.code);
});
