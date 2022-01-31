import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import './App.css';
import NotesLayout from './components/NotesLayout/NotesLayout';
import FloatingButton from './components/FloatingButton/FloatingButton.js';

function App() {

  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [notes, setNotes] = useState([]);

  const data = [
    {
      id: 1,
      title: "Primer Nota",
      content: "Primer Nota de la App",
      date: new Date(),
      completed: true
    },
    {
      id: 2,
      title: "Cocinar",
      content: "Hacer el postre.",
      date: new Date(),
      completed: false
    },
    {
      id: 3,
      title: "Lavar",
      content: "Lavar los platos de la cocina.",
      date: new Date(),
      completed: false
    },
    {
      id: 4,
      title: "Estudiar",
      content: "Estudiar MERN Stack.",
      date: new Date(),
      completed: false
    },
    {
      id: 5,
      title: "Lavar",
      content: "Lavar los platos de la cocina.",
      date: new Date(),
      completed: false
    },
    {
      id: 6,
      title: "Estudiar",
      content: "Estudiar MERN Stack.",
      date: new Date(),
      completed: true
    },
    {
      id: 7,
      title: "Lavar",
      content: "Lavar los platos de la cocina.",
      date: new Date(),
      completed: false
    },
    {
      id: 8,
      title: "Estudiar",
      content: "Estudiar MERN Stack.",
      date: new Date(),
      completed: false
    },
    {
      id: 9,
      title: "Lavar",
      content: "Lavar los platos de la cocina.",
      date: new Date(),
      completed: false
    }
  ];

  useEffect(() => {
    setNotes(data);
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
      <NotesLayout showAll={showAll} notes={notes} setNotes={setNotes} />
      <FloatingButton onClickHandler={addNote} />
    </div>
  );
}

export default App;
