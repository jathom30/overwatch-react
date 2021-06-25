import requests from '../http'

export const getHeroes = async () => {
  return await requests.get('/heroes')
}

export const getHero = async (id: number) => {
  return await requests.get(`/heroes/${id}`)
}

export const getMaps = async () => {
  return await requests.get('/maps')
}
