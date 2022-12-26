import type { Request, Response } from "express";
import type { routesTemplate } from "../../grabRoutes";

const data: routesTemplate = {
    type: 'get',
    route: '/',
    secure: false,
    funct: async (_req: Request, res: Response) => {
        res.send('The API powers the Otter Bots Network and connected projects.');
    }
}
export default data;
