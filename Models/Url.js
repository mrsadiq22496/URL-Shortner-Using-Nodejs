import { model, Schema } from "mongoose";

const urlSchema = new Schema({
    originalurl: {
        type: String,
        required: true,
    },
    shortId: {
        type: String,
        unique: true,
    },
    createdAt: {
        type: Date, 
        default: Date.now,
    }
});

const urlModel= model('url', urlSchema);
export default urlModel;