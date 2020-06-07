import React, { memo } from 'react'

import { Logo } from '@/presentation/components'

import styles from './login-header-styles.scss'

const LoginHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <h1>Enquetes para devs</h1>
    </header>
  )
}

export default memo(LoginHeader)
