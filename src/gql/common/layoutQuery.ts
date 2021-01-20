import gql from 'graphql-tag'

/**
 * Used in all pages
 */
export const LAYOUT_QUERY = gql`
  query LAYOUT_QUERY($locale: String!) {
    pages(where: { isNavigation: true, locales: $locale }) {
      id
      title
      slug
    }
  }
`
