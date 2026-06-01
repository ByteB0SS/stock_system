import { Module } from "@nestjs/common"
import { HASH } from "./application/ports/hash.port"
import { BcryptHashAdapter } from "./infrastructure/adapters/bcrypt-hash.adapter"
import { TOKEN_SYMBOL } from "../auth/application/ports/token.port"
import { ConfigModule } from "@nestjs/config"

@Module({
  providers: [
    {
      provide: HASH,
      useClass: BcryptHashAdapter,
    },
  ],
  exports: [],
})
export class SharedModule {}
