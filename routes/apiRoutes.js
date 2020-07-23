const router = require('express').Router();
const Workout = require('../models/workout');

router.post('/api/workout', (req, res) => {
    Workout.Create({}).then();
});
module.exports = router;