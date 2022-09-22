import React from 'react'
import styles from './login.styles.scss'
import logo from '../../assets/logo.svg'
import { Spinner } from '@/presentation/components/Spinner'

export const Login: React.FC = () => {
  return (
    <div className={styles.login}>
      <header className={styles.header}>
        <img src={logo} />
        <h1>4Dev - Enquetes para programadores</h1>
      </header>

      <form className={styles.form}>
        <h2>Login</h2>
        <div className={styles.inputWrap}>
          <input type="email" name="email" placeholder="Digite seu e-mail" />
        </div>

        <div className={styles.inputWrap}>
          <input type="password" name="password" placeholder="Digite sua senha" />
        </div>

        <button className={styles.submit} type="submit">Entrar</button>
        <span className={styles.link}>Criar Conta</span>

        <div className={styles.errorWrap}>
          <Spinner className={styles.spinner} />
          <span className={styles.error}>Erro</span>
        </div>
      </form>

      <footer className={styles.footer} />
    </div>
  )
}
