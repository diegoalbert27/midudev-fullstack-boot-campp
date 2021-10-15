import axios from "axios"
const baseUrl = 'https://restcountries.com/v2/all'

export const getCountries = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}