import requests from '../http'

export const getHeroes = async () =>
  await requests.get('/heroes')

export const getHero = async (id: number) =>
  await requests.get(`/heroes/${id}`)

export const getMaps = async () =>
  await requests.get('/maps')
