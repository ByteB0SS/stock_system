export class PasswordVO {
    private readonly value: string 

    constructor (passwordHashed: string) {
        this.value = passwordHashed
    }

    static validateComplexity (password: string): void {
        if (password.length < 8) {
            throw new Error("Password must be at least 8 characters long.");
        }

        if (!/[A-Z]/.test(password)) {
            throw new Error("Password must contain at least one uppercase letter.");
        }

        if (!/[a-z]/.test(password)) {
            throw new Error("Password must contain at least one lowercase letter.");
        }

        if (!/\d/.test(password)) {
            throw new Error("Password must contain at least one number.");
        }

        if (!/[@$!%*?&]/.test(password)) {
            throw new Error("Password must contain at least one special character (@$!%*?&).");
        }
    }

    get (): string {
        return this.value
    }
}