import { InferValueTypes } from '../../app/types'

import * as actions from './actions'
export type AuthActionsType = ReturnType<InferValueTypes<typeof actions>>
export type AuthDataType = {
  access_token: string
  expires_in: number
  refresh_token: string
  reg_user_resumes_count: number
  token_type: string
  ttl: number
}
