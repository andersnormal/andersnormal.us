import { useMemo } from 'react'
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

let apolloClient

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: process.env.GRAPHQL_API_ENDPOINT, // Server URL (must be absolute)
      // Headers applied here will be applied for all requests
      // See the use of the "options" when running a graphQL query to specify options per-request at https://www.apollographql.com/docs/react/api/react-hooks/#options
      headers: {
        authorization: `Bearer ${process.env.GRAPHQL_API_KEY}`
      },
      credentials: 'same-origin', // XXX See https://www.apollographql.com/docs/react/recipes/authentication#cookie
      fetch // Switches between unfetch & node-fetch for client & server.
    }),
    cache: new InMemoryCache()
  })
}

export const initializeApollo = (initialState = null) => {
  const _apolloClient = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()
    // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState })
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export const useApollo = initialState => {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
