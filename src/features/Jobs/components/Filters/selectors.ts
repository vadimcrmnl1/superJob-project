import { AppRootStateType } from '../../../../app/store'

export const selectCatalogs = (state: AppRootStateType) => state.filters.catalogs
export const selectPaymentFrom = (state: AppRootStateType) => state.filters.payment_from
