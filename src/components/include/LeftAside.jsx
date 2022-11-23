import React from 'react'
import { Link } from 'react-router-dom'

const LeftAside = () => {
    return (
        <nav className="memu__list">
            <Link to="/">
                <h2>BOOK! BOOK!</h2>
            </Link>

            <img src="/assets/img/navIcon2.png" alt="아이콘2" />
            <ul>
                <li>
                    <Link to="/bookmain" className="link">
                        Books
                    </Link>
                </li>
                <li>
                    <Link to="/quiz" className="link">
                        QUIZ
                    </Link>
                </li>
                <li>
                    <Link to="/tag/" className="link">
                        Genre
                    </Link>
                </li>
            </ul>

            <button type="button">
                <span className="ir">왼쪽 화살표</span>
                <em>BACK</em>
            </button>
        </nav>
    )
}

export default LeftAside
