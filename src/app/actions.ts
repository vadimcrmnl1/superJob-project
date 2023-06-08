export const setAppIsLoadingAC = (isLoading: boolean) =>
  ({
    type: 'APP/SET_IS_LOADING',
    payload: { isLoading },
  } as const)
export const setAppErrorAC = (error: string) =>
  ({
    type: 'APP/SET_ERROR',
    payload: { error },
  } as const)
export const setIsFirstStartAC = (isFirstStart: boolean) =>
  ({
    type: 'APP/SET_FIRST_START',
    payload: { isFirstStart },
  } as const)
