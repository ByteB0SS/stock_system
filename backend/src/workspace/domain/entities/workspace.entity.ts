// model Workspace {
//   id        String          @id @default(uuid())
//   name      String
//   slug      String          @unique
//   planId    Int             @map("plan_id")
//   ownerId   String          @map("owner_id")
//   statsus   WorkspaceStatus @default(ACTIVE)
//   createdAt DateTime        @default(now()) @map("created_at")
//   updatedAt DateTime?       @updatedAt @map("updated_at")
//   deletedAt DateTime?       @map("deleted_at")

import { IdVO } from "@shared/domain/value-objects/id.vo";
import { SlugVO } from "@shared/domain/value-objects/slug.vo";
import { NameVO } from "src/user/domain/value-objects/name.vo";

//   // relations
//   owner              User                @relation(fields: [ownerId], references: [id])
//   plan               Plan                @relation(fields: [planId], references: [id])
//   products           Product[]
//   member             WorkspaceMember[]
//   inventoryMoviments InventoryMovement[]

//   // settings
//   @@index([ownerId])
//   @@map("workspaces")
// }

// export interface IUser {
//     readonly id: IdVO
//     name: NameVO
//     email: EmailVO
//     slug: SlugVO
//     password: PasswordVO
//     birthdate: BirthdateVO
//     status: "ACTIVE" | "DELETED" | "PADDING" | "SUSPENDED"
//     role: "ADMIN" | "NORMAL"
//     deletedAt?: Date | null
//     readonly createdAt?: Date | null
//     updatedAt?: Date | null
// }

export interface IWorkspace {
    readonly id: IdVO
    name: NameVO
    slug: SlugVO
    planId: number
    ownerId: IdVO
    status?: "ACTIVE" | "DELETED" | "PADDING" | "SUSPENDED"
    deletedAt?: Date | null
    readonly createdAt?: Date | null
    updatedAt?: Date | null
}

export class Workspace {
    private readonly props: IWorkspace
    private constructor (workspaceProps: IWorkspace) {
        this.props = workspaceProps
        Object.freeze(this)
    }
    
    static createInstance (name: string, planId: number, ownerId: IdVO, slug: SlugVO, ): Workspace {
        
    }
}
