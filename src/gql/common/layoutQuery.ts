import gql from 'graphql-tag'

/**
 * Used in all pages
 */
export const LAYOUT_QUERY = gql`
  query LAYOUT_QUERY {
    pages(where: { isNavigation: true }) {
      id
      title
      slug
    }
  }
`
