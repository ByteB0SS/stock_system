export class QuantityVO {
    private  value: number
    
    public constructor (quantity: number) {
        if (quantity < 0) {
            throw new Error('Quantidade não pode ser negativa')
        }

        if (!Number.isInteger(quantity)) {
            throw new Error('Quantidade deve ser um número inteiro')
        }

        this.value = quantity
    }

    public get (): number {
        return this.value
    }

    public add (quantity: number): number {
        quantity = quantity < 0 ? -quantity : quantity

        this.value += quantity

        return this.value
    }

    public subtract (quantity: number): number {
        quantity = quantity < 0 ? -quantity : quantity

        if (this.value - quantity < 0) {
            throw new Error('Quantidade resultante não pode ser negativa')
        }

        this.value -= quantity

        return this.value
    }
}