const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedSchema = new Schema({
    content: { type: String },
    image: {
        imageName: { type: String },
        imagePath: { type: String }
    },
    likes: { type: Number, default: 0, required: true },
    creator: {
        name: { type: String, default: "John Smith", required: true },
        role: { type: String, default: "Entrepreneur", required: true }
    }
}, { timestamps: true });

module.exports = mongoose.model('Feeds', feedSchema);