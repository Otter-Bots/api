import type { Request, Response } from "express";
import type { routesTemplate } from "../../grabRoutes";

const data: routesTemplate = {
    type: 'get',
    route: '/',
    secure: false,
    funct: async (_req: Request, res: Response) => {
        res.send('Hello World!,\n This is the api for Otter Bots and the respective Commissions');
    }
}
export default data;