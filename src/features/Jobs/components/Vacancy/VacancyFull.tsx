import React from 'react'

import { useSearchParams } from 'react-router-dom'

import { selectIsFirstStart } from '../../../../app/selectors'
import { useAppDispatch, useAppSelector } from '../../../../app/store'
import {
  selectCity,
  selectFavVac,
  selectJobId,
  selectJobTitle,
  selectPaymentFrom,
  selectPaymentTo,
  selectTypeOfWork,
  selectVacancy,
} from '../../selectors'

import s from './VacancyFull.module.css'
import { VacancyShort } from './VacancyShort'

export const VacancyFull = () => {
  const dispatch = useAppDispatch()
  const firstStart = useAppSelector(selectIsFirstStart)
  const id = useAppSelector(selectJobId)
  const vacancy = useAppSelector(selectVacancy)
  const typeOfWork = useAppSelector(selectTypeOfWork)
  const city = useAppSelector(selectCity)
  const favourite = useAppSelector(selectFavVac)
  const [searchParams, setSearchParams] = useSearchParams()
  const vacancyId = Object.fromEntries(searchParams)
  const paymentFrom = useAppSelector(selectPaymentFrom)
  const paymentTo = useAppSelector(selectPaymentTo)
  const professionTitle = useAppSelector(selectJobTitle)

  //
  // useEffect(() => {
  //   dispatch(getVacancyTC(id))
  // }, [])

  return (
    <div className={s.container}>
      <VacancyShort
        profession={professionTitle}
        town={city}
        title={typeOfWork}
        payment_from={paymentFrom}
        payment_to={paymentTo}
        id={id}
        favourite={favourite}
        type={'full'}
      />
      {/*<div className={s.titleContainer}>*/}
      {/*  <div className={st.titleBlock}>*/}
      {/*    <p>{vacancy.profession}</p>*/}
      {/*    <Favourites id={id} favourite={favourite} />*/}
      {/*  </div>*/}
      {/*  <Payment*/}
      {/*    payment_to={vacancy.payment_to}*/}
      {/*    payment_from={vacancy.payment_from}*/}
      {/*    title={typeOfWork}*/}
      {/*  />*/}
      {/*  <Location town={city} />*/}
      {/*</div>*/}
      <div className={s.descriptionBlock}>
        <div
          className={s.vacancyText}
          dangerouslySetInnerHTML={{ __html: vacancy.vacancyRichText }}
        >
          {/*{vacancy.vacancyRichText}*/}
        </div>
      </div>
    </div>
  )
}
