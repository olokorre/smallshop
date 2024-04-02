export default class InvalidQuantity extends Error {

    constructor() {
        super();
    }

    get message(): string {
        return "A quantidade de um item deve ser maior ou igual a 1";
    }

}
