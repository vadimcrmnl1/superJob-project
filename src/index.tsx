import React from 'react'

// eslint-disable-next-line import/order
import ReactDOM from 'react-dom/client'

import './index.css'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import { store } from './app/store'
import router from './common/utils/Routes'
import reportWebVitals from './reportWebVitals'

// eslint-disable-next-line import/no-named-as-default-member
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>

  // </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
