import type { NextApiRequest, NextApiResponse } from 'next'
import { CreateSubmissionDocument } from '../../generated-types'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

export default async (
  { body }: NextApiRequest,
  { status }: NextApiResponse
): Promise<void> => {
  const httpLink = createHttpLink({
    uri: process.env.GRAPHQL_API_ENDPOINT
  })

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: process.env.GRAPHQL_API_KEY
      }
    }
  })

  const { id, ...data } = JSON.parse(body)

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  })

  try {
    const result = await client.query({
      query: CreateSubmissionDocument,
      variables: { data, id }
    })

    status(201).json(result)
  } catch ({ message }) {
    status(400).json({ message })
  }
}
