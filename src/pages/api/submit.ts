import type { NextApiRequest, NextApiResponse } from 'next'
import { CreateSubmissionDocument } from '../../generated-types'
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  from
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'

export default async (
  { body }: NextApiRequest,
  { status }: NextApiResponse
): Promise<void> => {
  const httpLink = createHttpLink({
    uri: process.env.GRAPHQL_API_ENDPOINT
  })

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      )
    if (networkError) console.log(`[Network error]: ${networkError}`)
  })

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GRAPHQL_API_KEY}`
      }
    }
  })

  const { id, data } = JSON.parse(body)

  const client = new ApolloClient({
    link: from([errorLink, authLink, httpLink]),
    cache: new InMemoryCache()
  })

  try {
    const result = await client.mutate({
      mutation: CreateSubmissionDocument,
      variables: { formData: data, formId: id }
    })

    status(201).json(result)
  } catch ({ message }) {
    status(400).json({ message })
  }
}
