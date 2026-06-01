import { HttpException, HttpStatus } from "@nestjs/common"

export class NameVO {
  private value: string
  public constructor(name: string) {
    if (!this.isValid(name)) {
      throw new HttpException("Campo nome deve ter no mínimo 6 letras.", HttpStatus.BAD_REQUEST)
    }

    this.value = this.normailizeName(name)
  }

  private isValid(name: string): boolean {
    return name.length > 5
  }

  private normailizeName(name: string) {
    return name
      .toLowerCase()
      .trim()
      .replace(/\s+/g, " ")
      .split(" ")
      .map((palavra) => palavra.charAt(0).toUpperCase() + palavra.slice(1))
      .join(" ")
  }

  get() {
    return this.value
  }
}
