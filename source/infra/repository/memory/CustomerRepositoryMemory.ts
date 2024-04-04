import Customer from "../../../domain/entity/Customer";
import CustomerNotFound from "../../../domain/exception/CustomerNotFound";
import CustomerRepository from "../../../domain/repository/CustomerRepository";

export default class CustomerRepositoryMemory implements CustomerRepository {

    private customers: Customer[];

    constructor() {
        this.customers = [];
    }

    async save(customer: Customer): Promise<void> {
        this.customers.push(customer);
    }

    async getAll(): Promise<Customer[]> {
        return this.customers.map(customer => customer);
    }

    async findByCode(code: number): Promise<Customer> {
        const customer = this.customers.find($customer => $customer.code === code);
        if (!customer) throw new CustomerNotFound();
        return customer;
    }

}
