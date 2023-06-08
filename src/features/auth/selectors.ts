import { AppRootStateType } from '../../app/store'

export const selectAccessToken = (state: AppRootStateType) => state.auth.auth.access_token
