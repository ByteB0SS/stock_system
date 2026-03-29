import { Inject, Injectable } from "@nestjs/common";
import { TOKEN, type TokenPort } from "@shared/application/ports/token.port";
import { AuthSessionGeneratorPort, AuthSessionGeneratorReturnType, userTokenPayload } from "src/user/application/ports/auth-session-generator.port";

@Injectable()
export class AuthSessionGeneratorAdapter implements AuthSessionGeneratorPort {
    constructor (@Inject(TOKEN) private readonly tokenManager: TokenPort) {}

    genTokens(payload: userTokenPayload): AuthSessionGeneratorReturnType {
        const accessToken = this.tokenManager.genToken(payload, "ACCESS_TOKEN", 60 * 15)
        const refreshToken = this.tokenManager.genToken(payload, "REFRESH_TOKEN", 60 * 60 * 24 * 30)

        return {
            accessToken: accessToken,
            refreshToken: refreshToken
        }
    }
}