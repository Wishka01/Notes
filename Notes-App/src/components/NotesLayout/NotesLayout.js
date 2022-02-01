import Note from '../Note/Note';
import './NotesLayout.css';

const NotesLayout = (props) => {

    const { search, showAll, notes, setNotes } = props;

    return (
        <div className="notes_layout">
            {
                notes
                    .filter((note) => !note.completed || showAll)
                    .map((note) => {
                        return (
                            note.title.toLowerCase().startsWith(search.toLowerCase())
                            ? 
                                <Note note={note} notes={notes} setNotes={setNotes} key={`${note._id}-${note.date}`} />
                            :
                                ''
                        );
                    })
            }
        </div>
    );
}

export default NotesLayout;