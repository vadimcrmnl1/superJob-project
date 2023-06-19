import React from 'react'

import { NavLink } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../../../app/store'
import { PATH } from '../../../../common/utils/Routes'
import {
  setCityAC,
  setFavouriteVacancyAC,
  setJobIdAC,
  setJobTitleAC,
  setPaymentFromAC,
  setPaymentToAC,
  setTypeOfWorkAC,
} from '../../actions'
import { getVacancyTC } from '../../jobs-reducer'
import { selectFavVac } from '../../selectors'

import { Favourites } from './components/Favourites/Favourites'
import { Location } from './components/Location/Location'
import { Payment } from './components/Payment/Payment'
import s from './Vacancy.module.css'

type VacancyPropsType = {
  profession: string
  responsibilities?: string
  town: string
  title: string
  payment_from: number
  payment_to: number
  id: number
  favourite: boolean
  type: 'short' | 'full'
}
export const stylesUI = {
  paymentBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'left',
    height: 'maxContent',
  },
  p: {
    fontFamily: 'Inter',
    fontSize: '16px',
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: '20px',
  },
  paymentBlockSpan: {
    marginLeft: '12px',
    fontFamily: 'Poppins',
    fontSize: '20px',
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: '21px',
    color: '#7B7C88',
  },
  paymentBlockH3: {
    marginLeft: '12px',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: '20px',
  },
}
export type StylesUIType = typeof stylesUI

export const VacancyShort: React.FC<VacancyPropsType> = ({
  profession,
  town,
  title,
  payment_to,
  payment_from,
  responsibilities,
  favourite,
  id,
  type,
}) => {
  const dispatch = useAppDispatch()
  const favourVac = useAppSelector(selectFavVac)
  const handleLinkToJob = () => {
    dispatch(setJobTitleAC(title))
    dispatch(setCityAC(town))
    dispatch(setFavouriteVacancyAC(favourite))
    dispatch(setJobIdAC(id))
    dispatch(setPaymentFromAC(payment_from))
    dispatch(setPaymentToAC(payment_to))
    dispatch(setTypeOfWorkAC(title))
    dispatch(getVacancyTC(id))
  }

  return (
    <div className={s.container}>
      <div className={s.vacancyBlock}>
        <div className={s.titleBlock}>
          {type === 'short' ? (
            <NavLink onClick={handleLinkToJob} className={s.title} to={PATH.vacancy + '/?' + id}>
              {profession}
            </NavLink>
          ) : (
            <p>{profession}</p>
          )}
          <div>
            <Favourites favourite={favourite} id={id} />
          </div>
        </div>
        <Payment
          payment_to={payment_to}
          payment_from={payment_from}
          title={title}
          styles={stylesUI}
        />
        <Location town={town} />
      </div>
    </div>
  )
}
