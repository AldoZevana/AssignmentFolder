const mongoose = require('mongoose');
const ProductManagerSchema = new mongoose.Schema({
    title: { type: String },
    price: { type: Number },
    Description: { type: String }
}, { timestamps: true });
module.exports = mongoose.model('ProductManager', ProductManagerSchema);

