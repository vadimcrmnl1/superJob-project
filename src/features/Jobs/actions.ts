import { VacancyType } from './jobs-api'

export const fetchVacanciesAC = (vacancies: VacancyType[]) =>
  ({
    type: 'JOBS/FETCH_JOBS',
    payload: { vacancies },
  } as const)
