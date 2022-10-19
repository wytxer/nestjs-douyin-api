import { ModuleMetadata } from '@nestjs/common/interfaces'

export interface IDouyinOptions {
  appid: string
  secret: string
}

export interface IDouyinAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
  inject: any[]
  useFactory: (...args: any[]) => IDouyinOptions
}

export interface IStateResponse {
  err_no: string
  err_tips: string
}
