import type { routesTemplate } from "../../grabRoutes";
import type { Request, Response } from "express";
import container from "../../container";
const data: routesTemplate = {
    type: "get",
    route: "/blacklist/getAll",
    secure: false,
    funct: async (_req: Request, res: Response) => {
        const blacklist = await container.db.get("blacklist");
        res.status(200).json({
            code: 200,
            blacklist: blacklist
        })
    }
}
export default data;