import { Injectable, Inject } from '@nestjs/common'
import axios, { AxiosRequestConfig } from 'axios'

import { DOUYIN_APP_OPTIONS } from './douyin.constants'
import { IStateResponse, IDouyinOptions } from './douyin.interface'
import { ICode2SessionResponse, IAccessTokenResponse, ISendConfig } from './app.interface'

@Injectable()
export class DouyinAppService {
  constructor(@Inject(DOUYIN_APP_OPTIONS) private options: IDouyinOptions) {}
  private readonly server: string = 'https://developer.toutiao.com'

  async request(config: AxiosRequestConfig) {
    config.url = this.server + config.url
    return await axios(config).then((res) => res.data)
  }

  /**
   * 登录凭证校验
   * @param code
   * @link https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/server/log-in/code-2-session
   * @returns
   */
  async code2Session(code: string): Promise<ICode2SessionResponse> {
    const { appid, secret } = this.options
    const data = { appid, secret, code }
    console.log('datadatadatadata', data)

    return await this.request({
      method: 'post',
      url: '/api/apps/v2/jscode2session',
      data
    })
  }

  /**
   * 获取小程序全局唯一后台接口调用凭据
   * @link https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/server/interface-request-credential/get-access-token/
   * @returns
   */
  async accessToken(): Promise<IAccessTokenResponse> {
    const { appid, secret } = this.options

    return await this.request({
      method: 'get',
      url: `/api/apps/v2/token?grant_type=client_credential&appid=${appid}&secret=${secret}`
    })
  }

  /**
   * 发送一次性订阅消息
   * @param config
   * @link https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/server/subscribe-notification/notify/
   * @returns
   */
  async send(config: ISendConfig): Promise<IStateResponse> {
    return await this.request({
      method: 'post',
      url: '/api/apps/subscribe_notification/developer/v1/notify',
      data: config
    })
  }
}
