import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from 'http-status-codes';

const userRoute = Router();

// get/users (READ ALL)
userRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users = [{ userName: 'Dalmo' }];
    res.status(StatusCodes.OK).send({ users });
});

// get/users/:cod (READ COD)
userRoute.get('/users/:cod', (req: Request<{ cod: string }>, res: Response, next: NextFunction) => {
    const cod = req.params.cod;
    res.status(StatusCodes.OK).send({ cod });
});

// post/users (CREATE)
userRoute.post('/users', (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;
    res.status(StatusCodes.CREATED).send(newUser);
});

// put/users/:cod (UPDATE)
userRoute.put('/users/:cod', (req: Request<{ cod: string }>, res: Response, next: NextFunction) => {
    const cod = req.params.cod;
    const modifiedUser = req.body;
    modifiedUser.cod = cod;

    res.status(StatusCodes.OK).send({ modifiedUser });
});

// delete/users/:cod (DELETE)
userRoute.delete('/users/:cod', (req: Request<{ cod: string }>, res: Response, next: NextFunction) => {
    //const cod = req.params.cod;
    res.status(StatusCodes.OK);
});

export default userRoute;