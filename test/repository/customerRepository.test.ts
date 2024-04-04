import Customer from "../../source/domain/entity/Customer";
import CustomerNotFound from "../../source/domain/exception/CustomerNotFound";
import CustomerRepository from "../../source/domain/repository/CustomerRepository";
import CustomerRepositoryMemory from "../../source/infra/repository/memory/CustomerRepositoryMemory";

let customerRepository: CustomerRepository

beforeEach(function () {
    customerRepository = new CustomerRepositoryMemory();
});

test("Deve salvar um cliente no repositório", async function () {
    const customer = new Customer(123123, "Andrei Steffens");
    await customerRepository.save(customer);
    const [output] = await customerRepository.getAll();
    expect(output.id).toBe(customer.id);
    expect(output.name).toBe(customer.name);
    expect(output.code).toBe(customer.code);
});

test("Deve deve buscar um cliente pelo códugo", async function () {
    const code = 123123;
    const customer = new Customer(code, "Andrei Steffens");
    await customerRepository.save(customer);
    const output = await customerRepository.findByCode(code);
    expect(output.id).toBe(customer.id);
    expect(output.name).toBe(customer.name);
    expect(output.code).toBe(customer.code);
});

test("Deve disparar um erro ao não encontrar um cliente", async function () {
    const code = 123123;
    await expect(() => customerRepository.findByCode(code)).rejects.toThrow(new CustomerNotFound());
});
