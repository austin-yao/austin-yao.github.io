import '../styles/Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <ul className="header-nav">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/writing">Writing</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header