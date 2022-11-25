import React, { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { fetchAPI } from '../../utils/fetchAPI'
import { Loader, BookSearch, BookSearchResult } from '../index'
import { bgadd } from '../../utils/loadBody'

const BookSearchConts = () => {
    const { searchKeyword, answerKeyword } = useParams()
    const [books, setBooks] = useState(null)
    const [page, setPage] = useState(1)
    const [startIndex, setStartIndex] = useState(0)
    const [loading, setLoading] = useState(true)

    const prevClik = () => {
        if (page !== 1 && Math.ceil(books?.totalItems / 20) !== 0) {
            setPage(page - 1)
            setStartIndex(startIndex - 20)
        }
    }
    const nextClik = () => {
        let pageEnd = Math.ceil(books?.totalItems / 20)
        if (page !== pageEnd && pageEnd !== 0) {
            setPage(page + 1)
            setStartIndex(startIndex + 20)
        }
    }

    const fetchBooksData = useCallback(async () => {
        setLoading(true) // api 호출 전에 true로 변경하여 로딩화면 띄우기ㅌ

        const data = await fetchAPI(`q=${searchKeyword}&startIndex=${startIndex}`)
        setBooks(data)

        setLoading(false) // api 호출 완료 됐을 때 false로 변경하려 로딩화면 숨김처리
    }, [searchKeyword, startIndex])

    useEffect(() => {
        fetchBooksData()
    }, [fetchBooksData])

    return (
        <>
            <section id="resultCont" className="container" onLoad={bgadd}>
                <div className="resultSearch">
                    <div className="resultSearch__info">
                        <h2>{answerKeyword?.replace('!@@!', '/')}</h2>
                        <span>총 {books?.totalItems}권의 검색 결과</span>
                    </div>
                    <BookSearch setPage={setPage} setStartIndex={setStartIndex} />
                </div>
                {loading ? <Loader /> : <BookSearchResult books={books} answerKeyword={answerKeyword} />}
                <div className="search__pageInner">
                    <button type="button" className="search__prev" onClick={prevClik}>
                        <span className="ir">이전</span>
                    </button>
                    <span className="search__pageNum">{page}</span>
                    <button type="button" className="search__next" onClick={nextClik}>
                        <span className="ir">다음</span>
                    </button>
                </div>
            </section>
        </>
    )
}

export default BookSearchConts
