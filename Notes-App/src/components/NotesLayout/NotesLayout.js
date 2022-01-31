import Note from '../Note/Note';
import './NotesLayout.css';

const NotesLayout = (props) => {

    const { showAll, notes, setNotes } = props;

    return (
        <div className="notes_layout">
            {
                notes
                    .filter((note) => !note.completed || showAll)
                    .map((note) => {
                        return (
                            <Note note={note} notes={notes} setNotes={setNotes} key={`${note.id}-${note.date}`} />
                        );
                    })
            }
        </div>
    );
}

export default NotesLayout;