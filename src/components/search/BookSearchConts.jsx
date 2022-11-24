import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchAPI } from '../../utils/fetchAPI'
import { Loader, BookSearch } from '../index'
import { bgadd } from '../../utils/loadBody'

const BookSearchConts = () => {
    const { searchKeyword, answerKeyword } = useParams()
    const [books, setBooks] = useState(null)
    const [page, setPage] = useState(1)

    //&startIndex=1 << 페이징할때 쓸거
    useEffect(() => {
        const fetchBooksData = async () => {
            const data = await fetchAPI(`q=${searchKeyword}&startIndex=${page}`)
            setPage(1)
            setBooks(data)
        }
        fetchBooksData()
    }, [searchKeyword, page])

    const BookSearchResult = ({ books }) => {
        return (
            <>
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
            </>
        )
    }

    const BookSearchFalse = ({ books }) => {
        return (
            <>
                <div className="box">
                    <figure>
                        <img src="/assets/img/noBookImg.png" alt="북북에서" />
                    </figure>
                    <div className="box__info">
                        <h2 className="title">{books} 와 관련된 내용을 찾을수 없습니다.</h2>
                    </div>
                </div>
            </>
        )
    }

    if (!books) return <Loader />

    let bookSearchAnser
    if (books.totalItems === 0) {
        console.log('flase')
        bookSearchAnser = <BookSearchFalse books={answerKeyword} />
    } else {
        console.log('true')
        bookSearchAnser = <BookSearchResult books={books} />
    }

    return (
        <>
            <section id="resultCont" className="container" onLoad={bgadd}>
                <div className="resultSearch">
                    <div className="resultSearch__info">
                        <h2>{answerKeyword?.replace('!@@!', '/')}</h2>
                        <span>총 {books?.totalItems}권의 검색 결과</span>
                    </div>
                    <BookSearch />
                </div>
                {bookSearchAnser}
            </section>
        </>
    )
}

export default BookSearchConts
