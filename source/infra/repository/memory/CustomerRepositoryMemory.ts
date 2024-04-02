import Customer from "../../../domain/entity/Customer";
import CustomerRepository from "../../../domain/repository/CustomerRepository";

export default class CustomerRepositoryMemory implements CustomerRepository {

    private customers: Customer[];

    constructor() {
        this.customers = [];
    }

    save(customer: Customer): void {
        this.customers.push(customer);
    }

    getAll(): Customer[] {
        return this.customers.map(customer => customer);
    }

}
