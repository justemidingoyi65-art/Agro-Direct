const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

// 1. MIDDLEWARES INDISPENSABLES
// Permet à Express de lire le JSON envoyé par ton JavaScript frontend (req.body)
app.use(express.json());

// Permet de servir tes fichiers HTML, CSS et JS qui sont dans le dossier 'public'
app.use(express.static(path.join(__dirname, 'public')));

// 2. CONNEXION À LA BASE DE DONNÉES (MongoDB)
// Remplace l'URL si tu utilises MongoDB Atlas (le cloud)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connecté à MongoDB Atlas"))
  .catch((err) => console.error("❌ Erreur :", err));

// 3. DÉCLARATION DES ROUTES
// Toutes les routes de produits commenceront par /api/products
app.use('/api/products', productRoutes);
// Toutes les routes utilisateurs commenceront par /api/users
app.use('/api/users', userRoutes);

// 4. LANCEMENT DU SERVEUR
const PORT = process.env.PORT || 3000; // Utilise le port du serveur ou 3000 par défaut
app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);

});
