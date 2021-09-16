import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initSwagger } from './app.swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('main');


  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,
    transformOptions:{
      enableImplicitConversion:true // convercion de los dtos
    }
  }));

  initSwagger(app);
  await app.listen(3000);
  logger.debug(`Server is running at ${await app.getUrl()}/docs`);
}
bootstrap();
