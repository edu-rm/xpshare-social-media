import React, {
  useRef,
  useEffect,
  useCallback,
  InputHTMLAttributes,
  useState
} from 'react'

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
    <Container>
      <p>{content}</p>
      <input defaultValue={defaultValue} ref={inputRef} type='text' {...rest} />
    </Container>
  )
}

export default Input
