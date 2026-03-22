import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/config/prisma/prisma.module';
import { USER_REPOSITORY } from './application/ports/user-repository.port';
import { PrismaUserRepositoryAdapter } from './Infrastructure/adapters/prisma-user-repository.adpter';

@Module({
    imports: [PrismaModule],
    providers: [
        {
            provide: USER_REPOSITORY,
            useClass: PrismaUserRepositoryAdapter
        }
    ]
})
export class UserModule {}
