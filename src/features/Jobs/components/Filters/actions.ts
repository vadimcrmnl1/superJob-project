import { CatalogsDataType } from './types'

export const setKeywordAC = (keyword: string) =>
  ({
    type: 'FILTERS/SET_KEYWORD',
    payload: { keyword },
  } as const)
export const setPaymentFromAC = (payment_from: number) =>
  ({
    type: 'FILTERS/SET_PAYMENT_FROM',
    payload: { payment_from },
  } as const)
export const setPaymentToAC = (payment_to: number) =>
  ({
    type: 'FILTERS/SET_PAYMENT_TO',
    payload: { payment_to },
  } as const)
export const setCataloguesAC = (catalogues: CatalogsDataType[]) =>
  ({
    type: 'FILTERS/SET_CATALOGUES',
    payload: { catalogues },
  } as const)
export const setCatalogKeyAC = (key: number) =>
  ({
    type: 'FILTERS/SET_KEY',
    payload: { key },
  } as const)
