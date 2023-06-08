import * as appActions from '../../app/actions'
import { AllReducersActionsType, AppThunk } from '../../app/types'
import { AuthParamsType, jobsAPI } from '../Jobs/jobs-api'

import * as authActions from './actions'
import { AuthActionsType } from './types'

export const authInitialState = {
  auth: {
    access_token: '',
    expires_in: 0,
    refresh_token: '',
    reg_user_resumes_count: 0,
    token_type: '',
    ttl: 0,
  },
}
export type AuthInitialState = typeof authInitialState

export const authReducer = (
  state: AuthInitialState = authInitialState,
  action: AuthActionsType
): AuthInitialState => {
  switch (action.type) {
    case 'AUTH/SET_AUTH':
      return { ...state, auth: action.payload.auth }
    default:
      return state
  }
}
export const authTC = (): AppThunk<AllReducersActionsType> => async dispatch => {
  dispatch(appActions.setAppIsLoadingAC(true))
  const params: AuthParamsType = {
    login: 'sergei.stralenia@gmail.com',
    password: 'paralect123',
    client_id: 2356,
    client_secret:
      'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
    hr: 0,
  }

  try {
    const res = await jobsAPI.authWithPass(params)

    dispatch(appActions.setIsFirstStartAC(false))
    dispatch(appActions.setAppIsLoadingAC(false))
    dispatch(authActions.setAuthAC(res.data))
  } catch (error: any) {
    console.log('error', error)
  }
}
