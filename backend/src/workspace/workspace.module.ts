import { Module } from "@nestjs/common"
import { WORKSPACE_REPOSITORY_PORT } from "./application/ports/workspace-repository.port"
import { PrismaWorkspaceRepositoryAdapter } from "./infrastructure/adapters/prisma-workspace-repository.adapter"
import { CreateWorkspaceUseCase } from "./application/use-cases/create-workspace.use-case"

@Module({
  controllers: [],
  providers: [
    CreateWorkspaceUseCase,
    {
      provide: WORKSPACE_REPOSITORY_PORT,
      useClass: PrismaWorkspaceRepositoryAdapter,
    },
  ],
  exports: [CreateWorkspaceUseCase],
  imports: [],
})
export class WorkspaceModule {}
