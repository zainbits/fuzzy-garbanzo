import './Navbar.scss'
import { useSelector } from 'react-redux'
import Navelem from './Navelem'

const Navbar = () => {
    const { settingsNavTab } = useSelector(state => state.engine)

    return (
        <nav className="navbar">
            <div className="navbar_tabs">
                <Navelem title="skills" />
                <Navelem title="education" />
                {settingsNavTab && <Navelem title="settings" />}
            </div>
            <div className="navbar_tools">
                <nav>...</nav>
            </div>
        </nav>
    )
}

export default Navbar