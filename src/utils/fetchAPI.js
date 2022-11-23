import axion from 'axios'
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?'

const options = {
    url: BASE_URL,
    params: { maxResults: '20', printType: 'books', langRestrict: 'ko' },
}

export const fetchAPI = async (url) => {
    const { data } = await axion.get(`${BASE_URL}${url}`, options)
    return data
}
