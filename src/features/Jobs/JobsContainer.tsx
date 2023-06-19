import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../../app/store'
import { PaginationRounded } from '../../common/components/Pagination/Pagination'

import { Filters } from './components/Filters/Filters'
import { SearchInput } from './components/SearchInput/SearchInput'
import { VacancyShort } from './components/Vacancy/VacancyShort'
import s from './JobsContainer.module.css'
import { selectJobs } from './selectors'

export const JobsContainer = () => {
  const dispatch = useAppDispatch()
  const jobs = useAppSelector(selectJobs)

  useEffect(() => {}, [])

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
        {jobs && <PaginationRounded />}
      </div>
    </div>
  )
}
