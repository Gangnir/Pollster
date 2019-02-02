import * as bodyParser from "body-parser";
import express from "express";
import { PollRoutes } from "./routes/pollRoutes";

class App {

    public app: express.Application;
    public pollRouteProvider: PollRoutes = new PollRoutes();

    constructor() {
        this.app = express();
        this.config();
        this.pollRouteProvider.routes(this.app);
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

}

export default new App().app;
