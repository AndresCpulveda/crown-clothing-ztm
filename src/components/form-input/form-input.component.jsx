import React from 'react'
import { FormInputLabel, Group, Input } from './form-input.styles.js'

const FormInput = ({label, inputOptions}) => {
  return (
    <Group>
      <Input {...inputOptions}/>
      {label ? <FormInputLabel $shrink={inputOptions.value.length}>{label}</FormInputLabel> : null}
    </Group>
  )
}

export default FormInput