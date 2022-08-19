interface IContainer {
    routes: any;
    app: Express.Application;
}
let container: IContainer = {
    routes: new Map(),
    app: []
}
export default container;