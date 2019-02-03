import { Request, Response } from "express";
import { model } from "mongoose";
import { PollSchema } from "../models/pollModel";
import { ReplySchema } from "../models/replyModel";

const Poll = model("Poll", PollSchema);
const Reply = model("Reply", ReplySchema);

export class PollController {
    public createPoll(req: Request, res: Response) {
        const poll = new Poll(req.body);

        poll.save((err, result) => {
            return err ? res.send(err) : res.json(result);
        });
    }

    public updatePoll(req: Request, res: Response) {
        Poll.findByIdAndUpdate(req.params.pollId, req.body, { new: true }, (err, result) => {
            return err ? res.send(err) : res.json(result);
        });
    }

    public getPoll(req: Request, res: Response) {
        Poll.find({
            $or: [{
                key: req.params.pollId
            }, {
                _id: req.params.pollId
            }]
        }, (err, poll) => {
            return err ? res.send(err) : res.json(poll);
        });
    }

    public deletePoll(req: Request, res: Response) {
        Poll.findByIdAndDelete(req.params.pollId, (err) => {
            return err ? res.send(err) : true;
        });
    }

    public submitReply(req: Request, res: Response) {
        const reply = new Reply(req.body);

        reply.save((err, result) => {
            return err ? res.send(err) : res.json(result);
        });
    }

    public getReplies(req: Request, res: Response) {
        Reply.find({
            pollId: req.params.pollId
        }, (err, result) => {
            return err ? res.send(err) : res.json(result);
        });
    }
}
