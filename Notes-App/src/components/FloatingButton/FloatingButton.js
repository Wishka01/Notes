import './FloatingButton.css';

const FloatingButton = (props) => {
    
    const { onClickHandler } = props

    return (
        <div className="floating-btn_container">
            <button className="floating-btn" onClick={onClickHandler}>+</button>
        </div>
    );
}

export default FloatingButton;