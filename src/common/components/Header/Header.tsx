import { NavLink } from 'react-router-dom'

import { useAppDispatch } from '../../../app/store'
import { PATH } from '../../utils/Routes'

import logo from './../../images/logo.jpg'
import s from './Header.module.css'

export const Header = () => {
  const handleFetchFavorites = () => {
    // dispatch(getFavoritesVacanciesTC())
  }

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
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? '#5E96FC' : 'black',
              }
            }}
            className={s.link}
            to={PATH.vacancies}
          >
            Поиск вакансий
          </NavLink>
        </div>
        <div>
          <NavLink
            style={({ isActive }) => {
              return {
                color: !isActive ? 'black' : '#5E96FC',
              }
            }}
            onClick={handleFetchFavorites}
            className={s.link}
            to={PATH.favourites}
          >
            Избранное
          </NavLink>
        </div>
      </div>
    </div>
  )
}
