import { IdVO } from "@shared/domain/value-objects/id.vo"
import { SlugVO } from "@shared/domain/value-objects/slug.vo"
import { Workspace } from "src/workspace/domain/entities/workspace.entity"

export interface WorkspaceSelectors {
  id?: string
  slug?: string
}

export interface WorkspaceRepositoryPort {
  create(workspace: Workspace): Promise<Workspace>
  findByUnique(uniqueSelectors: WorkspaceSelectors): Promise<Workspace | null>
  findByOwner(ownerId: IdVO): Promise<Workspace[]>
  findMany(lastId?: string, limit?: number, slugFilter?: string, nameFilter?: string): Promise<Workspace[]>
  delete(id: IdVO): Promise<void>
  update(workspace: Workspace): Promise<Workspace>
}

export const WORKSPACE_REPOSITORY_PORT = Symbol("WORKSPACE_REPOSITORY_PORT")
