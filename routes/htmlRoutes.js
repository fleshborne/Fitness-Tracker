const router = require('express').Router();
const path = require('path');
// html routes for each page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/public/index.html'));
});

router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/public/stats.html'));
});

router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/public/exercise.html'));
});

module.exports = router;