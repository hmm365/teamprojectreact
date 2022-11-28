export const bgadd = (e) => {
    document.querySelector('.memu__list').style.display = 'block'
    document.querySelector('.leftAllow').style.display = 'block'
    document.querySelector('#aside').style.display = 'block'

    document.body.id = 'plaid'
    if (document.querySelector('#aside').classList.contains('hide')) {
        document.querySelectorAll('.container').forEach((el) => {
            el.classList.add('active')
        })
    } else {
        document.querySelectorAll('.container').forEach((el) => {
            el.classList.remove('active')
        })
    }
}
export const bgRemove = () => {
    return document.body.removeAttribute('id')
}
