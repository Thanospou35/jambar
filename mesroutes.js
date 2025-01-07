
const express = require("express");
const router = express.Router();

// Define routes
router.get("/", (req, res) => {
    res.render('index'); // Render the "index.ejs" view
});

router.get("/contact", (req, res) => {
    res.render('contact'); // Render the "contact.ejs" view
});

router.get("/service", (req, res) => {
    res.render('service'); // Render the "service.ejs" view
});

// 404 Error handler (Keep this at the end)
router.use((req, res) => {
    res.status(404).render('erreur'); // Render the "erreur.ejs" view
});

module.exports = router;
