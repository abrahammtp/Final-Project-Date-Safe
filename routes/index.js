const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
mongoURI = 'mongodb://localhost/test';
mongoose.connect(process.env.MONGOLAB_URI || mongoURI);

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app instead
router.use((req, res) =>
    res.sendFile(path.join(__dirname, "../client/public/index.html"))
);

module.exports = router;