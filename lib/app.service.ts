import { Injectable, Inject } from '@nestjs/common'
import { IDouyinConfig, DouyinApp } from 'douyin-api'
import { DOUYIN_APP_OPTIONS } from './douyin.constants'

@Injectable()
export class DouyinAppService extends DouyinApp {
  constructor(@Inject(DOUYIN_APP_OPTIONS) readonly config: IDouyinConfig) {
    super(config)
  }
}
