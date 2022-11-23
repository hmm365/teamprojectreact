import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { MainConts, QuizConts, BookSearchConts, TagConts, LeftAside, RightAside } from './components/index'

function App() {
    return (
        <BrowserRouter>
            <LeftAside />
            {/* <main id="main"> */}
            <Routes>
                <Route path="/" element={<MainConts />}></Route>
                <Route path="/quiz/" element={<QuizConts />}></Route>
                {/* <Route path="/bookmain/" element={<BookMain />}></Route> */}
                <Route path="/booksearch/:searchKeyword/:answerKeyword" element={<BookSearchConts />}></Route>
                <Route path="/tag/" element={<TagConts />}></Route>
            </Routes>
            {/* </main> */}
            <RightAside />
        </BrowserRouter>
    )
}

export default App
