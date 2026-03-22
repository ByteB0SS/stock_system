import { Injectable } from "@nestjs/common";
import { TokenPort } from "@shared/application/ports/token.port";
import { ConfigService } from '@nestjs/config';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtTokenAdapter implements TokenPort {
    private readonly secret: string
    
    constructor (private readonly configService: ConfigService) {
        this.secret = this.configService.getOrThrow<string>('ACCESS_TOKEN_SECRET');
    } 

    genToken<T extends object>(payload: T): string {
        return jwt.sign(payload, this.secret)
    }

    isValid(token: string): boolean {
        try {
            jwt.verify(token, this.secret);
            return true;
        } catch (error) {
            return false;
        }
    }
}