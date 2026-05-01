import { IdVO } from "@shared/domain/value-objects/id.vo"
import { SlugVO } from "@shared/domain/value-objects/slug.vo"
import { Workspace as PrismaWorkspace, WorkspaceMember, WorkspaceStatus } from "@prisma/client"
import { PrismaService } from "src/config/prisma/prisma.service"
import { WorkspaceRepositoryPort, WorkspaceSelectors } from "src/workspace/application/ports/workspace-repository.port"
import { Workspace } from "src/workspace/domain/entities/workspace.entity"
import { NameVO } from "src/workspace/domain/value-objects/name.vo"
import { Injectable } from "@nestjs/common"

@Injectable()
export class PrismaWorkspaceRepositoryAdapter implements WorkspaceRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  public async create(workspace: Workspace): Promise<Workspace> {
    const createdWorkspace = await this.prisma.workspace.create({
      data: {
        name: workspace.getPrimiteProps().name,
        slug: workspace.getPrimiteProps().slug ?? "Without_slug",
        id: workspace.getPrimiteProps().id,
        ownerId: workspace.getPrimiteProps().ownerId,
        planId: workspace.getPrimiteProps().planId,
      },
    })

    return this.restoreWorkSpace(createdWorkspace)
  }

  public async delete(id: IdVO): Promise<void> {
    await this.prisma.workspace.update({
      where: { id: id.get() },
      data: {
        deletedAt: new Date(),
        status: "DELETED",
      },
    })
  }

  public async findByUnique(uniqueSelectors: WorkspaceSelectors): Promise<Workspace | null> {
    const workspace = await this.prisma.workspace.findUnique({
      where: {
        id: uniqueSelectors.id,
        slug: uniqueSelectors.slug,
      },
    })
    if (!workspace) return null
    return this.restoreWorkSpace(workspace)
  }

  public async findByOwner(ownerId: IdVO): Promise<Workspace[]> {
    const workspaces = await this.prisma.workspace.findMany({
      where: {},
    })

    return workspaces.map((workspace) => this.restoreWorkSpace(workspace))
  }

  public async findMany(lastId?: string, limit?: number, slugFilter?: string, nameFilter?: string): Promise<Workspace[]> {
    const whereConfig = {
      //status: "ACTIVE" as const,
      ...(slugFilter && {
        slug: { contains: slugFilter, mode: "insensitive" as const },
      }),
      ...(nameFilter && {
        name: { contains: nameFilter, mode: "insensitive" as const },
      }),
    }

    let validCursor: { id: string } | undefined = undefined
    if (lastId) {
      const cursorExists = await this.prisma.workspace.findFirst({
        where: {
          id: lastId,
          ...whereConfig,
        },
        select: { id: true },
      })

      if (cursorExists) {
        validCursor = { id: lastId }
      }
    }

    const workspaces = await this.prisma.workspace.findMany({
      where: whereConfig,
      take: limit || 10,
      ...(validCursor && {
        skip: 1,
        cursor: validCursor,
      }),
      orderBy: { createdAt: "asc" },
    })

    return workspaces.map((workspace) => this.restoreWorkSpace(workspace))
  }

  public async update(workspace: Workspace): Promise<Workspace> {
    const { updatedAt, createdAt, deletedAt, id, ...dataToUpdate } = workspace.getPrimiteProps()
    const updatedWorkspace = await this.prisma.workspace.update({
      where: { id: id },
      data: { ...dataToUpdate },
    })
    return this.restoreWorkSpace(updatedWorkspace)
  }

  private restoreWorkSpace(workspace: PrismaWorkspace): Workspace {
    return Workspace.restore({
      id: new IdVO(workspace.id),
      name: new NameVO(workspace.name),
      ownerId: new IdVO(workspace.ownerId),
      planId: workspace.planId,
      slug: SlugVO.restore(workspace.slug),
      description: workspace.description ?? "",
      createdAt: workspace.createdAt,
      deletedAt: workspace.deletedAt,
      status: workspace.status,
      updatedAt: workspace.updatedAt,
    })
  }
}
