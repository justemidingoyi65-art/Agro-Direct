const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// OBTENIR TOUS LES PRODUITS
router.get('/', async (req, res) => {
    try {
        const products = await Product.find().sort({ createdAt: -1 });
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: "Erreur de lecture des données" });
    }
});

// AJOUTER UN PRODUIT COMPLET
router.post('/', async (req, res) => {
    const product = new Product(req.body);
    try {
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (err) {
        res.status(400).json({ message: "Erreur lors de l'enregistrement", error: err });
    }
});

// SUPPRIMER UN PRODUIT
router.delete('/:id', async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: "Produit supprimé avec succès" });
    } catch (err) {
        res.status(500).json({ message: "Erreur de suppression" });
    }
});

module.exports = router;
