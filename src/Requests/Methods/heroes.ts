import requests from '../http'

const baseUrl = 'https://api.pandascore.co/ow'

export const getHeroes = async () => {
  fetch(`${baseUrl}/heroes`, {
    method: 'get',
    headers: new Headers({
      Authorization: `Bearer ${process.env.REACT_APP_BEARER}`,
    })
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
  return await requests.get('/heroes')
}

export const getHero = async (id: number) => {
  return await requests.get(`/heroes/${id}`)
}

export const getMaps = async () => {
  return await requests.get('/maps')
}
