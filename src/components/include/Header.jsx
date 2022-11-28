import React from 'react'
import { Link } from 'react-router-dom'
import { bgadd, bgRemove } from '../../utils/loadBody'

const Header = () => {
    return (

        <header id="header">
            <div>
                <h2 className="headerTitile">
                    <Link to="/" onClick={bgRemove} >
                        <p>WELLCOM TO</p>
                        BOOK! BOOK!
                    </Link>
                </h2>
                <h2 className="headerTitile line">
                    <p>WELLCOM TO</p>
                    BOOK! BOOK!
                </h2>
            </div>
            <nav className="mainMenu">
                <ul>
                    <li><Link to="/books" onClick={bgadd} className="menu">BOOKS</Link></li>
                    <li><Link to="/quiz" onClick={bgadd} className="menu">QUIZ</Link></li>
                    <li><Link to="/tag" onClick={bgadd} className="menu">GENRE</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
