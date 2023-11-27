// main.ts 是负责启动 Nest 的 ioc 容器的
// 调用下 useStaticAssets 来支持静态资源的请求, 给 create 方法传入 NestExpressApplication 的泛型参数才有 useStaticAssets这些方法

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets('public', { prefix: '/static' });
  await app.listen(3000);
}
bootstrap();
