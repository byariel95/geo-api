import { DocumentBuilder , SwaggerModule} from '@nestjs/swagger';
import { INestApplication} from '@nestjs/common';

export const initSwagger = (app: INestApplication) => {
    const swaggerConfig = new DocumentBuilder()
    .setTitle('Api Geo')
    .setDescription('Routes Avalilable')
    .setVersion('1.0')
    .build();
    const document = SwaggerModule.createDocument(app,swaggerConfig);
    SwaggerModule.setup('docs',app, document);
};