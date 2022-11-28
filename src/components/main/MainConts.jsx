import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../include/Header'
import { BookSearch } from '../index'
import { MainSlider } from '../index'

import MainICon01 from '../../assets/img/mainBookIcon01.png'
import MainICon02 from '../../assets/img/mainHeartIcon01.svg'
import MainICon03 from '../../assets/img/mainHeartIcon02.svg'

import { fetchAPI } from '../../utils/fetchAPI'

const MainConts = () => {
    // BookSearch가 아래 변수에 존속되어 있으므로 필요한 값을 가져온다.
    const [page, setPage] = useState(1)
    const [startIndex, setStartIndex] = useState(0)

    const onLoad = () => {
        // console.log("hi?");
        document.body.removeAttribute('id')
        document.querySelector('.memu__list').style.display = 'none'
        document.querySelector('.leftAllow').style.display = 'none'
        document.querySelector('#aside').style.display = 'none'
    }

    const [images, setImages] = useState('')

    useEffect(() => {
        fetchAPI(`q=-19%26+love+소설+subject:fiction&printType=books&langRestrict=ko&orderBy=relevance&maxResults=32`).then((data) => setImages(data.items))

        //   "https://www.googleapis.com/books/v1/volumes?q=-19%26+love+소설+subject:fiction&printType=books&langRestrict=ko&orderBy=relevance&maxResults=16"
        // .then((response) => response.json())
        // .then((result) => console.log(result.items))
        // .then((result) => setImages(result.items))
        // .catch((error) => console.log("error", error));
    }, [])

    return (
        <>
            <section onLoad={onLoad}>
                <div className="mainBg01">
                    <div id="mainWrap">
                        <div className="bg01"></div>
                        <div className="mainInner">
                            <Header />
                            <main id="mainConts" className="main__container">
                                <div className="searchWrap">
                                    {/* page와 startIndex의 값을 줄 컴포넌트가 없으므로 그냥 함께 추가해주어 빌드해준다. */}
                                    <BookSearch page={page} startIndex={startIndex} setPage={setPage} setStartIndex={setStartIndex} />

                                    <span className="genre_pick">
                                        오늘은 <Link to=""></Link>
                                        <em>추리 / 스릴러</em> 가 어떠신가요!
                                    </span>
                                </div>
                                <div className="rightCont">
                                    <div className="iconBox">
                                        <div className="book">
                                            <img src={MainICon01} alt="icon" />
                                        </div>
                                        <div className="heart01">
                                            <img src={MainICon02} alt="icon" />
                                        </div>
                                        <div className="heart02">
                                            <img src={MainICon03} alt="icon" />
                                        </div>
                                        <div className="note">
                                            <div className="noteDesc">
                                                <h3>
                                                    <p>Book</p> recommendations
                                                </h3>
                                                <p>북북과 함께 도서 찾기</p>
                                            </div>
                                            <Link to="/quiz" className="noteBtn"></Link>
                                        </div>
                                    </div>
                                </div>
                                <article id="bookList">
                                    <h2>BOOK LIST</h2>
                                    <div className="book__wrap">
                                        <MainSlider images={images} />
                                    </div>
                                </article>
                            </main>
                        </div>
                    </div>

                    <footer id="footer">
                        <p className="copylight">©THE BOOKBOOK</p>
                    </footer>
                </div>
            </section>
        </>
    )
}

export default MainConts
