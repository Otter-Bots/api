import type { Request, Response } from "express";

const data = {
    type: 'get',
    route: '/',
    funct: (_req: Request, res: Response) => {
        res.send('Hello World!');
    }
}
export default data;