import api from './api'

export default {
  async getBlog () {
    try {
      let requestResult = await api().get(`/api/blog/get`)
      return requestResult

    } catch (e) {
      throw new Error(e)
    }
  }
}

