// import React from "react";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom'

import { fetchAPI } from '../../utils/fetchAPI'

import LeftAside from "../include/LeftAside";

const BooksResults = () => {

    const navigate = useNavigate();
    const navigateClick = () => {
        navigate(-1);
      };

    const { bookId } = useParams()
    const [book, setBook] = useState('')

    useEffect(() => {
        fetchAPI(
            `printType=books&langRestrict=ko&q=${bookId}`
            ).then(
                (data) => setBook(data.items[0])
                )
                // fetchAPI에 사용할 값 가져오기.
    }, [bookId]);


    return (
        <div id="plaid" className="flex">
            <LeftAside />
            <main id="booksSection">
                <section id="section" className="previewWrap">
                    <h2>PREVIEW</h2>
                    <div className="previewBox">
                        <button className="previewCloseBtn ir" onClick={navigateClick}>button</button>
                        <div className="previewInner">
                            <figure className="previewImg">
                                <img src={book?.volumeInfo?.imageLinks?.thumbnail} alt={book?.volumeInfo?.title} />
                            </figure>
                            <div className="preview__desc">
                                <h3 className="title">{book?.volumeInfo?.title}</h3>
                                <p className="writer">최혁곤 외</p>
                                <p className="summary">
                                    {book?.volumeInfo?.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default BooksResults;
