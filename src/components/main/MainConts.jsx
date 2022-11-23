import React from 'react'

const MainConts = () => {
    const onLoad = () => {
        console.log('hi?')
        document.body.removeAttribute('id')
    }
    return (
        <>
            <section onLoad={onLoad}>MainConts</section>
        </>
    )
}

export default MainConts
