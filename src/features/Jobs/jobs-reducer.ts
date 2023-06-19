import { AllReducersActionsType, AppThunk } from '../../app/types'

import * as appActions from './../../app/actions'
import * as jobsActions from './actions'
import { jobsAPI, VacanciesParamsType, VacancyType } from './jobs-api'
import { JobsActionsType } from './types'

export const jobsInitialState = {
  jobs: [] as VacancyType[],
  vacancy: {} as VacancyType,
  favoriteVacancies: [] as VacancyType[],
  jobTitle: '',
  payment_to: 0,
  payment_from: 0,
  typeOfWork: '',
  city: '',
  responsibilities: '',
  requirements: '',
  conditions: '',
  jobId: 0,
  favourite: false,
}
export type JobsInitialState = typeof jobsInitialState
export const vacanciesReducer = (
  state: JobsInitialState = jobsInitialState,
  action: JobsActionsType
): JobsInitialState => {
  switch (action.type) {
    case 'JOBS/FETCH_JOBS':
      return {
        ...state,
        jobs: action.payload.vacancies.map(jobs => {
          return { ...jobs }
        }),
      }
    case 'JOBS/FETCH_FAVORITES':
      return {
        ...state,
        favoriteVacancies: action.payload.favorites.map(fav => {
          return { ...fav }
        }),
      }
    case 'JOBS/SET_CITY':
      return { ...state, city: action.payload.city }
    case 'JOBS/SET_JOB_ID':
      return { ...state, jobId: action.payload.id }
    case 'JOBS/SET_JOB_TITLE':
      return { ...state, jobTitle: action.payload.title }
    case 'JOBS/SET_CONDITIONS':
      return { ...state, conditions: action.payload.conditions }
    case 'JOBS/SET_PAYMENT_FROM':
      return { ...state, payment_to: action.payload.payment_from }
    case 'JOBS/SET_PAYMENT_TO':
      return { ...state, payment_to: action.payload.payment_to }
    case 'JOBS/SET_TYPE_OF_WORK':
      return { ...state, typeOfWork: action.payload.typeOfWork }
    case 'JOBS/SET_REQUIREMENTS':
      return { ...state, requirements: action.payload.requirements }
    case 'JOBS/SET_RESPONSIBILITIES':
      return { ...state, responsibilities: action.payload.responsibilities }
    case 'JOBS/SET_VACANCY':
      return { ...state, vacancy: action.payload.vacancy }
    case 'JOBS/SET_FAVOURITE':
      return { ...state, favourite: action.payload.favourite }
    default:
      return state
  }
}

export const getJobsTC = (): AppThunk<AllReducersActionsType> => async (dispatch, getState) => {
  dispatch(appActions.setAppIsLoadingAC(true))
  const { keyword, catalogues, payment_from, payment_to } = getState().filters
  const params: VacanciesParamsType = { keyword, catalogues, payment_from, payment_to }

  try {
    const res = await jobsAPI.getVacancies(params)

    dispatch(jobsActions.fetchVacanciesAC(res.data.objects))
  } catch (error: any) {
    alert(error)
  } finally {
    dispatch(appActions.setAppIsLoadingAC(false))
  }
}
export const getFavoritesVacanciesTC =
  (): AppThunk<AllReducersActionsType> => async (dispatch, getState) => {
    dispatch(appActions.setAppIsLoadingAC(true))
    try {
      const res = await jobsAPI.getFavouriteVacancies()

      dispatch(jobsActions.fetchFavoritesVacanciesAC(res.data.objects))
    } catch (error: any) {
      alert(error)
    } finally {
      dispatch(appActions.setAppIsLoadingAC(false))
    }
  }
export const getVacancyTC =
  (id: number): AppThunk<AllReducersActionsType> =>
  async (dispatch, getState) => {
    dispatch(appActions.setAppIsLoadingAC(true))
    // const id = getState().jobs.jobId

    try {
      const res = await jobsAPI.getVacancy(id)

      dispatch(jobsActions.setVacancyAC(res.data))
    } catch (error: any) {
      alert(error)
    } finally {
      dispatch(appActions.setAppIsLoadingAC(false))
    }
  }
export const setFavouriteVacancyTC =
  (id: number): AppThunk<AllReducersActionsType> =>
  async dispatch => {
    dispatch(appActions.setAppIsLoadingAC(true))
    try {
      const res = await jobsAPI.setFavouriteVacancy(id)

      if (res.status === 201) {
        dispatch(jobsActions.setFavouriteVacancyAC(true))
        dispatch(getJobsTC())
        dispatch(getFavoritesVacanciesTC())
        dispatch(appActions.setAppIsLoadingAC(false))
      }
    } catch (error: any) {
      alert(error)
    }
  }
export const deleteFavouriteVacancyTC =
  (id: number): AppThunk<AllReducersActionsType> =>
  async dispatch => {
    dispatch(appActions.setAppIsLoadingAC(true))
    try {
      const res = await jobsAPI.deleteFavouriteVacancy(id)

      if (res.status === 204) {
        dispatch(jobsActions.setFavouriteVacancyAC(false))
        dispatch(getJobsTC())
        dispatch(getFavoritesVacanciesTC())
        dispatch(appActions.setAppIsLoadingAC(false))
      }
    } catch (error: any) {
      alert(error)
    }
  }
