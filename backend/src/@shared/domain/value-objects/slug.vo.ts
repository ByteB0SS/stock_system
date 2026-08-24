export class SlugVO {
  private readonly value: string

  public constructor(value: string) {
    if (!value || value.trim().length === 0) {
      throw new Error("Slug value cannot be empty.")
    }
    this.value = value
  }

  private static generateHexSuffix(): string {
    let suffix = ""
    while (suffix.length < 10) {
      suffix += Math.floor(Math.random() * 16).toString(16)
    }
    return suffix
  }

  public static cleanText (text: string) {
    return text
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "")
  }

  public static createFromText(text: string): SlugVO {
    const suffix = this.generateHexSuffix()

    const cleaned = this.cleanText(text)

    return new SlugVO(`${cleaned}_${suffix}`)
  }

  public static restore(slug: string): SlugVO {
    return new SlugVO(this.cleanText(slug))
  }

  public get(): string {
    return this.value
  }

  public equals(other: SlugVO): boolean {
    return this.value === other.get()
  }
}
