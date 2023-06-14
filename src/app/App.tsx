import React, { useEffect } from 'react'

import { Navigate, Outlet } from 'react-router-dom'

import { SimpleBackdrop } from '../common/components/Backdrop/Backdrop'
import { Header } from '../common/components/Header/Header'
import { PATH } from '../common/utils/Routes'
import { authTC } from '../features/auth/auth-reducer'

import s from './App.module.css'
import { selectIsFirstStart } from './selectors'
import { useAppDispatch, useAppSelector } from './store'

function App() {
  const isFirstStart = useAppSelector(selectIsFirstStart)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(authTC())
  }, [])

  if (isFirstStart) {
    return <Navigate to={PATH.vacancies} />
  }

  return (
    <div className={s.App}>
      <Header />
      <SimpleBackdrop />
      {/*{isFirstStart && <Button />}*/}
      <Outlet />
    </div>
  )
}

export default App
