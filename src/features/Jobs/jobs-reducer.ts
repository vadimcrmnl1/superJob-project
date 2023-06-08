import { AllReducersActionsType, AppThunk } from '../../app/types'

import * as appActions from './../../app/actions'
import * as jobsActions from './actions'
import { jobsAPI, VacanciesParamsType, VacancyType } from './jobs-api'
import { JobsActionsType } from './types'
export const jobsInitialState = {
  jobs: [] as VacancyType[],
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
    default:
      return state
  }
}

export const getJobsTC = (): AppThunk<AllReducersActionsType> => async (dispatch, getState) => {
  dispatch(appActions.setAppIsLoadingAC(true))
  const { keyword, catalogues, payment_from, payment_to } = getState().filters
  const params: VacanciesParamsType = { keyword, catalogues, payment_from, payment_to }

  debugger
  try {
    const res = await jobsAPI.getVacancies(params)

    dispatch(jobsActions.fetchVacanciesAC(res.data.objects))
    dispatch(appActions.setAppIsLoadingAC(false))
  } catch (error: any) {
    console.log(error)
  }
}
