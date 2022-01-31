import './Note.css';

const Note = (props) => {

    const { note, notes, setNotes } = props;

    const onChaneHandler = () => {
        const newNote = { ...note, completed: !note.completed };
        const newNotes = [...notes];
        const index = newNotes.indexOf(note);
        newNotes[index] = newNote;
        setNotes(newNotes);
    }

    return (
        <div className="note">
            <div className="note_header">
                <h2 className="note-title">{note.title ? note.title : ''}</h2>
                <h2 className="note-date">{note.date ? note.date.toLocaleDateString('es-ES') : ''}</h2>
            </div>
            <h3 className="note-content">{note.content ? note.content : ''}</h3>
            <div className="completed_container">
                <p>Completed: </p>
                <input onChange={onChaneHandler} checked={note.completed} type="checkbox" className="completed" />
            </div>
        </div>
    );
}

export default Note;