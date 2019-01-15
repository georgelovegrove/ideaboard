import gql from 'graphql-tag'

export default gql`
  query ideas {
    ideas {
      id
      title
      body
      createdAt
    }
  }
`
