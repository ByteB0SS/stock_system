import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/config/prisma/prisma.module';
import { USER_REPOSITORY } from './application/ports/user-repository.port';
import { PrismaUserRepositoryAdapter } from './Infrastructure/adapters/prisma-user-repository.adpter';
import { AUTH_SESSION_GENERATOR_PORT } from './application/ports/auth-session-generator.port';
import { AuthSessionGeneratorAdapter } from './Infrastructure/adapters/auth-session-generator.adapter';
import { RegisterUserUseCase } from './application/use-cases/register-user.use-case';
import { HASH } from '@shared/application/ports/hash.port';
import { BcryptHashAdapter } from '@shared/infrastructure/adapters/bcrypt-hash.adapter';
import { SharedModule } from '@shared/shared.module';
import { UserController } from './presentation/controllers/user.controller';
import { LoginUserUseCase } from './application/use-cases/login.use-cases';

@Module({
    imports: [PrismaModule, SharedModule],
    providers: [
        RegisterUserUseCase,
        LoginUserUseCase,
        AuthSessionGeneratorAdapter,
        {
            provide: AUTH_SESSION_GENERATOR_PORT, 
            useClass: AuthSessionGeneratorAdapter
        },
        {
            provide: USER_REPOSITORY,
            useClass: PrismaUserRepositoryAdapter
        }, 
        {
            provide: HASH,
            useClass: BcryptHashAdapter
        },
    ],
    exports: [RegisterUserUseCase, LoginUserUseCase],
    controllers: [UserController]
    
})
export class UserModule {}
