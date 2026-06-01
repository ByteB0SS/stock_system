import { HttpException, HttpStatus } from "@nestjs/common"

export class QuantityVO {
    private value: number = 0

    constructor (quantity: number = 0) {
        if (quantity < 0) throw new HttpException('Um produto não pode ter quantidade negativa.', HttpStatus.BAD_REQUEST)
        this.value = quantity
    }

    add (quantity: number) {
        if (quantity < 0) throw new HttpException('Valor de incremento deve ser positivo.', HttpStatus.BAD_REQUEST)
        this.value = quantity  + this.value
    }

    decrease (quantity: number) {
        if (quantity > 0) throw new HttpException('Valor de decremento deve ser negativo.', HttpStatus.BAD_REQUEST)
        if (quantity > this.value) throw new HttpException('Valor de decremento não pode ser maior que o valor actual do produto.', HttpStatus.BAD_REQUEST)
        this.value = this.value - quantity
    }

    redefine (quantity: number) {
        if (quantity < 0) throw new HttpException('Um produto não pode ter quantidade negativa.', HttpStatus.BAD_REQUEST)
        this.value = quantity
    }

    get () {
        return this.value
    }
}