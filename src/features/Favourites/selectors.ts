import { AppRootStateType } from '../../app/store'

export const selectFavPage = (state: AppRootStateType) => state.fav.page
export const selectFavCount = (state: AppRootStateType) => state.fav.count
export const selectFavTotalCount = (state: AppRootStateType) => state.fav.totalCount
export const selectFavMore = (state: AppRootStateType) => state.fav.more
export const selectFavLength = (state: AppRootStateType) => state.fav.favorites.length
export const selectFavVacancies = (state: AppRootStateType) => state.fav.favorites
export const selectFavVac = (state: AppRootStateType) => state.fav.favorite
