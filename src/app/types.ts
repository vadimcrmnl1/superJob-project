import { AnyAction } from 'redux'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'

import { AuthActionsType } from '../features/auth/types'
import { FavoritesActionsType } from '../features/Favourites/types'
import { FiltersActionsType } from '../features/Jobs/components/Filters/types'
import { JobsActionsType } from '../features/Jobs/types'

import * as actions from './actions'
import { AppRootStateType } from './store'

export type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never
export type AppThunkDispatch = ThunkDispatch<AppRootStateType, unknown, AllReducersActionsType>
export type AppThunk<A extends AnyAction, ReturnType = void> = ThunkAction<
  ReturnType,
  AppRootStateType,
  unknown,
  A
>
export type AllReducersActionsType =
  | AppActionsType
  | AuthActionsType
  | FiltersActionsType
  | JobsActionsType
  | FavoritesActionsType
export type AppActionsType = ReturnType<InferValueTypes<typeof actions>>
export type AppInitialStateType = {
  isLoading: boolean
  error: boolean
  isFirstStart: boolean
}
