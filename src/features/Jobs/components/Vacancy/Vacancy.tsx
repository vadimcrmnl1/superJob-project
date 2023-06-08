import React from 'react'

import { NavLink } from 'react-router-dom'

import s from './Vacancy.module.css'

type VacancyPropsType = {
  profession: string
  firm_name: string
  town: string
  title: string
  payment_from: number
  payment_to: number
  id: number
}

export const Vacancy: React.FC<VacancyPropsType> = ({
  profession,
  town,
  firm_name,
  title,
  payment_to,
  payment_from,
  id,
}) => {
  return (
    <div className={s.container}>
      <div className={s.vacancyBlock}>
        <div className={s.title}>
          <NavLink to={`vacancy/${id}`}>{profession}</NavLink>
        </div>
        <div className={s.paymentBlock}>
          <p>
            з/п {payment_from} - {payment_to}
          </p>
        </div>
        <div className={s.locationBlock}>{town}</div>
      </div>
    </div>
  )
}
