import * as bodyParser from "body-parser";
import express from "express";
import { connect } from "mongoose";
import { PollRoutes } from "./routes/pollRoutes";

class App {
    public app: express.Application;
    public pollRouteProvider: PollRoutes = new PollRoutes();
    public mongoUrl: string = "mongodb://localhost:27017/pollster";

    constructor() {
        this.app = express();
        this.config();
        this.initMongo();
        this.pollRouteProvider.routes(this.app);
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private initMongo(): void {
        connect(this.mongoUrl, {useNewUrlParser: true});
    }
}

export default new App().app;
