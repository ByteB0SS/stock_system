import { Injectable } from "@nestjs/common";
import { SlugVO } from "@shared/domain/value-objects/slug.vo";
import { PrismaService } from "src/config/prisma/prisma.service";
import { UserRepositoryPort } from "src/user/application/ports/user-repository.port";
import { User } from "src/user/domain/entities/user.entity";
import { BirthdateVO } from "src/user/domain/value-objects/birthdate.vo";
import { EmailVO } from "src/user/domain/value-objects/email.vo";
import { IdVO } from "src/user/domain/value-objects/id.vo";
import { NameVO } from "src/user/domain/value-objects/name.vo";
import { PasswordVO } from "src/user/domain/value-objects/password.vo";
import { User as prismaUser } from "generated/prisma";

@Injectable()
export class PrismaUserRepositoryAdapter implements UserRepositoryPort {
    constructor(private readonly prisma: PrismaService) { }

    async create(user: User): Promise<User> {
        const { createdAt, updatedAt, deletedAt, ...dataToSave } = user.getProps()
        const savedData = await this.prisma.user.create({ data: dataToSave })
        return this.restoreUser(savedData)
    }

    async findByEmail(email: EmailVO): Promise<User | null> {
        const user = await this.prisma.user.findFirst({ where: { email: email.get(), status: "ACTIVE" } })
        if (!user) {
            return null
        }
        return this.restoreUser(user)
    }

    async findById(id: IdVO): Promise<User | null> {
        const user = await this.prisma.user.findFirst({ where: { id: id.get(), status: "ACTIVE" } })
        if (!user) return null
        return this.restoreUser(user)
    }

    async findBySlug(slug: SlugVO): Promise<User | null> {
        const user = await this.prisma.user.findUnique({ where: { slug: slug.get(), status: "ACTIVE" } })
        if (!user) return null
        return this.restoreUser(user)
    }

    async findMany(limit: number = 15, lastId: string): Promise<User[]> {
        const users = await this.prisma.user.findMany({
            where: {
                status: "ACTIVE"
            },
            take: limit,
            ...(lastId && { skip: 1, cursor: { id: lastId } }),
            orderBy: { createdAt: "asc" }
        })
        return users.map(user => this.restoreUser(user))
    }

    async delete(id: IdVO): Promise<void> {
        await this.prisma.user.update({
            where: { id: id.get() }, data: {
                deletedAt: new Date(),
                status: "DELETED"
            }
        })
    }

    async update(user: User): Promise<User> {
        const { updatedAt, createdAt, deletedAt, id, ...dataToUpdate } = user.getProps()
        const updatedUser = await this.prisma.user.update({ where: { id: id }, data: { ...dataToUpdate } })
        return this.restoreUser(updatedUser)
    }

    private restoreUser(savedData: prismaUser): User {
        return User.restore({
            id: new IdVO(savedData.id),
            name: new NameVO(savedData.name),
            email: new EmailVO(savedData.email),
            password: new PasswordVO(savedData.password),
            birthdate: new BirthdateVO(savedData.birthdate),
            slug: SlugVO.restore(savedData.slug),
            status: savedData.status as any,
            role: savedData.role as any,
            createdAt: savedData.createdAt,
            updatedAt: savedData.updatedAt,
            deletedAt: savedData.deletedAt,
        });
    }
}
