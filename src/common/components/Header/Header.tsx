import { NavLink } from 'react-router-dom'

import { PATH } from '../../utils/Routes'

import logo from './../../images/logo.jpg'
import s from './Header.module.css'

export const Header = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.logoBlock}>
        <a href={'http://localhost:3000/'}>
          <img src={logo} alt={'logo'} />
        </a>
        <p>Jobored</p>
      </div>
      <div className={s.prescriptionBlock}>
        <div>
          <NavLink className={s.link} to={PATH.vacancies}>
            Поиск вакансий
          </NavLink>
        </div>
        <div>
          <NavLink className={s.link} to={PATH.favourites}>
            Избранное
          </NavLink>
        </div>
      </div>
    </div>
  )
}
