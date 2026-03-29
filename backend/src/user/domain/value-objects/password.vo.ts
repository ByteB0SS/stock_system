import { HttpException } from "@nestjs/common";

export class PasswordVO {
    private readonly value: string 

    constructor (passwordHashed: string) {
        this.value = passwordHashed
    }

    static validateComplexity (password: string): void {
        if (password.length < 8) {
            throw new HttpException("A senha deve ter pelo menos 8 caracteres.", 400);
        }

        if (!/[A-Z]/.test(password)) {
            throw new HttpException("A senha deve conter pelo menos uma letra maiúscula.", 400);
        }

        if (!/[a-z]/.test(password)) {
            throw new HttpException("A senha deve conter pelo menos uma letra minúscula.", 400);
        }

        if (!/\d/.test(password)) {
            throw new HttpException("A senha deve conter pelo menos um número.", 400);
        }

        if (!/[@$!%*?&]/.test(password)) {
            throw new HttpException("A senha deve conter pelo menos um caractere especial (@$!%*?&).", 400);
        }
    }

    get (): string {
        return this.value
    }
}