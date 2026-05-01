import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { UseCasePort } from "@shared/application/ports/use-case.port";
import { WORKSPACE_REPOSITORY_PORT, WorkspaceRepositoryPort } from "../ports/workspace-repository.port";
import { IdVO } from "@shared/domain/value-objects/id.vo";

export interface DeleteWorkspaceInput {
    workspaceId: IdVO
    requesterId: IdVO
}

@Injectable()
export class DeleteWorkspaceUseCase implements UseCasePort<DeleteWorkspaceInput, void> {
    constructor(@Inject(WORKSPACE_REPOSITORY_PORT) private readonly  workspaceReposistory: WorkspaceRepositoryPort) {}

    public async execute(input: DeleteWorkspaceInput):  Promise<void> {
        const workspace = await this.workspaceReposistory.findByUnique({id: input.workspaceId.get()})

        if(!workspace) throw new HttpException('Workspace não encontrdo', HttpStatus.NOT_FOUND)
        if(input.requesterId != workspace.getProps().ownerId) throw new HttpException("Não podes apagar este workspace", HttpStatus.FORBIDDEN)

        const isDeleted = await this.workspaceReposistory.delete(input.workspaceId)
    }
}