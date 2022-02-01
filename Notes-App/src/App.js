import { useEffect, useState } from 'react';
import Axios from 'axios';
import Header from './components/Header/Header';
import './App.css';
import NotesLayout from './components/NotesLayout/NotesLayout';
import FloatingButton from './components/FloatingButton/FloatingButton.js';
import NoteForm from './components/NoteForm/NoteForm';

function App() {

  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [newNote, setNewNote] = useState(false);
  const [contextTarget, setContextTarget] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const result = await Axios.get('http://localhost:3001/api/notes');
        if (result.data)
          setNotes(result.data);
      } catch (err) { console.error(err); }
    }

    fetchNotes();
  }, []);

  const onClickHandler = (event) => {
    const contextMenu = document.getElementById('context-menu');
    if (event.target != contextMenu) {
      contextMenu.classList.remove('menu-visible');
    }
  }

  const addNote = async (newNote) => {
    setNotes([...notes, newNote]);
    setNewNote(false);
    await Axios.post('http://localhost:3001/api/notes', { note: newNote })
      .then((result) => {
        console.log(result.data);
      }).catch((err) => {
        console.error(err);
        setNotes(notes.filter((note) => note._id !== newNote._id ));
      });
  }

  const updateNote = async (id, note) => {
    await Axios.put(`http://localhost:3001/api/notes/${id}`, { note })
      .then((result) => {
        console.log(result.data);
      }).catch((err) => {
        console.error(err);
      });
  }

  const deleteNote = async () => {
    await Axios.delete(`http://localhost:3001/api/notes/${contextTarget}`)
      .then((result) => {
        console.log(result.data);
        setNotes(notes.filter((note) => note._id !== contextTarget));
      }).catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className="app" onClick={onClickHandler}>
      <Header showAll={showAll} setShowAll={setShowAll} setSearch={setSearch} />
      <NotesLayout search={search} showAll={showAll} notes={notes} setNotes={setNotes} setContextTarget={setContextTarget} updateNote={updateNote} deleteNote={deleteNote} />
      <FloatingButton setNewNote={setNewNote} />
      {
        newNote ?
          <NoteForm addNote={addNote} setNewNote={setNewNote} />
          : null
      }
    </div>
  );
}

export default App;
