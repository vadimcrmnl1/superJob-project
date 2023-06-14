import React from 'react'

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import { NavLink } from 'react-router-dom'

import { useAppDispatch } from '../../../../app/store'
import { PATH } from '../../../../common/utils/Routes'
import {
  setCityAC,
  setJobIdAC,
  setJobTitleAC,
  setPaymentFromAC,
  setPaymentToAC,
  setResponsibilitiesAC,
  setTypeOfWorkAC,
} from '../../actions'
import { getVacancyTC } from '../../jobs-reducer'

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
  id,
}) => {
  const dispatch = useAppDispatch()
  const handleLinkToJob = () => {
    dispatch(setJobIdAC(id))
    dispatch(setTypeOfWorkAC(title))
    dispatch(getVacancyTC(id))
  }

  return (
    <div className={s.container}>
      <div className={s.vacancyBlock}>
        <div className={s.titleBlock}>
          <NavLink onClick={handleLinkToJob} className={s.title} to={PATH.vacancy + '/?' + id}>
            {profession}
          </NavLink>
          <div>
            <Favourites />
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
