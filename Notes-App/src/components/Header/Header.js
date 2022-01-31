import Switch from '../Switch/Switch';
import './Header.css';

const Header = (props) => {

    const { showAll, setShowAll, setSearch } = props;

    const onChangeHandler = (event) => {
        setSearch(event.target.value);
    };

    return (
        <div className="header">
            <div className="header-menu">
                <input className="search-input" type="text" placeholder="Search Note..." onChange={onChangeHandler} />
                <Switch checked={showAll} setChecked={setShowAll} />
            </div>
        </div>
    );
}

export default Header;