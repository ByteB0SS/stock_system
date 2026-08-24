export abstract class EntityBase {
    protected createdAt: Date 
    protected updatedAt: Date | null
    protected deletedAt: Date | null

    protected constructor (createdAt?: Date, updatedAt?: Date | null, deletedAt?: Date | null) {
        this.createdAt = createdAt ?? new Date()
        this.updatedAt = updatedAt ?? null
        this.deletedAt = deletedAt ?? null
    }

    protected touch (): void {
        this.updatedAt = new Date()
    }

    public delete (): void {
        this.deletedAt = new Date()
        this.touch()
    }
    
}