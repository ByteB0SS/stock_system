import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../../../generated/prisma'; // Ajusta o caminho se necessário

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  
  constructor() {
    super({
      log: ['query', 'info', 'warn', 'error'], // Opcional: útil para ver o SQL no terminal do Kali
    });
  }

  async onModuleInit() {
    // Conecta ao banco quando o módulo do NestJS inicia
    await this.$connect();
  }

  async onModuleDestroy() {
    // Fecha a conexão quando a app desliga (evita fugas de memória)
    await this.$disconnect();
  }
}