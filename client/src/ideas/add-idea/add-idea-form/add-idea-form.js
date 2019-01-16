import React, { Component } from 'react'

import styles from './add-idea-form.module.css'

class AddIdeaForm extends Component {
  state = {
    title: '',
    body: ''
  }

  setInput = input => e => this.setState({ [input]: e.target.value })

  componentDidUpdate(prevProps, prevState) {
    // TODO This will be invoked more than it needs to be without equality checks
    this.props.setValidForm(this.checkValidForm())
  }

  checkValidForm = () => {
    const { title, body } = this.state

    const hasTitle = title.length > 0
    const hasBody = body.length > 0

    return hasTitle && hasBody
  }

  render() {
    const { title, body } = this.state

    return (
      <div className={styles.container}>
        <textarea
          className={styles.title}
          onChange={this.setInput('title')}
          value={title}
          type='text'
          maxLength={40}
          name='title'
          placeholder='Title'
          rows={3}
          autoFocus
        />
        <textarea
          className={styles.body}
          onChange={this.setInput('body')}
          value={body}
          type='text'
          maxLength={140}
          name='body'
          placeholder='Body'
          rows={7}
        />
      </div>
    )
  }
}

export default AddIdeaForm
