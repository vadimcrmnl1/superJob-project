import React from 'react'

import { NavLink } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../app/store'
import { PATH } from '../../common/utils/Routes'
import { VacancyShort } from '../Jobs/components/Vacancy/VacancyShort'
import { selectCountFavVac, selectFavoritesVacancies } from '../Jobs/selectors'

import logo from './../../common/images/favEmptyLogo.jpg'
import s from './FavouritesContainer.module.css'

export const FavouritesContainer = () => {
  const dispatch = useAppDispatch()
  const countFavVac = useAppSelector(selectCountFavVac)
  const favoriteVacancies = useAppSelector(selectFavoritesVacancies)

  console.log(countFavVac)
  // useEffect(() => {
  //   dispatch(getFavoritesVacanciesTC())
  // }, [countFavVac])

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
        favoriteVacancies.map(vac => {
          return (
            <VacancyShort
              key={vac.id}
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
    </div>
  )
}
