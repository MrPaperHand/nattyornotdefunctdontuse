import axios from 'axios'
const baseUrl = 'http://localhost:3000/api/posts'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async newObject => {
    const config = {
        headers: { Authorization: token }
    }

    const response = await axios.post(baseUrl, newObject, config)
    return response.data
}

const update = async (updatedObject) => {
    const config = {
        headers: { Authorization: token }
    }
    const response = await axios.put(`${baseUrl}/${updatedObject.id}`, updatedObject, config)
    return response.data
}

const removeBlog = async (objectToRemove) => {
    const config = {
        headers: { Authorization: token }
    }
    const response = await axios.delete(`${baseUrl}/${objectToRemove}`, config)
    return response.data
}

const postService = {
    getAll,
    create,
    update,
    removeBlog
}

export default postService