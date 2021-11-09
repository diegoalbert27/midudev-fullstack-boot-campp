import axios from "axios";

const baseUrl = '/api/phonebook'

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

const updateData = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
        .then(response => {
            const { data } = response
            return data
        })
        .catch(err => console.error(err))
}

export default { getPosts, postData, updateData }