import React from 'react'

const BookSearchResult = ({ books, answerKeyword }) => {
    if (books.totalItems === 0) {
        return (
            <>
                <div className="box">
                    <figure>
                        <img src="/assets/img/noBookImg.png" alt="북북에서" />
                    </figure>
                    <div className="box__info">
                        <h2 className="title">{answerKeyword} 와 관련된 내용을 찾을수 없습니다.</h2>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                {books?.items?.map((book) => (
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
                            <p className="author">{book?.volumeInfo?.authors === undefined ? '작자미상' : book?.volumeInfo?.authors[0]}</p>
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
}

export default BookSearchResult
