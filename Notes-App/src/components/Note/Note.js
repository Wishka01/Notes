import { useState } from 'react';
import './Note.css';

const Note = (props) => {

    const { note, notes, setNotes, setContextTarget, updateNote } = props;

    const onContextMenuHandler = async (event) => {
        event.preventDefault();
        const contextMenu = document.getElementById('context-menu');
        const { clientX: mouseX, clientY: mouseY } = event;
        contextMenu.style.top = `${mouseY}px`;
        contextMenu.style.left = `${mouseX}px`;
        contextMenu.classList.add('menu-visible');
        setContextTarget(note._id);
    };

    const onChangeHandler = () => {
        const newNote = { ...note, completed: !note.completed };
        const newNotes = [...notes];
        const index = newNotes.indexOf(note);
        newNotes[index] = newNote;
        updateNote(note._id, newNote);
        setNotes(newNotes);
    };

    return (
        <div className="note_container">
            <div className="note" onContextMenu={onContextMenuHandler}>
                <div className="note_header">
                    <h2 className="note-title">{note.title ? note.title : ''}</h2>
                    <h2 className="note-date">{note.date ? new Date(note.date).toLocaleDateString('es-ES', {timeZone:"GMT", day: "numeric", month: "numeric", year:"numeric"}) : ''}</h2>
                </div>
                <div className="note_body">
                    <h3 className="note-content">{note.content ? note.content : ''}</h3>
                </div>
                <div className="completed_container">
                    <p>Completed: </p>
                    <input onChange={onChangeHandler} checked={note.completed} type="checkbox" className="completed" />
                </div>
            </div>
        </div>
    );
}

export default Note;