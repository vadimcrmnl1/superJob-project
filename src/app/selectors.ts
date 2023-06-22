import { AppRootStateType } from './store'

export const selectIsLoading = (state: AppRootStateType) => state.app.isLoading
export const selectIsFirstStart = (state: AppRootStateType) => state.app.isFirstStart
export const selectAppError = (state: AppRootStateType) => state.app.error
