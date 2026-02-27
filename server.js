const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/p'); // On utilise le nom 'p' que tu as créé

const app = express();
app.use(cors());
app.use(express.json());

// Connexion à la base de données
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connecté à MongoDB'))
  .catch(err => console.log('Erreur MongoDB:', err));

// Routes
app.use('/api/products', productRoutes);

// Route de test pour voir si ça marche
app.get('/', (req, res) => res.send('Le serveur fonctionne !'));

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log('Serveur lancé sur le port ' + PORT));




