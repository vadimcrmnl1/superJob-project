import { VacancyType } from './jobs-api'

export const fetchVacanciesAC = (vacancies: VacancyType[]) =>
  ({
    type: 'JOBS/FETCH_JOBS',
    payload: { vacancies },
  } as const)
export const fetchFavoritesVacanciesAC = (favorites: VacancyType[]) =>
  ({
    type: 'JOBS/FETCH_FAVORITES',
    payload: { favorites },
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
export const setResponsibilitiesAC = (responsibilities: string) =>
  ({
    type: 'JOBS/SET_RESPONSIBILITIES',
    payload: { responsibilities },
  } as const)
export const setRequirementsAC = (requirements: string) =>
  ({
    type: 'JOBS/SET_REQUIREMENTS',
    payload: { requirements },
  } as const)
export const setConditions = (conditions: string) =>
  ({
    type: 'JOBS/SET_CONDITIONS',
    payload: { conditions },
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
export const setFavouriteVacancyAC = (favourite: boolean) =>
  ({
    type: 'JOBS/SET_FAVOURITE',
    payload: { favourite },
  } as const)
