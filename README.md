# NESTJS DOUYIN API

基于 [douyin-api](https://github.com/wytxer/douyin-api) 封装的抖音生态服务端接口


## 使用

导入模块：

```ts
import { DouyinAppModule } from 'nestjs-douyin-api'

@Module({
  imports: [
    DouyinAppModule.forRoot({ appid: '', secret: '' })
  ]
})
```

使用：

```ts
import { DouyinAppService } from 'nestjs-douyin-api'

@Injectable()
export class UserService {
  constructor(private readonly douyinAppService: DouyinAppService) {}
}
```

当成工具类使用：

```ts
import { DouyinAppService } from 'nestjs-douyin-api'

const douyinApp = new DouyinAppService({ appid: '', secret: '' })
```


## 使用文档

- [抖音小程序开发文档](https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/introduction/overview)


## License

[MIT](/LICENSE)
