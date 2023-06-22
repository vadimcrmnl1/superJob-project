import { InferValueTypes } from '../../app/types'

import * as actions from './actions'
export type FavoritesActionsType = ReturnType<InferValueTypes<typeof actions>>
