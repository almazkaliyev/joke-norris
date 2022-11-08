import { endpoints } from 'api/endpoints'
import { Joke, JokeFromServer } from 'interfaces/jokes.interfaces'
import { axios } from 'modules/axios'
import { toCamelCase } from 'utils/toCamelCase'

const getRandom = async (category?: string) => {
  const { data } = await axios.request<JokeFromServer>({
    method: 'GET',
    url: endpoints.jokes.getRandom(),
    params: { category },
  })

  return toCamelCase<Joke>(data)
}

const search = async (query: string) => {
  const { data } = await axios.request<{ total: number; result: JokeFromServer[] }>({
    method: 'GET',
    url: endpoints.jokes.search(),
    params: { query },
  })

  return toCamelCase<{ total: number; result: Joke[] }>(data)
}

export const jokesApi = {
  getRandom,
  search,
}
