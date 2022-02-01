import { useState } from 'react';
import Note from '../Note/Note';
import './NoteForm.css';

const NoteForm = (props) => {

    const { addNote, setNewNote } = props;

    const onCloseClickHandler = (event) => {
        event.preventDefault();
        setNewNote(false);
    }

    const onSaveClickHandler = (event) => {
        event.preventDefault();
        const title = document.getElementById('newNote-title').value;
        const date = document.getElementById('newNote-date').value;
        const content = document.getElementById('newNote-content').value;
        const newNote = {
            title: title,
            content: content,
            date: date,
            completed: false
        };
        addNote(newNote);
    }

    return (
        <form spellCheck='false' className="newNote_form">
            <div className="newNote_header">
                <h2 className='newNote-h2'>New Note</h2>
                <button className="close-btn" onClick={onCloseClickHandler}>X</button>
            </div>
            <div className="newNote">
                <div className="newNote_form-element">
                    <label htmlFor="newNote-title" className='newNote-lbl'>Title:</label>
                    <input required id="newNote-title" className='newNote-input' type="text" />
                </div>
                <div className="newNote_form-element">
                    <label htmlFor="newNote-date" className='newNote-lbl'>Date:</label>
                    <input required id="newNote-date" className='newNote-input' type="date" />
                </div>
                <div className="content_container">
                    <label htmlFor="newNote-content" className='newNote-content-lbl'>Content:</label>
                    <textarea required id="newNote-content" className='newNote-content-input'></textarea>
                </div>
                <div className="save-btn_container">
                    <button className="save-btn" onClick={onSaveClickHandler}>Save</button>
                </div>
            </div>
        </form>
    );
}

export default NoteForm;