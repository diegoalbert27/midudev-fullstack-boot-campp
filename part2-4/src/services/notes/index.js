import axios from "axios";

const baseUrl = 'https://pure-wildwood-06271.herokuapp.com/api/notes'

const getPosts = () => {
    return axios.get(baseUrl)
        .then(response => {
            const { data } = response
            return data
        })
        .catch(err => console.error(err))
} 

const postData = (newObject) => {
    return axios.post(baseUrl, newObject)
        .then(response => {
            const { data } = response
            return data
        })
        .catch(err => console.error(err))
}

export default { getPosts, postData }