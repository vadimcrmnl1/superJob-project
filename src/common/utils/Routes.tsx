import { createHashRouter } from 'react-router-dom'

import App from '../../app/App'
import { JobsContainer } from '../../features/Jobs/JobsContainer'
import { Button } from '../components/Button/Button'

export const PATH = {
  vacancy: '/vacancy',
  favourites: '/favourites',
  default: '/#/',
}
const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        // errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Button /> },
          { path: PATH.vacancy, element: <JobsContainer /> },
        ],
      },
    ],
  },
])

export default router
