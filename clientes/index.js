const express = require('express');
const router = express.Router();
const api = require('../api');

router.get('/', async (req, res) => {
try {
const clientes = await api.Cliente.find({});
res.json(clientes);
} catch (err) {
        res.status(500).json({ message: err.message });
    }
});
