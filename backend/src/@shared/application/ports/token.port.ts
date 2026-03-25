export interface validationReturnType {
    payload: any,
    isValid: boolean
} 

export interface TokenPort {
    genToken<T extends object>(payload: T, tokenType: "ACCESS_TOKEN" | "REFRESH_TOKEN", expiresIn: number): string
    isValid (token: string, validationType: "ACCESS_TOKEN" | "REFRESH_TOKEN"): validationReturnType
}

export const TOKEN = Symbol("TOKEN")