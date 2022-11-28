import React from 'react'
import quizData from '../../utils/quiz.json'
import { QuizQuestions, QuizResult } from '../index'
import { useState } from 'react'
import { bgadd } from '../../utils/loadBody'

const QuizConts = () => {
    //나중에 파람스로 받아서 새로고침 하는걸로..?
    //퀴즈에 num 넣어서 하던가 아니면 주던가? 둘중하나?어사이드에서 -> 받고 --> 뺏고
    //아래있는 useState( {파람스} )
    const [num, setNum] = useState(1)
    const [score, setScore] = useState(0)

    const quizScore = (query) => {
        setNum(query.num)
        setScore(query.score)
    }
    let Questions

    quizData.quiz.forEach((quiz) => {
        if (quiz.num === num && quiz.num !== 4) {
            Questions = <QuizQuestions quiz={quiz} num={num} score={score} onSearch={quizScore} />
        } else if (quiz.num === num && quiz.num === 4) {
            Questions = <QuizResult quiz={quiz} score={score} onSearch={quizScore} />
        }
    })

    return (
        <>
            <section id="quizCont" className="container" onLoad={bgadd}>
                <div className="quizCont__wrap">
                    <div className="quizCont__inner">
                        <div className="quiz__questions">{Questions}</div>
                        {/* <div className="quiz__pageInner">
                            <a className="quiz__prev" href="#">
                                <span className="ir">이전</span>
                            </a>
                            <span className="quize__pageNum">{num}</span>
                            <a className="quiz__next" href="#">
                                <span className="ir">다음</span>
                            </a>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default QuizConts
