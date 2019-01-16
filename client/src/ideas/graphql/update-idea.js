import gql from 'graphql-tag'

export default gql`
  mutation updateIdea($data: IdeaUpdateInput!, $where: IdeaWhereUniqueInput!) {
    updateIdea(data: $data, where: $where) {
      id
      title
      body
      createdAt
    }
  }
`
