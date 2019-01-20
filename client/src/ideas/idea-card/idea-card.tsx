import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'

import { UPDATE_IDEA } from '../graphql'
import DeleteIdeaAction from './delete-idea-action'
import Card from '../components/card'
import IdeaInputs, { SetFormValues, IdeaFormInputs } from '../components/idea-inputs'

class IdeaCard extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    const { idea } = props
    this.state = {
      onHover: false,
      validForm: false,
      formValues: {
        title: idea.title,
        body: idea.body
      }
    }
  }

  setOnHover = (onHover: boolean) => () => this.setState({ onHover })

  setFormValues = ({ validForm, formValues }: SetFormValues) => {
    this.setState({ validForm, formValues })
  }

  updateIdea = () => {
    const { formValues, validForm } = this.state
    const { idea } = this.props

    if (!validForm) {
      this.setState({
        formValues: {
          title: idea.title,
          body: idea.body
        },
        validForm: false
      })
    } else {

      this.props.updateIdea({
        variables: {
          data: formValues,
          where: {
            id: idea.id
          }
        }
      })
        .catch((error: any) => {
          // TODO: Handle errors (Ain't nobody got time for that)
        })
    }
  }

  renderDeleteIdeaAction = () => {
    const { idea } = this.props
    return <DeleteIdeaAction {...{idea}} />
  }

  render() {
    const { onHover, formValues } = this.state

    return (
      <Card
        onPointerEnter={this.setOnHover(true)}
        onPointerLeave={this.setOnHover(false)}
        { ...onHover && { RightComponent: this.renderDeleteIdeaAction }}
      >
        <IdeaInputs
          onBlur={this.updateIdea}
          formValues={formValues}
          setFormValues={this.setFormValues}
        />
      </Card>
    )
  }
}

interface State {
  onHover: boolean,
  validForm: boolean,
  formValues: IdeaFormInputs
}

interface Props {
  idea: {
    id: string
    title: string
    body: string
  },
  updateIdea: ({}) => any
  deleteIdea: ({}) => any
}

export default graphql<any, {}, {}>(UPDATE_IDEA, { name: 'updateIdea' })(IdeaCard)
