import { v4 } from "uuid";

export default class Customer {

    constructor(readonly code: number, readonly name: string, readonly id: string = v4()) {
    }

}
