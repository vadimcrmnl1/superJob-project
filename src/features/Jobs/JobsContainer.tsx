import { useAppSelector } from '../../app/store'

import { Filters } from './components/Filters/Filters'
import { SearchInput } from './components/SearchInput/SearchInput'
import { Vacancy } from './components/Vacancy/Vacancy'
import s from './JobsContainer.module.css'
import { selectJobs } from './selectors'
export const JobsContainer = () => {
  const jobs = useAppSelector(selectJobs)

  return (
    <div className={s.container}>
      <Filters />
      <div className={s.searchAndJobsBlock}>
        <SearchInput />
        {jobs &&
          jobs.map(job => {
            return (
              <Vacancy
                key={job.id}
                profession={job.profession}
                firm_name={job.firm_name}
                town={job.town.title}
                title={job.type_of_work.title}
                payment_from={job.payment_from}
                payment_to={job.payment_to}
                id={job.id}
              />
            )
          })}
      </div>
    </div>
  )
}
