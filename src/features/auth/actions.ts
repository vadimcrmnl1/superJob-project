import { AuthDataType } from './types'

export const setAuthAC = (auth: AuthDataType) =>
  ({
    type: 'AUTH/SET_AUTH',
    payload: { auth },
  } as const)
