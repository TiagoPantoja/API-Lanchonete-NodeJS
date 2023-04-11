const api = require('../../models');

exports.getLanchoneteInfo = async (req, res) => {
try {
const lanchonete = await api.Lanchonete.findOne({});
res.json(lanchonete);
} catch (err) {
res.status(500).json({ message: err.message });
}
};

exports.getPratos = async (req, res) => {
try {
const pratos = await api.Prato.find({});
res.json(pratos);
} catch (err) {
res.status(500).json({ message: err.message });
}
};

exports.getCarrinho = async (req, res) => {
    try {
        const carrinho = await api.Carrinho.findOne({});
        res.json(carrinho);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};