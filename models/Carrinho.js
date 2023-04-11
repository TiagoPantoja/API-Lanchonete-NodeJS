const mongoose = require('mongoose');

const carrinhoSchema = new mongoose.Schema({
id: {
type: Number,
required: true,
unique: true
},
data: {
type: Date,
required: true
},
cliente: {
type: mongoose.Schema.Types.ObjectId,
ref: 'Cliente',
required: true
}
});

module.exports = mongoose.model('Carrinho', carrinhoSchema);