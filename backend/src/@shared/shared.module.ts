import { Module } from '@nestjs/common';
import { HASH } from './application/ports/hash.port';
import { BcryptHashAdapter } from './infrastructure/adapters/bcrypt-hash.adapter';
import { TOKEN } from './application/ports/token.port';
import { JwtTokenAdapter } from './infrastructure/adapters/jwt-token.adapter';
import { ConfigModule } from '@nestjs/config';

@Module({
    providers: [
        {
            provide: HASH, 
            useClass: BcryptHashAdapter
        },
        {
            provide: TOKEN,
            useClass: JwtTokenAdapter
        }
    ],
})
export class SharedModule {}
