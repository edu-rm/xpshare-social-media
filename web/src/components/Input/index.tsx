import React, { useRef, useEffect, InputHTMLAttributes } from 'react'

import { useField } from '@unform/core'
import { Container } from './styles'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  content: string
}

const Input: React.FC<IInputProps> = ({ name, content, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const { fieldName, defaultValue, error, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <Container error={!!error}>
      <p>{content}</p>
      <input defaultValue={defaultValue} ref={inputRef} type='text' {...rest} />
      {!!error && <span>{error}</span>}
    </Container>
  )
}

export default Input
