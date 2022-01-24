import User from '../models/user.models';
import db from '../routes/db';

class UserRepository {

     async findAllUsers(): Promise<User[]> {
        const query = `
            SELECT * FROM usuarios
        `;
        const { rows } = await db.query<User>(query);
        return rows || [];
    }

}

// exportar uma instância do repository
export default new UserRepository();