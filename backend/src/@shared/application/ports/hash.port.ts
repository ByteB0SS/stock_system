export interface HashPort{
    hash(toHash: string): Promise<string>
    isValid(toCompare: string, hashed: string): Promise<boolean>
}

export const HASH = Symbol('HASH')