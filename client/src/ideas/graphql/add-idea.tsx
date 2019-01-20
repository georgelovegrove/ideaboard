import gql from 'graphql-tag'

export default gql`
  mutation addIdea($data: IdeaCreateInput!) {
    createIdea(data: $data) {
      id
      title
      body
      createdAt
    }
  }
`
