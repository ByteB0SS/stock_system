import { Injectable } from "@nestjs/common";
import { TokenPort, validationReturnType } from "@shared/application/ports/token.port";
import { ConfigService } from '@nestjs/config';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtTokenAdapter implements TokenPort {
    private readonly accessSecret: string
    private readonly refreshSecret: string

    constructor(private readonly configService: ConfigService) {
        this.accessSecret = this.configService.getOrThrow<string>('ACCESS_TOKEN_SECRET');
        this.refreshSecret = this.configService.getOrThrow<string>('REFRESH_TOKEN_SCRET');
    }

    genToken<T extends object>(payload: T, tokenType: "ACCESS_TOKEN" | "REFRESH_TOKEN" = "ACCESS_TOKEN", expiresIn: number): string {
        return jwt.sign({ ...payload, tokenType: tokenType }, tokenType === "ACCESS_TOKEN" ? this.accessSecret : this.refreshSecret, { expiresIn: expiresIn })
    }

    isValid(token: string, validationType: "ACCESS_TOKEN" | "REFRESH_TOKEN"): validationReturnType {
        try {
            return {
                payload: jwt.verify(token, validationType === "ACCESS_TOKEN" ? this.accessSecret : this.refreshSecret),
                isValid: true
            }
        } catch (error) {
            return {
                payload: {},
                isValid: false
            };
        }
    }
}