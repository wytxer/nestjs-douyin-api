import { ModuleMetadata } from '@nestjs/common/interfaces'
import { IDouyinPayConfig } from 'douyin-api'

export interface IDouyinAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
  inject: any[]
  useFactory: (...args: any[]) => IDouyinPayConfig
}
