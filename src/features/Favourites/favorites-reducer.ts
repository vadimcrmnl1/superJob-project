import { AllReducersActionsType, AppThunk } from '../../app/types'
import * as jobsActions from '../Jobs/actions'
import { FavParamsType, jobsAPI, VacancyType } from '../Jobs/jobs-api'
import { getJobsTC } from '../Jobs/jobs-reducer'

import * as appActions from './../../app/actions'
import * as favActions from './actions'
import { FavoritesActionsType } from './types'

export const favoritesInitialState = {
  favorites: [] as VacancyType[],
  favorite: false,
  more: false,
  page: 1,
  count: 4,
  totalCount: 0,
}
export type FavoritesInitialStateType = typeof favoritesInitialState
export const favoritesReducer = (
  state: FavoritesInitialStateType = favoritesInitialState,
  action: FavoritesActionsType
): FavoritesInitialStateType => {
  switch (action.type) {
    case 'FAV/FETCH_VACANCIES':
      return {
        ...state,
        favorites: action.payload.favorites.map(fav => {
          return { ...fav }
        }),
      }
    case 'FAV/SET_PAGE':
      return { ...state, page: action.payload.page }
    case 'FAV/SET_FAVOURITE':
      return { ...state, favorite: action.payload.favorite }
    case 'FAV/SET_MORE':
      return { ...state, more: action.payload.more }
    case 'FAV/SET_TOTAL_COUNT':
      return { ...state, totalCount: action.payload.totalCount }
    default:
      return state
  }
}
export const getFavoritesVacanciesTC =
  (): AppThunk<AllReducersActionsType> => async (dispatch, getState) => {
    dispatch(appActions.setAppIsLoadingAC(true))
    const { page, count, totalCount } = getState().fav
    const params: FavParamsType = { page, count }

    params.count = totalCount
    try {
      const res = await jobsAPI.getFavouriteVacancies(params)

      dispatch(favActions.fetchFavoritesVacanciesAC(res.data.objects))
      dispatch(favActions.setFavTotalCount(res.data.total))
      dispatch(favActions.setMoreAC(res.data.more))
      dispatch(jobsActions.setPageAC(1))
    } catch (error: any) {
      alert(error)
      dispatch(appActions.setAppErrorAC(true))
    } finally {
      dispatch(appActions.setAppIsLoadingAC(false))
    }
  }
export const setFavouriteVacancyTC =
  (id: number): AppThunk<AllReducersActionsType> =>
  async dispatch => {
    dispatch(appActions.setAppIsLoadingAC(true))
    try {
      const res = await jobsAPI.setFavouriteVacancy(id)

      if (res.status === 201) {
        dispatch(favActions.setFavoriteVacancyAC(true))
        dispatch(getJobsTC())
        dispatch(getFavoritesVacanciesTC())
        dispatch(appActions.setAppIsLoadingAC(false))
      }
    } catch (error: any) {
      alert(error)
    }
  }
export const deleteFavouriteVacancyTC =
  (id: number): AppThunk<AllReducersActionsType> =>
  async dispatch => {
    dispatch(appActions.setAppIsLoadingAC(true))
    try {
      const res = await jobsAPI.deleteFavouriteVacancy(id)

      // if (res.status === 204) {
      dispatch(favActions.setFavoriteVacancyAC(false))
      dispatch(getJobsTC())
      dispatch(getFavoritesVacanciesTC())
      dispatch(appActions.setAppIsLoadingAC(false))
      // }
    } catch (error: any) {
      alert(error)
    }
  }
