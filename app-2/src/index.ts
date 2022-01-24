import express from 'express';
import statusRoute from './routes/status.routes';
import userRoute from './routes/user.routes';

const app = express();

// Configurações da aplicação:--------------------------------------------------->
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurações de Rotas:------------------------------------------------------->
app.use(statusRoute); // Status
app.use(userRoute); // CrudUsers

// Subir servidor na porta 3000 ------------------------------------------------->
app.listen(3000, () => {
    console.log('Servidor tá On na porta 3000!');
});