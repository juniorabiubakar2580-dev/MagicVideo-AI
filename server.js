const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/generate-video', (req, res) => {
    const { prompt, duration } = req.body;
    
    if (!prompt) {
        return res.status(400).json({ error: 'Le champ prompt est requis.' });
    }

    // Simulation de génération de vidéo IA
    res.json({
        success: true,
        message: 'Génération de la vidéo en cours...',
        videoDetails: {
            prompt,
            duration: duration || '5s',
            status: 'processing'
        }
    });
});

app.listen(PORT, () => {
    console.log(`Serveur MagicVideo AI démarré sur le port ${PORT}`);
});
