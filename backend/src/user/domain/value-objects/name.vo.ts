import { HttpException } from "@nestjs/common"

export class NameVO {
    private readonly value: string 

    constructor (name: string) {
        if (!this.isValid(name)) {
            throw new HttpException('O nome deve conter pelo menos 3 caracteres', 400)
        } 

        this.value = name.trim()
    }

    isValid (name: string): boolean {
        return name.length > 2
    }

    get (): string {
        return this.value
    }
}