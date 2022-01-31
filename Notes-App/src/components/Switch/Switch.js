import './Switch.css';

const Switch = (props) => {

    const { checked, setChecked } = props;

    const onChangeHandler = () => {
        setChecked(!checked);
    }

    return (
        <div className="switch_container">
            <p>Show All: </p>
            <label className="switch">
                <input type="checkbox" onChange={onChangeHandler} checked={checked} />
                <div className="slider">{ checked ? 'On' : 'Off' }</div>
            </label>
        </div>
    );
}

export default Switch;