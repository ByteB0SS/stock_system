export interface AuthSessionGeneratorReturnType {
    accessToken: string
    refreshToken: string
}

export interface userTokenPayload {
    sub: string, 
    role: string,
    slug: string,
}


export interface AuthSessionGeneratorPort {
    genTokens (payload: userTokenPayload):  AuthSessionGeneratorReturnType
}

export const AUTH_SESSION_GENERATOR_PORT = Symbol("AUTH_SESSION_GENERATOR_PORT")