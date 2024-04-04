export default class CustomerNotFound extends Error {

    constructor() {
        super();
    }

    get message(): string {
        return "Cliente não encontrado";
    }

}
