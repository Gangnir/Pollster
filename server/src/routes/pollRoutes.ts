import {Application, NextFunction, Request, Response} from "express";
import path from "path";
import { PollController } from "../controllers/pollController";

export class PollRoutes {
    public pollController: PollController = new PollController();

    public routes(app: Application): void {
        app.route("/")
        .get((req: Request, res: Response) => {
            res.sendFile(path.resolve("assets", "index.html"));
        });

        app.route("/poll")
        .post(this.pollController.createPoll);

        app.route("/poll/:pollId")
        .get(this.pollController.getPoll)
        .delete(this.pollController.deletePoll)
        .post(this.pollController.updatePoll);

        app.route("/poll/:pollId/reply")
        .get(this.pollController.getReplies)
        .post(this.pollController.submitReply);
    }
}
