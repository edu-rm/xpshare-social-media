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

const Input: React.FC<IInputProps> = ({ name, content }) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  const { fieldName, defaultValue, error, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textAreaRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <Container>
      <p>{content}</p>
      <textarea defaultValue={defaultValue} ref={textAreaRef}></textarea>
    </Container>
  )
}

export default Input
