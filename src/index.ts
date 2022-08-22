import express from 'express';
import "dotenv/config";
import container from './container';
import logger from './utils/logger';
import { grabRoutes } from './grabRoutes';
import "./utils/db";
const { PORT } = process.env;
const app = express();
container.app = app;
(async () => {
    await grabRoutes(app);
})()
app.listen(Number(PORT), () => {
    logger.info(`Listening on port ${PORT}`);
});