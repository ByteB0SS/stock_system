import { Module } from '@nestjs/common';
import { SharedModule } from './@shared/shared.module';
import { ConfigModule } from '@nestjs/config';
import { UserController } from './user/presentation/controllers/user.controller';
import { UserModule } from './user/user.module';
import { PrismaModule } from './config/prisma/prisma.module';

@Module({
  imports: [
    UserModule,
    SharedModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env', 
    }),
    PrismaModule
  ],
  controllers: [UserController],
  providers: []
})
export class AppModule {}
