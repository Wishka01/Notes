const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    id: mongoose.Types.ObjectId,
    title: String,
    content: String,
    date: {
        type: Date,
        default: new Date()
    },
    completed: {
        type: Boolean,
        default: false
    }
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;