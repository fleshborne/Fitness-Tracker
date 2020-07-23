const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/public/index.html'));
    res.send("Home Page");
});

router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/public/stats.html'));
    res.send("Stats Page");
});

router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/public/exercise.html'));
    res.send("Exercise Page");
});

module.exports = router;