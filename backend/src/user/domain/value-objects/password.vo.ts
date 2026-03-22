export class PasswordVO {
    private readonly value: string 

    constructor (passwordHashed: string) {
        this.value = passwordHashed
    }

    static isValid (password: string): boolean {
        return password.length > 6
    }

    get (): string {
        return this.value
    }
}