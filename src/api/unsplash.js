
import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ry2GG18_4d9EJr8rmHD3e-i8KZm3BMkmGglrwxj-KcA '
    }
})