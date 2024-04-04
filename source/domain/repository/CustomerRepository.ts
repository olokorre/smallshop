import Customer from "../entity/Customer";

export default interface CustomerRepository {

    save(customer: Customer): Promise<void>;
    getAll(): Promise<Customer[]>;
    findByCode(code: number): Promise<Customer>;

}
