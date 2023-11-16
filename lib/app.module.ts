import { DynamicModule, Module } from '@nestjs/common'
import { IDouyinConfig } from 'douyin-api'

import { IDouyinAsyncOptions } from './douyin.interface'
import { DOUYIN_APP_OPTIONS } from './douyin.constants'
import { DouyinAppService } from './app.service'

@Module({})
export class DouyinAppModule {
  public static forRoot(options: IDouyinConfig): DynamicModule {
    return {
      module: DouyinAppModule,
      providers: [
        {
          provide: DOUYIN_APP_OPTIONS,
          useValue: options
        },
        DouyinAppService
      ],
      exports: [DouyinAppService]
    }
  }

  public static forRootAsync(options: IDouyinAsyncOptions): DynamicModule {
    return {
      module: DouyinAppModule,
      imports: options.imports || [],
      providers: [this.createAsyncOptions(options), DouyinAppService],
      exports: [DouyinAppService]
    }
  }

  private static createAsyncOptions = (options: IDouyinAsyncOptions) => ({
    provide: DOUYIN_APP_OPTIONS,
    useFactory: options.useFactory,
    inject: options.inject
  })
}
