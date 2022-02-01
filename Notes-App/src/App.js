import { useEffect, useState } from 'react';
import Axios from 'axios';
import Header from './components/Header/Header';
import './App.css';
import NotesLayout from './components/NotesLayout/NotesLayout';
import FloatingButton from './components/FloatingButton/FloatingButton.js';

function App() {

  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    try {
      const result = await Axios.get('http://localhost:3001/api/notes');
      if (result.data)
        setNotes(result.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  const addNote = () => {
    console.log("Add Note");
    const newNote = {
      id: 10,
      title: "",
      content: "",
      date: new Date(),
      completed: false
    };
    setNotes([newNote, ...notes]);
  }

  return (
    <div className="app">
      <Header showAll={showAll} setShowAll={setShowAll} setSearch={setSearch} />
      <NotesLayout search={search} showAll={showAll} notes={notes} setNotes={setNotes} />
      <FloatingButton onClickHandler={addNote} />
    </div>
  );
}

export default App;
