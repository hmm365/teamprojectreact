import React, { useCallback } from 'react'
import BookSearch from '../search/BookSearch'
import BooksSlider from './BooksSlider'
import BooksSlider2 from './BooksSlider2'
import { Loader } from '../index'
import { fetchAPI } from '../../utils/fetchAPI'
import { useState, useEffect } from 'react'
import { bgadd } from '../../utils/loadBody'
// import { useParams } from 'react-router-dom'

const BooksConts = () => {
    const [slider, setSlider] = useState('')
    const [sliderTwo, setSliderTwo] = useState('')

    const [page, setPage] = useState(1)
    const [startIndex, setStartIndex] = useState(0)

    const [loading, setLoading] = useState(true)

    // const { bookId } = useParams()
    // const [book, setBook] = useState('')

    // useEffect(() => {
    //     fetchAPI(
    //         `printType=books&langRestrict=ko&q=${bookId}`
    //         ).then(
    //             (data) => setBook(data.items[0])
    //             )
    //             // fetchAPI에 사용할 값 가져오기.
    //   }, [bookId]);
    //   console.log(bookId)
    const fetchBooksData = useCallback(async () => {
        setLoading(true)
        await fetchAPI(`&printType=books&langRestrict=ko&q=-19%바보+소설+subject:fiction`).then(
            // (data) => console.log(data.items)
            (data) => setSlider(data.items)
        )
        await fetchAPI(`q=-19%감동+소설+subject:fiction&printType=books&langRestrict=ko&orderBy=relevance`).then(
            // (data) => console.log(data.items)
            (data) => setSliderTwo(data.items)
        )
        setLoading(false)
    }, [])

    useEffect(() => {
        fetchBooksData()
    }, [fetchBooksData])

    return (
        <section id="booksSection" className="container" onLoad={bgadd}>
            <div id="section" className="booksWrap">
                <div className="books__header">
                    <h2>
                        <p>북북과 함께</p> 먹고 읽고 건강하라!
                    </h2>
                    <BookSearch page={page} startIndex={startIndex} setPage={setPage} setStartIndex={setStartIndex} />
                </div>
                {loading ? (
                    <Loader />
                ) : (
                    <div className="bookAllList">
                        <BooksSlider slider={slider} />
                        <BooksSlider2 sliderTwo={sliderTwo} />
                    </div>
                )}
            </div>
        </section>
    )
}

export default BooksConts
