models/product.js
const mongoose = require('mongoose');

// Définition du schéma pour un produit agricole
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Le nom du produit est obligatoire"],
    trim: true
  },
  description: {
    type: String,
    required: [true, "La description est obligatoire"]
  },
  price: {
    type: Number,
    required: [true, "Le prix est obligatoire"],
    min: 0
  },
  category: {
    type: String,
    enum: ['Légumes', 'Fruits', 'Céréales', 'Élevage', 'Autre'],
    default: 'Autre'
  },
  stock: {
    type: Number,
    required: true,
    default: 0
  },
  imageUrl: {
    type: String, // Lien vers l'image du produit
    default: 'https://via.placeholder.com/150'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Exportation du modèle
module.exports = mongoose.model('Product', productSchema);
