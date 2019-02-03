import {Application, NextFunction, Request, Response} from "express";
import { PollController } from "../controllers/pollController";

export class PollRoutes {
    public pollController: PollController = new PollController();

    public routes(app: Application): void {
        app.route("/poll")
        .post(this.pollController.createPoll);

        app.route("/poll/:key")
        .get(this.pollController.getPoll);

        app.route("/poll/:pollId")
        .delete(this.pollController.deletePoll)
        .post(this.pollController.updatePoll);

        app.route("/poll/:pollId/reply")
        .get(this.pollController.getReplies)
        .post(this.pollController.submitReply);
    }
}
