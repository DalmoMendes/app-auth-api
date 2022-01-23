import express, {Request, Response, NextFunction} from 'express';

const app = express();

// rotas e resolves:
app.get('/status', (req: Request, res: Response, next: NextFunction)=> {
    res.status(200).send({ foo: 'bar'});
});

// Subir servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor tá On na porta 3000!');
})