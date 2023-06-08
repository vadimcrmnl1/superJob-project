import { AnyAction } from 'redux'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'

import * as actions from './actions'

export type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never
export type AppThunkDispatch = ThunkDispatch<AppRootStateType, unknown, AllReducersActionsType>
export type AppThunk<A extends AnyAction, ReturnType = void> = ThunkAction<
  ReturnType,
  AppRootStateType,
  unknown,
  A
>
export type AllReducersActionsType = AppActionsType
export type AppActionsType = ReturnType<InferValueTypes<typeof actions>>
export type AppInitialStateType = {
  isLoading: boolean
  error: string
}
