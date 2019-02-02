import {Application, NextFunction, Request, Response} from "express";
import { PollController } from "../controllers/pollController";

export class PollRoutes {
    public pollController: PollController = new PollController();

    public routes(app: Application): void {
        app.route("/poll")
        .post(this.pollController.savePoll);

        app.route("/poll/:key")
        .get(this.pollController.getPoll)
        .delete(this.pollController.deletePoll)
        .put(this.pollController.submitReply);
    }
}
