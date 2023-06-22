import React from 'react'

import s from '../../Vacancy.module.css'
import { StylesUIType } from '../../VacancyShort'

type PaymentType = {
  payment_to: number
  payment_from: number
  title?: string
  styles?: StylesUIType
}

export const Payment: React.FC<PaymentType> = ({ payment_from, payment_to, title }) => {
  return (
    <div className={s.paymentBlock}>
      {(payment_to !== 0 || payment_from !== 0) && (
        <p>
          з/п {payment_from ? payment_from : ''} {payment_to ? '-' : ''}{' '}
          {payment_to ? payment_to : ''} rub
        </p>
      )}
      <span>•</span>
      {title ? <h3>{title}</h3> : ''}
    </div>
  )
}
