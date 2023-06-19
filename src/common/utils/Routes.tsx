import { createHashRouter } from 'react-router-dom'

import App from '../../app/App'
import { FavouritesContainer } from '../../features/Favourites/FavouritesContainer'
import { VacancyFull } from '../../features/Jobs/components/Vacancy/VacancyFull'
import { JobsContainer } from '../../features/Jobs/JobsContainer'
import { ErrorPage } from '../components/ErrorPage/ErrorPage'

export const PATH = {
  vacancies: '/vacancies',
  favourites: '/favourites',
  default: '/#/',
  vacancy: '/vacancy',
}
const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        // errorElement: <ErrorPage />,
        children: [
          // { index: true, element: <Button /> },
          { path: PATH.vacancies, element: <JobsContainer /> },
          { path: `${PATH.vacancy}`, element: <VacancyFull /> },
          { path: PATH.favourites, element: <FavouritesContainer /> },
        ],
      },
    ],
  },
])

export default router
