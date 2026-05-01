import { HttpException, HttpStatus } from "@nestjs/common"

export class NameVO {
    private readonly value: string

    constructor (name: string) {
        if (!this.isValid(name)) throw new HttpException("O nome de um produto deve ter pelo menos 3 letra", HttpStatus.BAD_REQUEST) 
        this.value = name
    }

    private isValid(name: string): boolean {
        return name.length > 2
    }

    public get (): string {
        return this.value
    } 
}