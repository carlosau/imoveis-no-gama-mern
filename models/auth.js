import {model, Schema, ObjectId} from 'mongoose';

const schema = new Schema({
    name: { type: String, required: true, trim: true },

})

export default model('User', schema);