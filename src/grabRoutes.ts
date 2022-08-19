import type { Application } from "express";
import fs from "node:fs";
import container from "./container";
import logger from "./utils/logger";
const directory = `${__dirname}/routes`;
export async function grabRoutes(app: Application) {
    logger.info("Started Loading Routes")
    const routeFolders = fs.readdirSync(directory);
    for (const folder of routeFolders) {
	    const routeFiles = fs.readdirSync(`${directory}/${folder}`).filter(file => file.endsWith('.js'));
	    for (const file of routeFiles) {
		    const route = require(`${directory}/${folder}/${file}`);
            route.name = `${folder}_${file.replace('.js', '')}_${route.default.type}`;
		    container.routes.set(route.name, {
                type: route.default.type,
                funct: route.default.funct,
                route: route.default.route
            });
            createRoute(app, route.default.type, route.default.route, route.default.funct);
            logger.success(`Loaded Route: ${route.name}`);
	    }
    }
    logger.success("Finished Loading Routes")
}
function createRoute(app: Application, type: string, route: string, funct: Function) {
    switch (type) {
        case "get":
            return app.get(route, ((req, res) => {
                funct(req, res)
        }));
        case "post":
            return app.post(route, ((req, res) => {
                funct(req, res)
        }));
        case "put":
            return app.put(route, ((req, res) => {
                funct(req, res)
        }));
        case "delete":
            return app.delete(route, ((req, res) => {
                funct(req, res)
        }));
        default:
            return logger.warning(`Invalid Route Type: ${type} on ${route}`);
    }
}