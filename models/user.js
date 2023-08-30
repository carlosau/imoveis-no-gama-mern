import {model, Schema, ObjectId} from 'mongoose';

const schema = new Schema({
    username: { type: String, required: true, trim: true, unique: true, lowercase: true },
    name: { type: String, trim: true, default: '' },
    email: { type: String, required: true, trim: true, unique: true, lowercase: true },
    password: { type: String, required: true, maxLength: 128 },
    address: { type: String, default: '' },
    company: { type: String, default: '' },
    whatsapp: { type: String, default: '' },
    photo: {},
    role: { type: [String], default: ["Buyer"], enum: ["Admin", "Buyer", "Seller"] },
    enquiredProperties: [{ type: ObjectId, ref: 'Ad' }],
    wishList: [{ type: ObjectId, ref: 'Ad' }],
    resetCode: {type: String, default: ''},
}, {timestamps: true})

export default model('User', schema);