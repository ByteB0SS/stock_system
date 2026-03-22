import { HashPort } from "@shared/application/ports/hash.port";
import * as bcrypt from 'bcryptjs';

export class BcryptHashAdapter implements HashPort {
    private readonly salts = 10

    constructor () {}

    async hash(toGen: string): Promise<string> {
        const hashed = await bcrypt.hash(toGen, this.salts)
        return hashed
    }

    async isValid (toCompare: string, hashed: string): Promise<boolean> {
        return await bcrypt.compare(toCompare, hashed)
    }

}