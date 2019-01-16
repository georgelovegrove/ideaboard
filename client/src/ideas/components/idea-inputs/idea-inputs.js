import React from 'react'

import styles from './idea-inputs.module.css'

const IdeaInputs = ({ formValues, setFormValues, autoFocus, ...props }) => {
  const setInput = input => e => {
    const newValues = { ...formValues, [input]: e.target.value }
    setFormValues({
      validForm: checkValidForm(newValues),
      formValues: newValues
    })
  }

  const checkValidForm = newFormValues => {
    const hasTitle = newFormValues['title'].length > 0
    const hasBody = newFormValues['body'].length > 0

    return hasTitle && hasBody
  }

  return (
    <div className={styles.container}>
      <textarea
        className={styles.textarea}
        onChange={setInput('title')}
        value={formValues['title']}
        type='text'
        maxLength={40}
        name='title'
        placeholder='Title'
        rows={3}
        autoFocus={autoFocus}
        { ... props }
      />
      <textarea
        className={styles.textarea}
        onChange={setInput('body')}
        value={formValues['body']}
        type='text'
        maxLength={140}
        name='body'
        placeholder='Body'
        rows={7}
        { ... props }
      />
    </div>
  )
}

export default IdeaInputs
