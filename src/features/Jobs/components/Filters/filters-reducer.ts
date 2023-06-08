import { AllReducersActionsType, AppThunk } from '../../../../app/types'
import { jobsAPI } from '../../jobs-api'

import * as appActions from './../../../../app/actions'
import * as filterActions from './actions'
import { CatalogsDataType, FiltersActionsType, VacanciesType } from './types'
export const filtersInitialState = {
  published: 0,
  keyword: '',
  payment_from: 0,
  payment_to: 0,
  catalogs: [] as CatalogsDataType[],
  catalogues: 0,
  vacancies: [] as VacanciesType[],
}
export type FiltersInitialStateType = typeof filtersInitialState
export const filterReducer = (
  state: FiltersInitialStateType = filtersInitialState,
  action: FiltersActionsType
): FiltersInitialStateType => {
  switch (action.type) {
    case 'FILTERS/SET_CATALOGUES':
      return {
        ...state,
        catalogs: action.payload.catalogues.map(cat => {
          return {
            ...cat,
            title: cat.title,
            title_rus: cat.title_rus,
            title_trimmed: cat.title_trimmed,
            url_rus: cat.url_rus,
            positions: cat.positions,
          }
        }),
      }
    case 'FILTERS/SET_KEYWORD':
      return { ...state, keyword: action.payload.keyword }
    case 'FILTERS/SET_PUBLISHED':
      return { ...state, published: action.payload.published }
    case 'FILTERS/SET_PAYMENT_FROM':
      return { ...state, payment_from: action.payload.payment_from }
    case 'FILTERS/SET_PAYMENT_TO':
      return { ...state, payment_to: action.payload.payment_to }
    case 'FILTERS/SET_KEY':
      return { ...state, catalogues: action.payload.key }
    case 'FILTERS/SET_VACANCIES':
      return {
        ...state,
        vacancies: action.payload.vacancies.map(vac => {
          return { ...vac }
        }),
      }
    default:
      return state
  }
}

export const getCataloguesTC = (): AppThunk<AllReducersActionsType> => async dispatch => {
  dispatch(appActions.setAppIsLoadingAC(true))
  try {
    const res = await jobsAPI.getCategories()

    dispatch(filterActions.setCataloguesAC(res.data))
    dispatch(appActions.setAppIsLoadingAC(false))
  } catch (error: any) {
    console.error('error', error)
  }
}
