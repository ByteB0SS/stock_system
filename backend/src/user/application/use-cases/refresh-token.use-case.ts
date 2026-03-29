import { HttpException, Inject } from "@nestjs/common";
import { UseCasePort } from "@shared/application/ports/use-case.port";
import { AUTH_SESSION_GENERATOR_PORT, AuthSessionGeneratorPort } from "../ports/auth-session-generator.port";
import { TOKEN, TokenPort } from "@shared/application/ports/token.port";

export interface RefreshTokenInput { 
    refreshToken: string
}

export interface RefreshTokenOutput {
    accessToken: string,
    refreshToken: string
}

export class RefreshTokenUsecase implements UseCasePort<RefreshTokenInput, RefreshTokenOutput> {
    constructor (@Inject(AUTH_SESSION_GENERATOR_PORT) private readonly authGenerator: AuthSessionGeneratorPort, @Inject(TOKEN) private readonly tokenService: TokenPort) {}
   
    async execute(input: RefreshTokenInput): Promise<RefreshTokenOutput> {
        const tokenIsCorrect = this.tokenService.isValid(input.refreshToken, 'REFRESH_TOKEN')
        
        if (!tokenIsCorrect.isValid) {
            throw new HttpException('Refresh token inválido', 401)
        }


        const {iat, exp, ...payload} = tokenIsCorrect.payload
        return this.authGenerator.genTokens(payload)
    }
}