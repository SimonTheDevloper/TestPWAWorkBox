module.exports = {
    // Das Verzeichnis, das Workbox nach Dateien durchsuchen soll
    "globDirectory": "./",

    // Dateitypen, die in den Cache aufgenommen werden sollen
    "globPatterns": [
        "**/*.{html,css,js,png,json}"
    ],

    // Der endgültige Pfad und Dateiname deines Service Workers
    "swDest": "./service-worker.js",

    // Der öffentliche Pfad deines Projekts auf GitHub Pages
    "modifyURLPrefix": {
        "": "/TestPWAWorkBox/"
    }
};