import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchAPI } from '../../utils/fetchAPI'
import { Loader } from '../index'
const BookSearchConts = () => {
    const { searchKeyword, answerKeyword } = useParams()
    const [books, setBooks] = useState(null)
    const [page, setPage] = useState(1)
    setPage(1)
    //&startIndex=1 << 페이징할때 쓸거
    useEffect(() => {
        const fetchBooksData = async () => {
            const data = await fetchAPI(`q=${searchKeyword}&startIndex=${page}`)
            setBooks(data)
        }
        fetchBooksData()
    }, [searchKeyword])

    if (!books) return <Loader />
    console.log(books)
    return (
        <>
            <section id="resultCont" className="container">
                <div className="resultSearch">
                    <div className="resultSearch__info">
                        <h2>{answerKeyword.replace('!@@!', '/')}</h2>
                        <span>총 {books.totalItems}권의 검색 결과</span>
                    </div>
                    <div className="resultButton">
                        <input type="text" placeholder="원하는 책을 검색해보세요!" />
                        <button type="submit" className="ir">
                            버튼
                        </button>
                    </div>
                </div>
                {books.items.map((book) => (
                    <div className="box" key={book.id}>
                        <figure>
                            {book?.volumeInfo?.imageLinks?.thumbnail === undefined ? (
                                <img src="/assets/img/noBookImg.png" alt="북북에서" />
                            ) : (
                                <img src={book?.volumeInfo?.imageLinks?.thumbnail} alt="북북에서" />
                            )}
                        </figure>
                        <div className="box__info">
                            <h2 className="title">{book?.volumeInfo?.title}</h2>
                            <p className="author">{book?.volumeInfo?.authors === undefined ? '작자미상' : book?.volumeInfo?.authors}</p>
                            <p className="date">{book?.volumeInfo?.publishedDate?.replace(/-/g, '.')}</p>
                            <button className="box__button" type="button">
                                view
                            </button>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}

export default BookSearchConts