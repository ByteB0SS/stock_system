import { randomUUID } from "crypto"

export class IdVO{
    private readonly value: string

    constructor (id?: string) {
        this.value = id || randomUUID()
    }

    equals (otherId: IdVO) {
        return this.value === otherId.get()
    }

    get () {
        return this.value
    }
} 