import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common"
import { UseCasePort } from "@shared/application/ports/use-case.port"
import { IdVO } from "@shared/domain/value-objects/id.vo"
import { NameVO } from "src/workspace/domain/value-objects/name.vo"
import { Workspace, workspaceStatus } from "src/workspace/domain/entities/workspace.entity"
import { WorkspaceRepositoryPort } from "../ports/workspace-repository.port"

export interface createWorkspaceInput {
  name: NameVO
  ownerId: IdVO
  planId: number
  description?: string
  status?: workspaceStatus
}

@Injectable()
export class CreateWorkspaceUseCase implements UseCasePort<createWorkspaceInput, Workspace> {
  constructor(@Inject() private readonly workspaceRepository: WorkspaceRepositoryPort) {}

  public async execute(input: createWorkspaceInput): Promise<Workspace> {
    const workspacesFromOwner = await this.workspaceRepository.findByOwner(input.ownerId)

    workspacesFromOwner.forEach((workspace) => {
      if (workspace.getPrimiteProps().name == input.name.get()) {
        throw new HttpException("Tu já tens um workspace com mesmo nome, tente outro nome.", HttpStatus.CONFLICT)
      }
    })

    const workspace = Workspace.createInstance(input.name, input.planId, input.ownerId, input.description, input.status)

    return await this.workspaceRepository.create(workspace)
  }
}
