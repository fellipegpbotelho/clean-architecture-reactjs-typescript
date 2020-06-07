import React from 'react'

import FormStatus from '@/presentation/components/form-status/form-status'
import Footer from '@/presentation/components/footer/footer'
import Header from '@/presentation/components/login-header/login-header'
import Input from '@/presentation/components/input/input'

import styles from './login-styles.scss'

const Login: React.FC = () => {
  return (
    <div className={styles.login}>
      <Header />
      <form className={styles.form}>
        <h2>Login</h2>
        <Input type="email" name="email" placeholder="Digite seu e-mail" />
        <Input type="password" name="password" placeholder="Digite sua senha" />
        <button type="submit" className={styles.submit}>Entrar</button>
        <span className={styles.link}>Criar conta</span>
        <FormStatus />
      </form>
      <Footer />
    </div>
  )
}

export default Login
