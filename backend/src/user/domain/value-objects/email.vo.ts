export class EmailVO {
    private readonly  emailRegex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    private readonly value: string

    constructor (email: string) {
        if(!this.isValid(email)){
            throw new Error('Invalid email format')
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
