const router = require('express').Router();
const db = require('../models/');
// CRUD implementation 

// CREATE
router.post('/workouts', (req, res) => {
    db.Workout.create({})
        .then(workout => res.json(workout))
        .catch(err => res.json(err));
});

router.post('/workouts', (req, res) => {
    db.Workout.create(req.body)
        .then((workout) => res.json(workout))
        .catch((err) => res.json(err));
})

// READ
router.get('/workouts', (req, res) => {
    db.Workout.find()
        .then((workout) => res.json(workout))
        .catch((err) => (err));
});
router.get('/workouts/range', (req, res) => {
    db.Workout.find()
        .then((workout) => res.json(workout))
        .catch((err) => res.json(err));
})

// UPDATE
router.put('/workouts/:id', (req, res) => {
    db.Workout.findByIdAndUpdate(req.params.id, {
            $push: {
                exercises: req.body
            },
        }).then((workout) => res.json(workout))
        .catch((err) => res.json(err));

});

// router.put('')

// TODO: create delete workout button and call new route.
// router.put('/workouts/:id, (req,res) => {
//  db.Workout.findByIdAndDelete({}).then();
// })
module.exports = router;