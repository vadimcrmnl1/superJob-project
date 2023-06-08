import React from 'react'

import { Navigate } from 'react-router-dom'

import { selectIsFirstStart } from '../../../app/selectors'
import { useAppDispatch, useAppSelector } from '../../../app/store'
import { authTC } from '../../../features/auth/auth-reducer'
import { selectAccessToken } from '../../../features/auth/selectors'
import { PATH } from '../../utils/Routes'

import s from './Button.module.css'

export const Button = () => {
  const dispatch = useAppDispatch()
  const isFirst = useAppSelector(selectIsFirstStart)
  const token = useAppSelector(selectAccessToken)

  console.log(token)
  const handleStartSearch = () => {
    dispatch(authTC())
  }

  if (!isFirst) {
    return <Navigate to={PATH.vacancy} />
  }

  return (
    <div className={s.buttonBlock}>
      <button onClick={handleStartSearch} className={s.button}>
        Начать поиск
      </button>
    </div>
  )
}
