import { Pool } from 'pg';

const connectionString = 'postgres://postgres:ceproirr_post@localhost:5432/usuarios';

const db = new Pool({ connectionString });

export default db; 
