//naming convention: singular and lowercase
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({
    make: {type: String, required: true},
    model: {type: String, required: true},
    year: {type: Number, required: true},
    rate: {type: Number, required: true},
    rented: {type: Boolean, default: false}


}, {
    timestamps: true
})

const Cars = mongoose.model('Cars', carSchema);

module.exports = Cars;