import type { Request, Response } from "express";
import type { routesTemplate } from "../../grabRoutes";

const data: routesTemplate = {
    type: 'get',
    route: '/',
    secure: false,
    funct: async (_req: Request, res: Response) => {
        res.send('This is the API built for Otter Bots, will be used for various things in the future!');
    }
}
export default data;
