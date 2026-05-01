import { Inject, Injectable } from "@nestjs/common"
import { UseCasePort } from "@shared/application/ports/use-case.port"
import { User } from "src/user/domain/entities/user.entity"
import { Workspace } from "src/workspace/domain/entities/workspace.entity"
import { WORKSPACE_REPOSITORY_PORT, WorkspaceRepositoryPort } from "../ports/workspace-repository.port"

export interface GetWorkspacesInput {
  lastId?: string
  limit?: number
  slugFilter?: string
  nameFilter?: string
}

@Injectable()
export class GetWorkspacesUseCase implements UseCasePort<GetWorkspacesInput, Workspace[]> {
  constructor(
    @Inject(WORKSPACE_REPOSITORY_PORT)
    private readonly workspaceRepository: WorkspaceRepositoryPort,
  ) {}

  async execute(input: GetWorkspacesInput): Promise<Workspace[]> {
    const { lastId, limit, nameFilter, slugFilter } = input
    const workspaces = await this.workspaceRepository.findMany(lastId, limit, slugFilter, nameFilter)
    return workspaces
  }
}
