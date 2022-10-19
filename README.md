# NEST DOUYIN

基于 Nest 封装的抖音小程序 API，持续完善中。


## 使用

导入模块：

```ts
import { DouyinAppModule } from 'nest-douyin';

@Module({
  imports: [
    DouyinAppModule.forRoot({ appid: '', secret: '' }),
  ],
})
```

使用：

```ts
import { DouyinAppService } from 'nest-douyin';

@Injectable()
export class UserService {
  constructor(private readonly douyinAppService: DouyinAppService) {}
}
```

当成工具类使用：

```ts
import { DouyinAppService } from 'nest-douyin';

const douyinApp = new DouyinAppService({ appid: '', secret: '' });
```


## 使用文档

- [抖音小程序开发文档](https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/introduction/overview)


## License

[MIT](/LICENSE)
