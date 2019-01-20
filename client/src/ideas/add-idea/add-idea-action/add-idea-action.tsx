import React, { Component } from 'react'
import { graphql } from 'react-apollo'

import { ADD_IDEA } from '../../graphql'
import CircleAction from '../../components/circle-action'
import { IdeaFormInputs } from '../../components/idea-inputs'

class AddIdeaAction extends Component<Props, State> {
  state = {
    loading: false
  }

  addIdea = () => {
    const { loading } = this.state
    const { formValues, validForm } = this.props

    if (validForm && !loading) {
      this.setState({ loading: true })

      // NOTE: Using refetch queries for simplicity rather
      //    than updating the cache manually as you should
      this.props.addIdea({
        variables: {
          data: formValues
        },
        refetchQueries: ['ideas']
      })
        .then(() => this.props.onSuccess())
        .catch((error: any) => {
          // TODO: Handle errors
          this.setState({ loading: false })
        })
    }
  }

  render() {
    return (
      <CircleAction
        right
        onClick={this.addIdea}
        icon={require('../../../assets/icons/tick-green.svg')}
      />
    )
  }
}

interface State {
  loading: boolean
}

interface Props {
  addIdea: any,
  formValues: IdeaFormInputs,
  validForm: boolean,
  onSuccess: () => void
}

interface Response {
  addIdea: () => void
}

interface Variables {
  data: IdeaFormInputs
}

export default graphql<any, Response, Variables>(ADD_IDEA, { name: 'addIdea' })(AddIdeaAction)
