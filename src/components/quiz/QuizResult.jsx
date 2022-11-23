import React from 'react'
import { Link } from 'react-router-dom'

const QuizResult = ({ quiz, score }) => {
    const bookGenreSearch = () => {}
    return (
        <>
            <h2 className="quiz__questionsTit blue">오늘 당신을 위한 책 장르는 !</h2>
            {quiz.result.map((result, inx) =>
                result.marks === score ? (
                    <div key={inx}>
                        <img className="quiz__questionsImg big" src={`/assets/img/${result.icon}`} alt={result.icon} />
                        <p className="quiz__tit">{result.answer}</p>
                        <p className="quiz__desc">입니다</p>
                        <Link to={`/booksearch/${result.search}/${result.answer}`} className="quiz__button" onClick={bookGenreSearch}>
                            보러가기
                        </Link>
                    </div>
                ) : null
            )}
        </>
    )
}

export default QuizResult
