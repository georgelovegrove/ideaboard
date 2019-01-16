import React from 'react'

import styles from './idea-inputs.module.css'

const IdeaInputs = ({ formValues, setFormValues }) => {
  const setInput = input => e => {
    setFormValues({
      validForm: checkValidForm(),
      formValues: { ...formValues, [input]: e.target.value }
    })
  }

  const checkValidForm = () => {
    const hasTitle = formValues['title'].length > 0
    const hasBody = formValues['body'].length > 0

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
        autoFocus
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
      />
    </div>
  )
}

export default IdeaInputs
