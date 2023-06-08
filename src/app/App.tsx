import React from 'react'

import { Outlet } from 'react-router-dom'

import { SimpleBackdrop } from '../common/components/Backdrop/Backdrop'
import { Header } from '../common/components/Header/Header'

import s from './App.module.css'
import { selectIsFirstStart } from './selectors'
import { useAppSelector } from './store'

function App() {
  const isFirstStart = useAppSelector(selectIsFirstStart)

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
