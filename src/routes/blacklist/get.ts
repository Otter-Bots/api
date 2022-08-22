import type { routesTemplate } from "../../grabRoutes";
import type { Request, Response } from "express";
import container from "../../container";
const data: routesTemplate = {
    type: "get",
    route: "/blacklist/get/:id",
    secure: false,
    funct: async (req: Request, res: Response) => {
        const id = req.params.id;
        const blacklist = await container.db.get("blacklist");
        if (blacklist.includes(id)) {
            res.status(200).json({
                code: 200,
                message: "Successfully found in blacklist",
                id: id,
                found: true
            })
        } else {
            res.status(200).json({
                code: 200,
                message: "Not found in blacklist",
                id: id,
                found: false
            })
        }
    }
}
export default data;