declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GRAPHQL_API_ENDPOINT: string
      GRAPHQL_API_KEY: string
    }
  }
}
