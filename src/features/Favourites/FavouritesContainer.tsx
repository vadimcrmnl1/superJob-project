import React, { useEffect } from 'react'

import { Navigate, NavLink } from 'react-router-dom'

import { selectAppError } from '../../app/selectors'
import { useAppDispatch, useAppSelector } from '../../app/store'
import { PATH } from '../../common/utils/Routes'
import { VacancyShort } from '../Jobs/components/Vacancy/VacancyShort'

import logo from './../../common/images/favEmptyLogo.jpg'
import { getFavoritesVacanciesTC } from './favorites-reducer'
import s from './FavouritesContainer.module.css'
import {
  selectFavLength,
  selectFavMore,
  selectFavPage,
  selectFavTotalCount,
  selectFavVacancies,
} from './selectors'

export const FavouritesContainer = () => {
  const dispatch = useAppDispatch()
  const page = useAppSelector(selectFavPage)
  const totalCount = useAppSelector(selectFavTotalCount)
  const error = useAppSelector(selectAppError)
  const countFavVac = useAppSelector(selectFavLength)
  const favoriteVacancies = useAppSelector(selectFavVacancies)
  const more = useAppSelector(selectFavMore)

  useEffect(() => {
    dispatch(getFavoritesVacanciesTC())
  }, [page])

  if (error) {
    return <Navigate to={PATH.vacancies} />
  }

  return (
    <div className={s.container}>
      {!countFavVac ? (
        <div className={s.emptyBlock}>
          <img src={logo} alt={'logo'} />
          <p>Упс, здесь еще ничего нет!</p>
          <NavLink to={PATH.vacancies}>
            <button>Поиск Вакансий</button>
          </NavLink>
        </div>
      ) : (
        favoriteVacancies.map((vac, index) => {
          return (
            <VacancyShort
              key={index}
              profession={vac.profession}
              town={vac.town.title}
              title={vac.type_of_work.title}
              payment_from={vac.payment_from}
              payment_to={vac.payment_to}
              id={vac.id}
              favourite={vac.favorite}
              type={'short'}
            />
          )
        })
      )}
      {/*{totalCount > 3 || more ? <PaginationFav /> : <div style={{ marginTop: '15px' }}></div>}*/}
      <div style={{ marginTop: '15px' }}></div>
    </div>
  )
}
