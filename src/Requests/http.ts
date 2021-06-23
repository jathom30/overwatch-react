import axios, { AxiosResponse } from 'axios'

const baseUrl = 'https://api.pandascore.co/ow'

export type ParsedResType<T = object> = {
  data: T
}

const resParser = (res: AxiosResponse<string | Object>): ParsedResType => {
  const parsedData =
    typeof res.data === 'string' ? JSON.parse(res.data) : res.data
  return { data: parsedData }
}

const errorHandler = (err: any) => {
  if (err.response) {
    if (err.response.data) {
      return err.response.data
    }
    return err.response
  }
  return err
}

const token = process.env.REACT_APP_BEARER

const headers = { Authorization: `Bearer ${token}` }

const requests = {
  get: async (path: string, params?: object) => {
    return axios
      .get(`${baseUrl}${path}`, {
        params,
        headers,
      })
      .then((res) => resParser(res))
      .catch((err) => errorHandler(err))
  },
  post: async (path: string, body: object) => {
    const url = `${baseUrl}${path}`

    return axios
      .post(url, body)
      .then((res) => {
        return resParser(res)
      })
      .catch((err) => errorHandler(err))
  },
  patch: async (path: string, body: object) => {
    const url = `${baseUrl}${path}`
    return axios
      .patch(url, body)
      .then((res) => {
        return resParser(res)
      })
      .catch((err) => errorHandler(err))
  },
}

const http = requests

export default http
