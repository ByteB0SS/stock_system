import { UseCasePort } from "@shared/application/ports/use-case.port"
import { WORKSPACE_REPOSITORY_PORT, WorkspaceRepositoryPort, WorkspaceSelectors } from "../ports/workspace-repository.port"
import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common"
import { Workspace } from "src/workspace/domain/entities/workspace.entity"

export type GetWorkspaceInput = WorkspaceSelectors

@Injectable()
export class GetWorkspaceUseCase implements UseCasePort<GetWorkspaceInput, Workspace> {
  constructor(  
    @Inject(WORKSPACE_REPOSITORY_PORT)
    private readonly workspaceRepo: WorkspaceRepositoryPort,
  ) {}

  public async execute(input: WorkspaceSelectors): Promise<Workspace> {
    const workspace = await this.workspaceRepo.findByUnique(input)
    if (!workspace) throw new HttpException("Workspace não encontrado", HttpStatus.NOT_FOUND)
    return workspace
  }
}
