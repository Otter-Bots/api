import container from "../container";
import logger from "./logger";
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;
import { QuickDB, MySQLDriver } from 'quick.db';
(async () => {
    const mysql = new MySQLDriver({
        host:     DB_HOST,
        user:     DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME
    });
    
    await mysql.connect();
    // It is important to connect MySQL
    
    const db = new QuickDB({ driver: mysql });
    logger.success(`Connected to ${DB_NAME} DB`);
    container.db = db;
    container.dbConnection = mysql;
})();