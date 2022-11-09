export type EndpointParam = string | number | boolean

export type NoParamEndpointConstructor = () => string
export type OneParamEndpointConstructor = (p1: EndpointParam) => string
