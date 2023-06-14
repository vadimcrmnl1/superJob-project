import { NavLink } from 'react-router-dom'

import { PATH } from '../../utils/Routes'

import s from './ErrorPage.module.css'
export const ErrorPage = () => {
  return (
    <div className={s.container}>
      <h1>404</h1>
      <p>What is wrong</p>
      <div className={s.buttonBlock}>
        <NavLink to={PATH.vacancies}>Вернуться к поиску</NavLink>
      </div>
    </div>
  )
}
