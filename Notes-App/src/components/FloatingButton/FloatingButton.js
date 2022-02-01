import './FloatingButton.css';

const FloatingButton = (props) => {
    
    const { setNewNote } = props;

    return (
        <div className="floating-btn_container">
            <button className="floating-btn" onClick={setNewNote}>+</button>
        </div>
    );
}

export default FloatingButton;