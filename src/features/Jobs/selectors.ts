import { AppRootStateType } from '../../app/store'

export const selectJobs = (state: AppRootStateType) => state.jobs.jobs
