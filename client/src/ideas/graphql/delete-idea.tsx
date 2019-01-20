import gql from 'graphql-tag'

export default gql`
  mutation deleteIdea($where: IdeaWhereUniqueInput!) {
    deleteIdea(where: $where) {
      id
      title
      body
      createdAt
    }
  }
`
