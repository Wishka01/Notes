import './Menu.css';

const Menu = (props) => {

    const { deleteNote } = props;

    const onClickHandler = (event) => {
        event.preventDefault();
        deleteNote();
    }

    return (
        <div id="context-menu" className="menu">
            <button className='delete-btn' onClick={onClickHandler}>Eliminar</button>
        </div>
    );
}

export default Menu;