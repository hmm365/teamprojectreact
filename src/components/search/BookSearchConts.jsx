import React, { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { fetchAPI } from '../../utils/fetchAPI'
import { Loader, BookSearch, BookSearchResult } from '../index'
import { bgadd } from '../../utils/loadBody'

const BookSearchConts = () => {
    const { searchKeyword, answerKeyword } = useParams()
    const [books, setBooks] = useState(null)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)

    const fetchBooksData = useCallback(async () => {
        setLoading(true) // api 호출 전에 true로 변경하여 로딩화면 띄우기
        const data = await fetchAPI(`q=${searchKeyword}&startIndex=${page}`)
        setPage(1)
        setBooks(data)
        setLoading(false) // api 호출 완료 됐을 때 false로 변경하려 로딩화면 숨김처리
    }, [searchKeyword, page])

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
                    <BookSearch />
                </div>
                {loading ? <Loader /> : <BookSearchResult books={books} answerKeyword={answerKeyword} />}
            </section>
        </>
    )
}

export default BookSearchConts
