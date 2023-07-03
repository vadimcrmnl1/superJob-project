import { AllReducersActionsType, AppThunk } from '../../app/types'

import * as appActions from './../../app/actions'
import * as favActions from './../Favourites/actions'
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
  jobId: 0,
  favourite: false,
  page: 1,
  count: 4,
  totalCount: 30,
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

    case 'JOBS/SET_CITY':
      return { ...state, city: action.payload.city }
    case 'JOBS/SET_JOB_ID':
      return { ...state, jobId: action.payload.id }
    case 'JOBS/SET_JOB_TITLE':
      return { ...state, jobTitle: action.payload.title }
    case 'JOBS/SET_PAYMENT_FROM':
      return { ...state, payment_to: action.payload.payment_from }
    case 'JOBS/SET_PAYMENT_TO':
      return { ...state, payment_to: action.payload.payment_to }
    case 'JOBS/SET_TYPE_OF_WORK':
      return { ...state, typeOfWork: action.payload.typeOfWork }
    case 'JOBS/SET_VACANCY':
      return { ...state, vacancy: action.payload.vacancy }

    case 'JOBS/SET_PAGE':
      return { ...state, page: action.payload.page }
    case 'JOBS/SET_TOTAL_COUNT':
      return { ...state, totalCount: action.payload.totalCount }
    default:
      return state
  }
}

export const getJobsTC = (): AppThunk<AllReducersActionsType> => async (dispatch, getState) => {
  dispatch(appActions.setAppIsLoadingAC(true))
  const { keyword, catalogues, payment_from, payment_to } = getState().filters
  const { page, count } = getState().jobs
  const params: VacanciesParamsType = { keyword, catalogues, payment_from, payment_to, page, count }

  try {
    const res = await jobsAPI.getVacancies(params)

    dispatch(jobsActions.fetchVacanciesAC(res.data.objects))
    dispatch(jobsActions.setTotalCountAC(res.data.total))
    dispatch(favActions.setFavPageAC(1))
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
