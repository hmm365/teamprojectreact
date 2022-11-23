import React from 'react'
import { Link } from 'react-router-dom'
import { bgadd, bgRemove } from '../../utils/loadBody'

const LeftAside = () => {
    return (
        <nav className="memu__list">
            <Link to="/" onClick={bgRemove}>
                <h2>BOOK! BOOK!</h2>
            </Link>

            <img src="/assets/img/navIcon2.png" alt="아이콘2" />
            <ul>
                <li>
                    <Link to="/bookmain" className="link" onClick={bgadd}>
                        Books
                    </Link>
                </li>
                <li>
                    <Link to="/quiz" className="link" onClick={bgadd}>
                        QUIZ
                    </Link>
                </li>
                <li>
                    <Link to="/tag/" className="link" onClick={bgadd}>
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
