import React, { useEffect, useState } from 'react'

import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded'
import StarRoundedIcon from '@mui/icons-material/StarRounded'

import { selectIsFirstStart } from '../../../../app/selectors'
import { useAppDispatch, useAppSelector } from '../../../../app/store'
import { getVacancyTC } from '../../jobs-reducer'
import { selectCity, selectJobId, selectTypeOfWork, selectVacancy } from '../../selectors'

import { Favourites } from './components/Favourites/Favourites'
import { Location } from './components/Location/Location'
import { Payment } from './components/Payment/Payment'
import s from './VacancyFull.module.css'

export const VacancyFull = () => {
  const dispatch = useAppDispatch()
  const firstStart = useAppSelector(selectIsFirstStart)
  const id = useAppSelector(selectJobId)
  const vacancy = useAppSelector(selectVacancy)
  const typeOfWork = useAppSelector(selectTypeOfWork)
  const city = useAppSelector(selectCity)
  // const div = document.createElement('div')
  //
  // div.className = 'descP'
  // div.innerText = vacancy.vacancyRichText
  // document.body.append('div')

  // useEffect(() => {
  //   dispatch(getVacancyTC(id))
  // }, [])
  // const [favourite, setFavourite] = useState<boolean>(false)
  // const handleFavorite = () => {
  //   setFavourite(!favourite)
  // }

  // if (!firstStart) {
  //   return <Navigate to={PATH.default} />
  // }

  return (
    <div className={s.container}>
      <div className={s.titleContainer}>
        <div className={s.titleBlock}>
          <p>{vacancy.profession}</p>
          <Favourites />
          {/*<span>*/}
          {/*  {!favourite ? (*/}
          {/*    <StarBorderRoundedIcon style={{ color: 'gray' }} onClick={handleFavorite} />*/}
          {/*  ) : (*/}
          {/*    <StarRoundedIcon style={{ color: 'blue' }} onClick={handleFavorite} />*/}
          {/*  )}*/}
          {/*</span>*/}
        </div>
        <Payment
          payment_to={vacancy.payment_to}
          payment_from={vacancy.payment_from}
          title={typeOfWork}
        />
        <Location town={city} />
      </div>
      <div className={s.descriptionBlock}>
        <div>{vacancy.vacancyRichText}</div>
      </div>
    </div>
  )
}
