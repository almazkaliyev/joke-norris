import { NoParamEndpointConstructor } from 'interfaces/api.interfaces'

interface Endpoints {
  getAll: NoParamEndpointConstructor
}

const baseUrl = '/categories'

export const categoriesEndpoints: Endpoints = {
  getAll: () => `${baseUrl}`,
}
