import { NoParamEndpointConstructor } from 'interfaces/api.interfaces'

interface Endpoints {
  getRandom: NoParamEndpointConstructor
  search: NoParamEndpointConstructor
}

export const jokesEndpoints: Endpoints = {
  getRandom: () => '/random',
  search: () => '/search',
}
