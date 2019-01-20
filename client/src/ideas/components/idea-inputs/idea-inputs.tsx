import React from 'react'

import { IdeaFormInputs, SetFormValues } from './types'
import styles from './idea-inputs.module.css'

const IdeaInputs = ({ formValues, setFormValues, autoFocus, ...props }: Props) => {
  const setInput = (input: any) => (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValues = { ...formValues, [input]: e.target.value }
    setFormValues({
      validForm: checkValidForm(newValues),
      formValues: newValues
    })
  }

  const checkValidForm = (newFormValues: IdeaFormInputs) => {
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
        maxLength={140}
        name='body'
        placeholder='Body'
        rows={7}
        { ... props }
      />
    </div>
  )
}

interface Props {
  formValues: IdeaFormInputs,
  setFormValues: ({ formValues, validForm }: SetFormValues) => void,
  autoFocus?: boolean,
  onBlur?: () => void
}

export default IdeaInputs
