import { Schema } from "mongoose";
import randomWords from "random-words";

export const PollSchema = new Schema({
    title: String,
    description: String,
    color: String,
    created: {
        type: Date,
        default: Date.now
    },
    key: {
        type: String,
        unique: true,
        lowercase: true,
        default: () => {
            return randomWords({exactly: 4, join: "-"});
        }
    },
    settings: {
        allowAdd: {
            type: Boolean,
            default: false
        },
        showResults: {
            type: Boolean,
            default: false
        }
    },
    statements: [{
        text: String,
        order: {
            type: Number,
            default: 0
        },
        type: {
            type: String,
            enum: ["single-select", "multi-select", "free-text"]
        },
        options: [{
            text: String,
            order: {
                type: Number,
                default: 0
            },
        }]
    }]
});
