import { Request, Response } from "express";
import { model, Types } from "mongoose";
import { LogHelper } from "../helpers/logHelper";
import { PollSchema } from "../models/pollModel";
import { ReplySchema } from "../models/replyModel";

const Poll = model("Poll", PollSchema);
const Reply = model("Reply", ReplySchema);

export class PollController {
    public createPoll(req: Request, res: Response) {
        try {
            const poll = new Poll(req.body);

            poll.save((err, result) => {
                if (err) {
                    LogHelper.logError(err);
                    return res.send(err);
                }

                return res.json(result);
            });
        } catch (error) {
            LogHelper.logError(error);
            return res.json(null);
        }

    }

    public updatePoll(req: Request, res: Response) {
        try {
            Poll.findByIdAndUpdate(req.params.pollId, req.body, { new: true }, (err, result) => {
                if (err) {
                    LogHelper.logError(err);
                    return res.send(err);
                }

                return res.json(result);
            });
        } catch (error) {
            LogHelper.logError(error);
            return res.json(null);
        }
    }

    public getPoll(req: Request, res: Response) {
        try {
            const key = Types.ObjectId.isValid(req.params.pollId) ? "_id" : "key";
            const condition = {};
            condition[key] = req.params.pollId;

            Poll.findOne(condition, (err, result) => {
                if (err) {
                    LogHelper.logError(err);
                    return res.send(err);
                }
                LogHelper.logDebug(JSON.stringify(result));
                return res.json(result);
            });
        } catch (error) {
            LogHelper.logError(error);
            return res.json(null);
        }
    }

    public deletePoll(req: Request, res: Response) {
        try {
            Poll.findByIdAndDelete(req.params.pollId, (err, result) => {
                if (err) {
                    LogHelper.logError(err);
                    return res.send(err);
                }

                return res.json(result);
            });
        } catch (error) {
            LogHelper.logError(error);
            return res.json(false);
        }
    }

    public submitReply(req: Request, res: Response) {
        try {
            const reply = new Reply(req.body);

            reply.save((err, result) => {
                if (err) {
                    LogHelper.logError(err);
                    return res.send(err);
                }

                return res.json(result);
            });
        } catch (error) {
            LogHelper.logError(error);
            return res.json(null);
        }
    }

    public getReplies(req: Request, res: Response) {
        try {
            Reply.find({
                pollId: req.params.pollId
            }, (err, result) => {
                if (err) {
                    LogHelper.logError(err);
                    return res.send(err);
                }

                return res.json(result);
            });
        } catch (error) {
            LogHelper.logError(error);
            return res.json(null);
        }
    }
}
