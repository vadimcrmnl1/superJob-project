import { InferValueTypes } from '../../app/types'

import * as actions from './actions'
export type JobsActionsType = ReturnType<InferValueTypes<typeof actions>>
