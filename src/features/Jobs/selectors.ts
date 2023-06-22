import { AppRootStateType } from '../../app/store'

export const selectJobs = (state: AppRootStateType) => state.jobs.jobs
export const selectJobTitle = (state: AppRootStateType) => state.jobs.jobTitle
export const selectPaymentFrom = (state: AppRootStateType) => state.jobs.payment_from
export const selectPaymentTo = (state: AppRootStateType) => state.jobs.payment_to
export const selectTypeOfWork = (state: AppRootStateType) => state.jobs.typeOfWork
export const selectCity = (state: AppRootStateType) => state.jobs.city
export const selectJobId = (state: AppRootStateType) => state.jobs.jobId
export const selectVacancy = (state: AppRootStateType) => state.jobs.vacancy
export const selectFavVac = (state: AppRootStateType) => state.jobs.favourite
export const selectPageCount = (state: AppRootStateType) => state.jobs.count
export const selectPage = (state: AppRootStateType) => state.jobs.page
export const selectTotalCount = (state: AppRootStateType) => state.jobs.totalCount
