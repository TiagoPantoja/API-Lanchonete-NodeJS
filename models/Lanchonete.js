const mongoose = require('mongoose');

const lanchoneteSchema = new mongoose.Schema({
nome: {
type: String,
required: true
},
endereço: {
type: String,
required: true
},
cidade: {
type: String,
required: true
}
});

module.exports = mongoose.model('Lanchonete', lanchoneteSchema);