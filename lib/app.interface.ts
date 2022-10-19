import { IStateResponse } from './douyin.interface'

export interface ICode2SessionResponse extends IStateResponse {
  data: {
    openid: string
    session_key: string
    unionid?: string
  }
}

export interface IAccessTokenResponse extends IStateResponse {
  data: {
    access_token: string
    expires_in: number
  }
}

export interface ISendConfig {
  access_token: string
  app_id: string
  open_id: string
  tpl_id: string
  page: string
  data: Record<string, any>
}
