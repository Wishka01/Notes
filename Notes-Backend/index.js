const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Note = require('./Models/Note');
const app = express();

app.use(cors());
app.use(express.json());

// Database Config
require('./mongooseConfig');

// End Points
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/notes', (req, res) => {
    Note.find({})
        .then((notes) => {
            if (notes.length === 0) {
                res.status(204).end();
                return;
            }

            res.status(200).json(notes);
        }).catch((err) => {
            res.status(404);
        });
});

app.get('/api/notes/:id', (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).end();
        return;
    }

    Note.findById(id)
        .then((foundedNote) => {
            if (!foundedNote) {
                res.status(204).end();
                return;
            }

            res.status(302).json(foundedNote);
        }).catch((err) => {
            console.error(err);
        });
});

app.post('/api/notes', (req, res) => {
    const { note } = req.body;
    const newNote = new Note({
        title: note.title,
        content: note.content,
        date: note.date
    });

    newNote.save()
        .then((savedNote) => {
            console.log({ savedNote });
            res.status(201).json(savedNote);
        }).catch((err) => {
            console.error(err);
        });
});

app.delete('/api/notes/:id', (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).end();
        return;
    }

    Note.findByIdAndDelete(id)
        .then((deletedNote) => {
            if (!deletedNote) {
                res.status(204).end();
                return;
            }

            res.status(200).json(deletedNote);
        }).catch((err) => {
            console.error(err);
        });
});

app.put('/api/notes/:id', (req, res) => {
    const { note } = req.body;
    const { id } = req.params;

    Note.findOneAndUpdate({ _id: id }, {
        title: note.title,
        content: note.content,
        date: note.date,
        completed: note.completed
    }, { new: true })
        .then((updatedNote) => {
            if (!updatedNote) {
                res.status(204).end();
                return;
            }

            res.status(200).json(updatedNote);
        }).catch((err) => {
            console.error(err);
        });
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});