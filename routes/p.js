const express = require('express');
const router = express.Router();
const Product = require('../models/product'); // On appelle le modèle

// Route pour afficher tous les produits
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: "Erreur base de données : " + err.message });
    }
});

module.exports = router;
