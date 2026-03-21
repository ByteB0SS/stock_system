import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { apiReference } from '@scalar/nestjs-api-reference';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Stock Flow API')
    .setDescription(
      'A Stock Flow API é o motor de controle para operações logísticas e armazenamento digital. ' +
      'Esta interface permite que organizações gerenciem fluxos de inventário complexos em um modelo SaaS, ' +
      'garantindo a integridade dos dados entre diferentes armazéns e pontos de distribuição. ' +
      'Através destes endpoints, é possível automatizar o rastreio de itens, monitorar níveis críticos de stock ' +
      'e integrar sistemas externos de faturamento ou logística diretamente ao ecossistema da plataforma.'
    )
    .setVersion('1.0')
    // .addTag(
    //   'Utilizador',
    //   'Gestão de acesso e identidade. Inclui autenticação, perfis de utilizador, permissões de nível de conta e preferências de sistema.'
    // )
    // .addTag(
    //   'Workspace',
    //   'Administração de instâncias de trabalho independentes. Permite configurar diferentes empresas ou unidades de negócio sob a mesma conta SaaS.'
    // )
    // .addTag(
    //   'Produto',
    //   'Controle operacional de stock. Focado na monitorização de quantidades, registo de entradas (compras/devoluções) e saídas (vendas/perdas) de itens.'
    // )
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  app.use(
    '/docs',
    apiReference({
      theme: "elysiajs",
      content: document,
      showDeveloperTools: "localhost",
      defaultHttpClient: {
        targetKey: "js",
        clientKey: "fetch"
      }
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
