import { Schema } from "mongoose";
import * as randomWords from "random-words";

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
            return randomWords({min: 2, max: 4, join: "-"});
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
        order: Number,
        type: {
            type: String,
            enum: ["single-select", "multi-select", "free-text"]
        },
        options: [{
            text: String,
            order: Number
        }]
    }]
});
