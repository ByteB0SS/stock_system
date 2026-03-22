export type tokenPayload = {
    sub: string
    [key: string]: unknown
}

export interface TokenPort {
    genToken<T extends object>(payload: T): string
    isValid (token: string): boolean
}

export const TOKEN = Symbol("TOKEN")