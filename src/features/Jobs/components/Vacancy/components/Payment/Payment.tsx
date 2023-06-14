import React from 'react'

import s from '../../Vacancy.module.css'
import { StylesUIType } from '../../VacancyShort'

type PaymentType = {
  payment_to: number
  payment_from: number
  title?: string
  styles?: StylesUIType
}

export const Payment: React.FC<PaymentType> = ({ payment_from, payment_to, title, styles }) => {
  return (
    <div className={s.paymentBlock}>
      {(payment_to !== 0 || payment_from !== 0) && (
        <p style={styles?.p}>
          з/п {payment_from ? payment_from : ''} {payment_to ? '-' : ''}{' '}
          {payment_to ? payment_to : ''} rub
        </p>
      )}
      <span style={styles?.paymentBlockSpan}>•</span>
      {title ? <h3 style={styles?.paymentBlockH3}>{title}</h3> : ''}
    </div>
  )
}
