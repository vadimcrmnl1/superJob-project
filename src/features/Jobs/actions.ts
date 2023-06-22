import { VacancyType } from './jobs-api'

export const fetchVacanciesAC = (vacancies: VacancyType[]) =>
  ({
    type: 'JOBS/FETCH_JOBS',
    payload: { vacancies },
  } as const)

export const setJobTitleAC = (title: string) =>
  ({
    type: 'JOBS/SET_JOB_TITLE',
    payload: { title },
  } as const)
export const setPaymentFromAC = (payment_from: number) =>
  ({
    type: 'JOBS/SET_PAYMENT_FROM',
    payload: { payment_from },
  } as const)
export const setPaymentToAC = (payment_to: number) =>
  ({
    type: 'JOBS/SET_PAYMENT_TO',
    payload: { payment_to },
  } as const)
export const setTypeOfWorkAC = (typeOfWork: string) =>
  ({
    type: 'JOBS/SET_TYPE_OF_WORK',
    payload: { typeOfWork },
  } as const)
export const setCityAC = (city: string) =>
  ({
    type: 'JOBS/SET_CITY',
    payload: { city },
  } as const)

export const setJobIdAC = (id: number) =>
  ({
    type: 'JOBS/SET_JOB_ID',
    payload: { id },
  } as const)
export const setVacancyAC = (vacancy: VacancyType) =>
  ({
    type: 'JOBS/SET_VACANCY',
    payload: { vacancy },
  } as const)

export const setPageAC = (page: number) =>
  ({
    type: 'JOBS/SET_PAGE',
    payload: { page },
  } as const)
export const setTotalCountAC = (totalCount: number) =>
  ({
    type: 'JOBS/SET_TOTAL_COUNT',
    payload: { totalCount },
  } as const)
