export class QuantityVO {
    private value: number

    public constructor(quant: number) {
        this.value = this.normalize(quant)
    }

    private normalize(quant: number): number{
        quant = quant < 0 ? -quant : quant
        quant = Math.trunc(quant)
        return quant
    }

    public add(quant: number): number {
        this.value += this.normalize(quant)
        return this.value
    }

    public remove(quant: number): number {
        this.value -= this.normalize(quant)
        return this.value
    }

    public define(quant: number): number {
        this.value = this.normalize(quant)
        return this.value
    }

    public get(): number {
        return this.value
    } 
}