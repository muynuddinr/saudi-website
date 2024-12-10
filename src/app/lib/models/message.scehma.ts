import mongoose from "mongoose";

const schema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
 name:{
    type: String,
    required: true,
    },
    message: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Message = mongoose.models.Message || mongoose.model("Message", schema);

export default Message;
