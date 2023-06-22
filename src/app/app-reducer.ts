import { AppActionsType, AppInitialStateType } from './types'

const appInitialState: AppInitialStateType = {
  isLoading: false,
  error: false,
  isFirstStart: true,
}

export const appReducer = (
  state: AppInitialStateType = appInitialState,
  action: AppActionsType
): AppInitialStateType => {
  switch (action.type) {
    case 'APP/SET_IS_LOADING':
      return { ...state, isLoading: action.payload.isLoading }
    case 'APP/SET_ERROR':
      return { ...state, error: action.payload.error }
    case 'APP/SET_FIRST_START':
      return { ...state, isFirstStart: action.payload.isFirstStart }
    default:
      return state
  }
}
