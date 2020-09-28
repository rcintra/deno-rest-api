import database from "../../../helpers/database.ts";
import User from "../dto/user.dto.ts";

class UserRepository {

    async findAll(): Promise<any> {
        return await database.query("SELECT id,name FROM users ORDER BY id ASC;")
    }

    async findById(id: number): Promise<any> {
        return await database.query({
            text: "SELECT id,name FROM users WHERE id = $1;",
            args: [id]
        })
    }

    async create(user: User): Promise<any> {
        return await database.query({
            text: "INSERT INTO users (name) VALUES ($1)",
            args: [user.name]
        })
    }
}

export default new UserRepository();