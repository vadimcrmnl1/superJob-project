import { VacancyType } from '../Jobs/jobs-api'

export const fetchFavoritesVacanciesAC = (favorites: VacancyType[]) =>
  ({
    type: 'FAV/FETCH_VACANCIES',
    payload: { favorites },
  } as const)
export const setFavoriteVacancyAC = (favorite: boolean) =>
  ({
    type: 'FAV/SET_FAVOURITE',
    payload: { favorite },
  } as const)
export const setFavPageAC = (page: number) =>
  ({
    type: 'FAV/SET_PAGE',
    payload: { page },
  } as const)
export const setMoreAC = (more: boolean) =>
  ({
    type: 'FAV/SET_MORE',
    payload: { more },
  } as const)
export const setFavTotalCount = (totalCount: number) =>
  ({
    type: 'FAV/SET_TOTAL_COUNT',
    payload: { totalCount },
  } as const)
