import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'

export function createClient() {
  const httpLink = createHttpLink({ uri: process.env.REACT_APP_ENDPOINT })

  const cache = new InMemoryCache()

  const client = new ApolloClient({
    link: httpLink,
    cache
  })

  return client
}

export default createClient()
