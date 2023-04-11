const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/', apiController.getLanchoneteInfo);
router.get('/pratos', apiController.getPratos);
router.get('/carrinho', apiController.getCarrinho);

module.exports = router;
