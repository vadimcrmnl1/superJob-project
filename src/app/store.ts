import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { authReducer } from '../features/auth/auth-reducer'
// eslint-disable-next-line import/namespace
import { favoritesReducer } from '../features/Favourites/favorites-reducer'
import { filterReducer } from '../features/Jobs/components/Filters/filters-reducer'
import { vacanciesReducer } from '../features/Jobs/jobs-reducer'

import { appReducer } from './app-reducer'
import { AppThunkDispatch } from './types'

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  filters: filterReducer,
  jobs: vacanciesReducer,
  fav: favoritesReducer,
})
const middlewareEnhancer = applyMiddleware<AppThunkDispatch, AppRootStateType>(thunk)

const composedEnhancers = composeWithDevTools(middlewareEnhancer)

export const store = legacy_createStore(rootReducer, composedEnhancers)
export type AppRootStateType = ReturnType<typeof rootReducer>

export const useAppDispatch = () => useDispatch<AppThunkDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

// @ts-ignore
window.store = store
