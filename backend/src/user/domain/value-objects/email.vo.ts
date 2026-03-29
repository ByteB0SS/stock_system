import { HttpException } from "@nestjs/common";

export class EmailVO {
    private readonly  emailRegex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    private readonly value: string

    constructor (email: string) {
        if(!this.isValid(email)){
            throw new HttpException('Email inválido', 400)
        }

        this.value = email.trim()
    }

    isValid (email: string): boolean {
        return this.emailRegex.test(email)
    }

    get (): string {
        return this.value
    }

    equals (other: EmailVO): boolean {
        return  this.value === other.get()
    }
}
