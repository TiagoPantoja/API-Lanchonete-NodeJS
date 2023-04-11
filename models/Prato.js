const mongoose = require('mongoose');

const pratoSchema = new mongoose.Schema({
nome: {
type: String,
required: true
},
ingredientes: {
type: Array,
required: true
},
preco: {
type: Number,
required: true
}
});

module.exports = mongoose.model('Prato', pratoSchema);