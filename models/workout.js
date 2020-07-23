const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercises: [{
        type: String,
        name: String,
        duration: Number,
        distance: Number,
        weight: Number,
        sets: Number,
        reps: Number,
    }],
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;