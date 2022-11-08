import { endpoints } from 'api/endpoints'
import { axios } from 'modules/axios'

const getAll = async () => {
  const { data } = await axios.request<string[]>({
    method: 'GET',
    url: endpoints.categories.getAll(),
  })

  return data
}

export const categoriesApi = {
  getAll,
}
