import type { routesTemplate } from "../../grabRoutes";
import type { Request, Response } from "express";
import container from "../../container";
const data: routesTemplate = {
    type: "delete",
    route: "/blacklist/delete/:id",
    secure: true,
    funct: async (req: Request, res: Response) => {
        const id = req.params.id;
        const blacklist = await container.db.get("blacklist");
        if (blacklist.includes(id)) {
            await container.db.pull("blacklist", id);
            res.status(200).json({
                code: 200,
                message: "Successfully deleted from blacklist",
                id: id
            })
        } else {
            res.status(200).json({
                code: 200,
                message: "Not found in blacklist",
                id: id
            })
        }
    }
}
export default data;