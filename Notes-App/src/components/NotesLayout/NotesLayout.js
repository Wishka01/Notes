import Note from '../Note/Note';
import Menu from '../Menu/Menu';
import './NotesLayout.css';

const NotesLayout = (props) => {

    const { search, showAll, notes, setNotes, setContextTarget, updateNote, deleteNote } = props;

    return (
        <div className="notes_layout">
            <Menu deleteNote={deleteNote} />
            {
                notes
                    .filter((note) => !note.completed || showAll)
                    .map((note) => {
                        return (
                            note.title.toLowerCase().startsWith(search.toLowerCase())
                            ? 
                                <Note note={note} notes={notes} setNotes={setNotes} setContextTarget={setContextTarget} updateNote={updateNote} key={`${note._id}-${note.date}`} />
                            :
                                null
                        );
                    })
            }
        </div>
    );
}

export default NotesLayout;