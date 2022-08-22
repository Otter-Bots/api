import type { Request, Response } from "express";

const data = {
    type: 'get',
    route: '/',
    funct: async (_req: Request, res: Response) => {
        res.send('Hello World!');
    }
}
export default data;