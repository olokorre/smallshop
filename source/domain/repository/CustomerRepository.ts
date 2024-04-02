import Customer from "../entity/Customer";

export default interface CustomerRepository {

    save(customer: Customer): void;
    getAll(): Customer[];

}
