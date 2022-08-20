import { blue, yellow, red, green } from 'colorette'
import container from '../container'
class logger {
    public info(msg: string) {
        console.log(blue(`[INFO] ${msg}`))
    }
    public warning(msg: string) {
        console.log(yellow(`[WARNING] ${msg}`))
    }
    public error(msg: string) {
        console.log(red(`[ERROR] ${msg}`))
        container.dbConnection.disconnect();
        process.exit(1);
    }
    public success(msg: string) {
        console.log(green(`[SUCCESS] ${msg}`))
    }
    public debug(msg: string) {
        if (Boolean(process.env.DEBUG) === false) return;
        console.log(yellow(`[DEBUG] ${msg}`))
    }
}
export default new logger();