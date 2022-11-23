import React from 'react'

const RightAside = () => {
    const rightAction = () => {
        document.body.style.minHeight = document.querySelector('.container').offsetHeight + 'px'
        document.querySelectorAll('.container').forEach((el) => {
            el.classList.add('active')
        })
        document.querySelector('#aisde').classList.add('hide')
    }
    const leftAction = () => {
        document.querySelectorAll('.container').forEach((el) => {
            el.classList.remove('active')
        })
        document.querySelector('#aisde').classList.remove('hide')
    }

    return (
        <>
            <aside id="aisde" className="">
                <span className="rightAllow ir" onClick={rightAction}>
                    오른쪽화살표
                </span>
                <div className="preview__book">
                    <h2 className="preview__title">PREVIEW</h2>
                    <a className="preview__img" href="/">
                        <img src="/assets/img/noBookImg.png" alt="없는이미지" />
                    </a>
                    <p className="preview__bookTitle">오늘의 책은?!</p>
                    <p className="preview__bookDesc">북북에서 책의 내용을 미리 확인해보세요! 이 곳에 줄거리가 나타납니다.</p>
                </div>
            </aside>
            <div className="leftAllow" onClick={leftAction}>
                <span className="lf ir">왼쪽화살표</span>
                <span className="prev">PREVIEW</span>
            </div>
        </>
    )
}

export default RightAside
