import { AppRootStateType } from '../../app/store'

export const selectJobs = (state: AppRootStateType) => state.jobs.jobs
export const selectJobTitle = (state: AppRootStateType) => state.jobs.jobTitle
export const selectPaymentFrom = (state: AppRootStateType) => state.jobs.payment_from
export const selectPaymentTo = (state: AppRootStateType) => state.jobs.payment_to
export const selectConditions = (state: AppRootStateType) => state.jobs.conditions
export const selectTypeOfWork = (state: AppRootStateType) => state.jobs.typeOfWork
export const selectRequirements = (state: AppRootStateType) => state.jobs.requirements
export const selectResponsibilities = (state: AppRootStateType) => state.jobs.responsibilities
export const selectCity = (state: AppRootStateType) => state.jobs.city
export const selectJobId = (state: AppRootStateType) => state.jobs.jobId
export const selectVacancy = (state: AppRootStateType) => state.jobs.vacancy
