import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common"
import { UseCasePort } from "@shared/application/ports/use-case.port"
import { IdVO } from "@shared/domain/value-objects/id.vo"
import { NameVO } from "src/user/domain/value-objects/name.vo"
import { Workspace } from "src/workspace/domain/entities/workspace.entity"
import { WORKSPACE_REPOSITORY_PORT, WorkspaceRepositoryPort } from "../ports/workspace-repository.port"

export interface UpdateWorkspaceInput {
  name: NameVO
  planId: number
  description?: string
  workspaceId: IdVO
}

@Injectable()
export class UpdateUserUseCase implements UseCasePort<UpdateWorkspaceInput, Workspace> {
  constructor(@Inject(WORKSPACE_REPOSITORY_PORT) private readonly workspaceRepository: WorkspaceRepositoryPort) {}

  async execute(input: UpdateWorkspaceInput): Promise<Workspace> {
    const workspace = await this.workspaceRepository.findByUnique({ id: input.workspaceId.get() })

    if (!workspace) throw new HttpException("Workspace não encontrado", HttpStatus.NOT_FOUND)

    workspace.setName(input.name.get())
    workspace.setPlanId(input.planId)
    workspace.setDescription(input.description ?? "")

    return this.workspaceRepository.update(workspace)
  }
}
