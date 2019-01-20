import React, { Component } from 'react'
import { graphql } from 'react-apollo'

import { ADD_IDEA } from '../graphql'
import Card from '../components/card'
import IdeaInputs, { IdeaFormInputs, SetFormValues } from '../components/idea-inputs'
import AddIdeaAction from './add-idea-action'
import HideFormAction from './hide-form-action'

import styles from './add-idea.module.css'

class AddIdea extends Component<Props, State> {
  state = initialState

  showForm = () => {
    if (!this.state.showForm) this.setState({ showForm: true })
  }

  hideForm = () => {
    if (this.state.showForm) this.setState({ showForm: false })
  }

  setFormValues = ({ validForm, formValues }: SetFormValues) => {
    this.setState({ validForm, formValues })
  }

  onSuccess = () => this.setState(initialState)

  renderIdeaAction = () => {
    const { validForm, formValues } = this.state
    return <AddIdeaAction {...{validForm, formValues}} onSuccess={this.onSuccess} />
  }

  renderHideFormAction = () => <HideFormAction onClick={this.hideForm} />

  render() {
    const { showForm, validForm, formValues } = this.state

    return (
      <Card
        { ...showForm && { LeftComponent: this.renderHideFormAction }}
        { ...showForm && validForm && { RightComponent: this.renderIdeaAction }}
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

const initialState = {
  showForm: false,
  formValues: {
    title: '',
    body: ''
  },
  validForm: false,
  loading: false
}

interface State {
  showForm: boolean,
  formValues: IdeaFormInputs,
  validForm: boolean,
  loading: boolean
}

interface Props {
  addIdea: any,
}

interface Response {
  addIdea: () => void
}

interface Variables {
  data: IdeaFormInputs
}

export default graphql<any, Response, Variables>(ADD_IDEA, { name: 'addIdea' })(AddIdea)
