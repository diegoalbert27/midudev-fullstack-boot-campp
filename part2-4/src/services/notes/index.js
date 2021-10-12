import axios from "axios";

export const getPosts = () => {
    return axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            const { data } = response
            return data
        })
        .catch(err => console.error(err))
} 