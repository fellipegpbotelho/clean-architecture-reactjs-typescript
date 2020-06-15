import React, { useContext } from 'react'

import Context from '@/presentation/contexts/form/form-context'

import styles from './input-styles.scss'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  const { errorState } = useContext(Context)
  const error = errorState[props.name]

  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
  }

  const getTitle = (): string => {
    return error
  }

  const getStatus = (): string => {
    return '🔴'
  }

  return (
    <div className={styles.inputWrap}>
      <input {...props} readOnly onFocus={enableInput} />
      <span title={getTitle()} data-testid={`${props.name}-status`} className={styles.status}>{getStatus()}</span>
    </div>
  )
}

export default Input
