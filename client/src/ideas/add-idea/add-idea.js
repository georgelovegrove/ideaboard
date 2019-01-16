import React, { Component } from 'react'
import { graphql } from 'react-apollo'

import { ADD_IDEA } from '../graphql'
import Card from '../components/card'
import IdeaInputs from '../components/idea-inputs'

import styles from './add-idea.module.css'

const initialState = {
  showForm: false,
  formValues: {
    title: '',
    body: ''
  },
  validForm: false,
  loading: false
}

class AddIdea extends Component {
  state = initialState

  showForm = () => {
    if (!this.state.showForm) this.setState({ showForm: true })
  }

  hideForm = () => {
    if (this.state.showForm) this.setState({ showForm: false })
  }

  setFormValues = ({ validForm, formValues }) => {
    this.setState({ validForm, formValues })
  }

  addIdea = () => {
    const { formValues, loading, validForm } = this.state

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
        .then(() => this.setState({ ...initialState }))
        .catch(error => {
          // TODO: Handle errors (Ain't nobody got time for that)
          this.setState({ loading: false })
        })
    }
  }

  render() {
    const { showForm, validForm, formValues } = this.state

    const hideFormAction = {
      icon: require('../../assets/icons/cross-red.svg'),
      onClick: this.hideForm
    }

    const successFormAction = {
      icon: require('../../assets/icons/tick-green.svg'),
      onClick: this.addIdea
    }

    return (
      <Card
        leftAction={showForm && hideFormAction}
        rightAction={showForm && validForm && successFormAction}
      >
        { !showForm &&
          <div
            onClick={this.showForm}
            className={styles.container}
          >
            <img
              src={require('../../assets/icons/plus-green.svg')}
              alt="add idea"
              className={styles.addIcon}
            />
          </div>
        }
        { showForm &&
          <IdeaInputs
            autoFocus={true}
            formValues={formValues}
            setFormValues={this.setFormValues}
          />
        }
      </Card>
    )
  }
}

export default graphql(ADD_IDEA, { name: 'addIdea' })(AddIdea)
