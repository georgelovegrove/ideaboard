import React, { Component } from 'react'

import Card from '../components/card'
import AddIdeaForm from './add-idea-form'

import styles from './add-idea.module.css'

class AddIdea extends Component {
  state = {
    showForm: false,
    validForm: false
  }

  showForm = () => {
    if (!this.state.showForm) this.setState({ showForm: true })
  }

  hideForm = () => {
    if (this.state.showForm) this.setState({ showForm: false })
  }

  setValidForm = validForm => {
    if (validForm !== this.state.validForm) this.setState({ validForm })
  }

  render() {
    const { showForm, validForm } = this.state

    const hideFormAction = {
      icon: require('../../assets/icons/cross-red.svg'),
      onClick: this.hideForm
    }

    const successFormAction = {
      icon: require('../../assets/icons/tick-green.svg'),
      onClick: () => {}
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
          <AddIdeaForm
            setValidForm={this.setValidForm}
          />
        }
      </Card>
    )
  }
}

export default AddIdea
