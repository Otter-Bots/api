import type { routesTemplate } from "../../grabRoutes";
import type { Request, Response } from "express";
import container from "../../container";
const data: routesTemplate = {
    type: "get",
    route: "/routes/",
    secure: false,
    funct: async (_req: Request, res: Response) => {
        const routes: string[] = [];
        container.app._router.stack.forEach(function(r: any){
            if (r.route && r.route.path){
              routes.push(r.route.path);
            }
        })
        res.status(200).json({
            code: 200,
            routes: routes
        })
    }
}
export default data;