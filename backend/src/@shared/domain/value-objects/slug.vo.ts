export class SlugVO {
    private readonly value: string;

    private constructor(value: string) {
        if (!value || value.trim().length === 0) {
            throw new Error('Slug value cannot be empty.');
        }
        this.value = value;
    }

    public static createFromText(text: string): SlugVO {
        const cleaned = text
            .trim()
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .replace(/^-+/, '')
            .replace(/-+$/, '');
            
        return new SlugVO(cleaned);
    }

    public static restore(slug: string): SlugVO {
        return new SlugVO(slug);
    }

    public get(): string {
        return this.value;
    }

    public equals(other: SlugVO): boolean {
        return this.value === other.get();
    }
}