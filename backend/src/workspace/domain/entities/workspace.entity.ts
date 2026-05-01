import { WorkspaceStatus } from "@prisma/client"
import { IdVO } from "@shared/domain/value-objects/id.vo"
import { SlugVO } from "@shared/domain/value-objects/slug.vo"
import { NameVO } from "src/workspace/domain/value-objects/name.vo"

export type workspaceStatus = "ACTIVE" | "DELETED" | "PADDING" | "SUSPENDED"

export interface IWorkspace {
  readonly id: IdVO
  name: NameVO
  slug?: SlugVO
  planId: number
  ownerId: IdVO
  description?: string
  status?: workspaceStatus
  deletedAt?: Date | null
  readonly createdAt?: Date | null
  updatedAt?: Date | null
}

export interface IPrimitiveWorkspace {
  readonly id: string
  name: string
  slug?: string
  planId: number
  ownerId: string
  description?: string
  status?: workspaceStatus
  deletedAt?: Date | null
  readonly createdAt?: Date | null
  updatedAt?: Date | null
}

export class Workspace {
  private readonly props: IWorkspace
  private constructor(workspaceProps: IWorkspace) {
    this.props = workspaceProps
    Object.freeze(this)
  }

  static createInstance(name: NameVO, planId: number, ownerId: IdVO, description?: string, status: WorkspaceStatus = "ACTIVE") {
    const slug = SlugVO.createFromText(name.get())
    const id = new IdVO()

    return new Workspace({
      description: description,
      id: id,
      name: name,
      ownerId: ownerId,
      planId: planId,
      slug: slug,
      status: status,
    })
  }

  public setName(name: string) {
    const nameToSet = new NameVO(name)
    if (nameToSet.get() === this.props.name.get()) return
    
    this.props.name = nameToSet
    this.props.slug = SlugVO.createFromText(nameToSet.get())
  }

  public setDescription(description: string) {
    if(description == this.props.description) return
    this.props.description = description
  }

  public setPlanId(planId: number) {
    if(planId == this.props.planId) return
    this.props.planId = planId
  }

  public getPrimiteProps(): IPrimitiveWorkspace {
    return {
      id: this.props.id.get(),
      name: this.props.name.get(),
      ownerId: this.props.ownerId.get(),
      planId: this.props.planId,
      slug: this.props.slug ? this.props.slug?.get() : "Without slug",
      status: this.props.status,
      createdAt: this.props.createdAt,
      deletedAt: this.props.deletedAt,
      description: this.props.description,
      updatedAt: this.props.updatedAt,
    }
  }

  public getProps (): IWorkspace {
    return this.props
  }

  static restore(workspaceProps: IWorkspace): Workspace {
    return new Workspace(workspaceProps)
  }
}
