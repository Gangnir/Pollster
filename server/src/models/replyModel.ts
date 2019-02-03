import { Schema } from "mongoose";

export const ReplySchema = new Schema({
    pollId: String,
    created: {
        type: Date,
        default: Date.now
    },
    statementReplies: [{
        statementId: String,
        text: String,
        optionIds: []
    }]
});
