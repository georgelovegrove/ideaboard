import React, { Component } from 'react'
import { graphql } from 'react-apollo'

import { UPDATE_IDEA } from '../graphql'
import Card from '../components/card'
import IdeaInputs from '../components/idea-inputs'

class IdeaCard extends Component {
  constructor(props) {
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

  setOnHover = onHover => () => this.setState({ onHover })

  setFormValues = ({ validForm, formValues }) => {
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
        .catch(error => {
          // TODO: Handle errors (Ain't nobody got time for that)
        })
    }
  }

  render() {
    const { onHover, formValues } = this.state

    const leftAction = {
      icon: require('../../assets/icons/trash-grey.svg'),
      onClick: () => {}
    }

    return (
      <Card
        onPointerEnter={this.setOnHover(true)}
        onPointerLeave={this.setOnHover(false)}
        rightAction={onHover && leftAction}
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


export default graphql(UPDATE_IDEA, { name: 'updateIdea' })(IdeaCard)
