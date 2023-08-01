//naming convention: singular and lowercase
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({
    carClass: {type: String, required: true},
    description: {type: String, required: true},
    model: {type: String, required: true},
    year: {type: Number, required: true},
    rate: {type: Number, required: true},
    available: {type: Boolean, default: false},
    image: {type: String, required: true},
}, {
    timestamps: true
})

const Car = mongoose.model('Car', carSchema);

module.exports = Car;