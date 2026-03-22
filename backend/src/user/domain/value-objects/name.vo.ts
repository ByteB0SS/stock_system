export class NameVO {
    private readonly value: string 

    constructor (name: string) {
        if (!this.isValid(name)) {
            throw new Error("Invalid name format")
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