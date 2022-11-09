import { NoParamEndpointConstructor, OneParamEndpointConstructor } from 'interfaces/api.interfaces'

interface Endpoints {
  getById: OneParamEndpointConstructor
  getRandom: NoParamEndpointConstructor
  search: NoParamEndpointConstructor
}

export const jokesEndpoints: Endpoints = {
  getById: (id) => `/${id}`,
  getRandom: () => '/random',
  search: () => '/search',
}
