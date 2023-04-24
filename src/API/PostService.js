import axios from 'axios';
export default class PostServise {
    static async getAll(limit = 10, page = 1) {
        const respons = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return respons;
    }

    static async getById(id) {
        const responsId = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        return responsId;
    }


    static async getCommentsByPostId(id) {
        const responsComment = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return responsComment;
    }
}