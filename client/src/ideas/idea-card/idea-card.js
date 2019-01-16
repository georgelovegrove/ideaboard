import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'

import { UPDATE_IDEA } from '../graphql'
import { DELETE_IDEA } from '../graphql'
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

  deleteIdea = () => {
    const { idea } = this.props

    // NOTE: Using refetch queries for simplicity rather
    //    than updating the cache manually as you should
    this.props.deleteIdea({
      variables: {
        where: {
          id: idea.id
        }
      },
      refetchQueries: ['ideas']
    })
      .catch(error => {
        // TODO: Handle errors (Ain't nobody got time for that)
      })
  }

  render() {
    const { onHover, formValues } = this.state

    const rightAction = {
      icon: require('../../assets/icons/trash-grey.svg'),
      onClick: this.deleteIdea
    }

    return (
      <Card
        onPointerEnter={this.setOnHover(true)}
        onPointerLeave={this.setOnHover(false)}
        rightAction={onHover && rightAction}
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


export default compose(
  graphql(UPDATE_IDEA, { name: 'updateIdea' }),
  graphql(DELETE_IDEA, { name: 'deleteIdea' }),
)(IdeaCard)
