import { v4 } from "uuid";

export default class Item {

    constructor(readonly code: number, readonly description: string, readonly price: number, readonly id: string = v4()) {
    }

}
