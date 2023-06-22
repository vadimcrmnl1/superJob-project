import { AppRootStateType } from '../../../../app/store'

export const selectCatalogs = (state: AppRootStateType) => state.filters.catalogs
export const selectPaymentFrom = (state: AppRootStateType) => state.filters.payment_from
export const selectPaymentTo = (state: AppRootStateType) => state.filters.payment_to
export const selectKeyword = (state: AppRootStateType) => state.filters.keyword
export const selectCatalogKey = (state: AppRootStateType) => state.filters.catalogues
