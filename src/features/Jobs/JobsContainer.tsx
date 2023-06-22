import { useEffect } from 'react'

import { Navigate } from 'react-router-dom'

import { selectAppError } from '../../app/selectors'
import { useAppDispatch, useAppSelector } from '../../app/store'
import { PaginationRounded } from '../../common/components/Pagination/PaginationVacancies'
import { PATH } from '../../common/utils/Routes'

import { Filters } from './components/Filters/Filters'
import { selectKeyword } from './components/Filters/selectors'
import { SearchInput } from './components/SearchInput/SearchInput'
import { VacancyShort } from './components/Vacancy/VacancyShort'
import { getJobsTC } from './jobs-reducer'
import s from './JobsContainer.module.css'
import { selectJobs, selectPage } from './selectors'

export const JobsContainer = () => {
  const dispatch = useAppDispatch()
  const jobs = useAppSelector(selectJobs)
  const keyword = useAppSelector(selectKeyword)
  const page = useAppSelector(selectPage)
  const error = useAppSelector(selectAppError)

  useEffect(() => {
    dispatch(getJobsTC())
  }, [keyword, page])

  if (error) {
    return <Navigate to={PATH.vacancies} />
  }

  return (
    <div className={s.container}>
      <Filters />
      <div className={s.searchAndJobsBlock}>
        <SearchInput />
        {jobs &&
          jobs.map(job => {
            return (
              <VacancyShort
                key={job.id}
                profession={job.profession}
                town={job.town.title}
                title={job.type_of_work.title}
                payment_from={job.payment_from}
                payment_to={job.payment_to}
                responsibilities={job.work}
                favourite={job.favorite}
                id={job.id}
                type={'short'}
              />
            )
          })}
        {jobs.length !== 0 && <PaginationRounded />}
      </div>
    </div>
  )
}
