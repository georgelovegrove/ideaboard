export interface IdeaFormInputs {
  title: string,
  body: string
}

export interface SetFormValues {
  formValues: IdeaFormInputs,
  validForm: boolean
}
