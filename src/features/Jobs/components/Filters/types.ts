import { InferValueTypes } from '../../../../app/types'

import * as actions from './actions'
export type FiltersActionsType = ReturnType<InferValueTypes<typeof actions>>
export type VacanciesType = {
  id: number
  profession: string
}
export type CatalogsDataType = {
  title_rus: string
  url_rus: string
  title: string
  title_trimmed: string
  key: number
  positions: PositionsDataType[]
}
export type PositionsDataType = {
  title_rus: string
  url_rus: string
  title: string
  id_parent: number
  key: number
}
