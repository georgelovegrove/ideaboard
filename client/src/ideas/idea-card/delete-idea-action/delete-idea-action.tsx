import React from 'react'
import { graphql } from 'react-apollo'

import { DELETE_IDEA } from '../../graphql'
import CircleAction from '../../components/circle-action'

const DeleteIdea = ({ idea, deleteIdea }: Props) => {
  const deleteIdeaHandler = () => {
    // NOTE: Using refetch queries for simplicity rather
    //    than updating the cache manually as you should
    deleteIdea({
      variables: {
        where: {
          id: idea.id
        }
      },
      refetchQueries: ['ideas']
    })
      .catch((error: any) => {
        // TODO: Handle errors
      })
  }

  return (
    <CircleAction
      right
      onClick={deleteIdeaHandler}
      icon={require('../../../assets/icons/trash-grey.svg')}
    />
  )
}

interface Props {
  idea: {
    id: string
    title: string
    body: string
  },
  deleteIdea: ({}) => any
}

export default graphql<any, {}, {}>(DELETE_IDEA, { name: 'deleteIdea' })(DeleteIdea)
