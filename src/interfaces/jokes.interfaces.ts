export interface JokeFromServer {
  id: string
  categories: string[]
  icon_url: string
  url: string
  value: string
  created_at: string
  updated_at: string
}

export interface Joke {
  id: string
  categories: string[]
  iconUrl: string
  url: string
  value: string
  createdAt: string
  updatedAt: string
}
