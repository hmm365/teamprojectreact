import React from 'react'

const QuizQuestions = ({ quiz, num, score, onSearch }) => {
    const nextQuiz = (e) => {
        num++
        score += parseInt(e.target.dataset.score)
        onSearch({ num, score })
    }

    return (
        <>
            <h2 className="quiz__questionsTit">{quiz.questions}</h2>
            <img className="quiz__questionsImg" src={`/assets/img/${quiz.icon}`} alt={quiz.icon} />
            {quiz.answer.map((answer, inx) => (
                <button className="quiz__button" key={inx} data-score={answer.score} onClick={nextQuiz}>
                    {answer.desc}
                </button>
            ))}
        </>
    )
}

export default QuizQuestions
